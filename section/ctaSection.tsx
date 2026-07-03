import Image from "next/image";
import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section className="bg-black px-5 py-14 text-white sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#020522]"
        >
          <Image
            src="/home-roadmap-cta.webp"
            alt=""
            fill
            aria-hidden="true"
            loading="lazy"
            quality={72}
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-cover object-center"
          />
          <div className="relative z-10 flex min-h-[360px] items-center">
            <div className="max-w-[650px] px-7 py-10 sm:px-10 lg:px-12">
              <h2 className="text-[30px] font-normal leading-[1.32] tracking-[-0.02em] sm:text-[38px] lg:text-[26px]">
                You&apos;ve seen how we helped{" "}
                <span className="font-bold">Khadi Organique</span>,{" "}
                <span className="font-bold">Rubber Hose India</span>, and{" "}
                <span className="font-bold">Comac India</span> build stronger
                digital growth.
              </h2>

              <p className="mt-7 max-w-[570px] text-[15px] font-semibold leading-7 text-white sm:text-[14px]">
                From high-performing websites to measurable marketing momentum,
                our execution goes beyond design to deliver business ROI.
              </p>

              <Link
                href="/contact"
                className="mt-11 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-[13px] font-bold text-black shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:bg-[#eaf6ff]"
              >
                Consult our Experts for Growth Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
