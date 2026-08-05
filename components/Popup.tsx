/* eslint-disable @next/next/no-img-element */
"use client";

import { CheckCircle2, Loader2, X } from "lucide-react";
import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const SERVICES = [
  "Digital Marketing",
  "Performance Marketing",
  "SEO Services",
  "Social Media Marketing",
  "Branding & Creative",
  "Website Development",
  "Automation & CRM",
  "Other Requirement",
] as const;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  source: string;
  pageUrl: string;
};

const EMPTY_FORM: EnquiryPayload = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  source: "Website enquiry",
  pageUrl: "",
};

export default function EnquiryPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<EnquiryPayload>(EMPTY_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleTriggerClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest<HTMLElement>("[data-enquiry-trigger]");
      if (!trigger) return;

      event.preventDefault();

      const source =
        trigger.dataset.enquirySource?.trim() ||
        trigger.textContent?.trim() ||
        "Website CTA";
      const service = trigger.dataset.enquiryService?.trim() || "";

      setForm((current) => ({
        ...current,
        source,
        service,
        pageUrl: window.location.href,
      }));
      setStatus("idle");
      setErrorMessage("");
      setIsOpen(true);
    };

    document.addEventListener("click", handleTriggerClick, true);
    return () =>
      document.removeEventListener("click", handleTriggerClick, true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closePopup = () => {
    if (status === "submitting") return;
    setIsOpen(false);
  };

  const updateField =
    (field: keyof EnquiryPayload) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      let value = event.target.value;

      if (field === "phone") {
        value = value.replace(/\D/g, "").slice(0, 10);
      }

      setForm((current) => ({ ...current, [field]: value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageUrl: form.pageUrl || window.location.href,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.message || "Unable to submit your enquiry right now.",
        );
      }

      setStatus("success");
      setForm((current) => ({
        ...EMPTY_FORM,
        source: current.source,
        pageUrl: window.location.href,
      }));
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-black/72 px-4 py-6 backdrop-blur-[5px] sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <div className="relative my-auto w-full max-w-[980px] overflow-hidden rounded-[22px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.38)]">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-black transition hover:border-[#E1122B] hover:bg-[#E1122B] hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-[0.76fr_1.24fr]">
          <div className="relative hidden min-h-full overflow-hidden bg-[#0e276f] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#E1122B]/24 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <img
                src="/logo/mainlogo-optimized.webp"
                alt="BrainADZ Marketing"
                className="h-auto w-32 rounded-lg bg-white px-3 py-2 object-contain"
              />

              <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b74]">
                New business enquiry
              </p>
              <h2 className="mt-4 text-[37px] font-semibold leading-[1.08] tracking-[-0.04em]">
                Let&apos;s build your next growth move.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-white/72">
                Share your requirement and our strategy team will connect with
                you to understand the right mix of marketing, creative and
                technology services.
              </p>
            </div>

            <div className="relative mt-10 space-y-4 border-t border-white/20 pt-7 text-[13px] text-white/76">
              <p className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[11px]">
                  01
                </span>
                Clear requirement discussion
              </p>
              <p className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[11px]">
                  02
                </span>
                Relevant team consultation
              </p>
              <p className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[11px]">
                  03
                </span>
                Practical next-step roadmap
              </p>
            </div>
          </div>

          <div className="max-h-[calc(100dvh-48px)] overflow-y-auto px-5 py-7 sm:px-9 sm:py-9 lg:px-11 lg:py-10">
            {status === "success" ? (
              <div className="flex min-h-[510px] flex-col items-center justify-center text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#E1122B]/10 text-[#E1122B]">
                  <CheckCircle2 className="h-10 w-10" strokeWidth={1.7} />
                </span>
                <p className="mt-7 text-[12px] font-bold uppercase tracking-[0.18em] text-[#E1122B]">
                  Enquiry received
                </p>
                <h2 className="mt-3 text-[34px] font-semibold tracking-[-0.04em] text-black sm:text-[42px]">
                  Thank you!
                </h2>
                <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-black/62">
                  Your details have been shared with the BrainADZ Marketing
                  team. We&apos;ll contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-8 min-h-12 rounded-full bg-[#0e276f] px-8 text-[13px] font-semibold text-white transition hover:bg-[#E1122B]"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="pr-12">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E1122B]">
                    Tell us what you need
                  </p>
                  <h2
                    id="enquiry-popup-title"
                    className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.035em] text-black sm:text-[38px]"
                  >
                    Start your enquiry
                  </h2>
                  <p className="mt-3 text-[14px] leading-6 text-black/55">
                    Fields marked with * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name *">
                      <input
                        name="name"
                        value={form.name}
                        onChange={updateField("name")}
                        autoComplete="name"
                        required
                        placeholder="Enter your name"
                        className={inputClassName}
                      />
                    </Field>

                    <Field label="Work email *">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={updateField("email")}
                        autoComplete="email"
                        required
                        placeholder="name@company.com"
                        className={inputClassName}
                      />
                    </Field>

                    <Field label="Phone number *">
                      <div className="flex overflow-hidden rounded-[10px] border border-black/15 bg-white focus-within:border-[#E1122B] focus-within:ring-2 focus-within:ring-[#E1122B]/10">
                        <span className="grid min-h-12 place-items-center border-r border-black/10 bg-[#f6f6f6] px-3 text-[14px] font-semibold text-black/64">
                          +91
                        </span>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={updateField("phone")}
                          inputMode="numeric"
                          autoComplete="tel"
                          minLength={10}
                          maxLength={10}
                          pattern="[0-9]{10}"
                          required
                          placeholder="10-digit number"
                          className="min-h-12 w-full bg-transparent px-4 text-[14px] text-black outline-none placeholder:text-black/35"
                        />
                      </div>
                    </Field>

                    <Field label="Company / brand">
                      <input
                        name="company"
                        value={form.company}
                        onChange={updateField("company")}
                        autoComplete="organization"
                        placeholder="Your company name"
                        className={inputClassName}
                      />
                    </Field>
                  </div>

                  <Field label="Service required *">
                    <select
                      name="service"
                      value={form.service}
                      onChange={updateField("service")}
                      required
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Requirement">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={updateField("message")}
                      rows={4}
                      placeholder="Briefly tell us your goal, challenge or project requirement"
                      className={`${inputClassName} min-h-28 resize-none py-3`}
                    />
                  </Field>

                  <label className="flex items-start gap-3 text-[12px] leading-5 text-black/52">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-[#E1122B]"
                    />
                    <span>
                      I agree to be contacted by BrainADZ regarding this
                      enquiry.
                    </span>
                  </label>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-[#E1122B] px-7 text-[14px] font-semibold text-white transition hover:bg-[#0e276f] disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto sm:min-w-52"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending enquiry
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

const inputClassName =
  "min-h-12 w-full rounded-[10px] border border-black/15 bg-white px-4 text-[14px] text-black outline-none transition placeholder:text-black/35 focus:border-[#E1122B] focus:ring-2 focus:ring-[#E1122B]/10";

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.08em] text-black/55">
        {label}
      </span>
      {children}
    </label>
  );
}
