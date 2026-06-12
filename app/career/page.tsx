"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  IndianRupee,
  CheckCircle2,
  Upload,
  Phone,
  Mail,
  User,
  FileText,
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

type ApiJob = {
  _id: string;
  title: string;
  description: string;
  type: "full-time" | "part-time" | "internship";
  location: string;
  qualificationAndExperience: string;
  experienceMin: number;
  experienceMax: number;
  salaryLabel: string;
  responsibilities: string[];
  requirements: string[];
  goodToHave: string[];
  isActive: boolean;
  createdAt: string;
};

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  summary: string;
  qualificationAndExperience: string;
  responsibilities: string[];
  requirements: string[];
  skillsGoodToHave: string[];
};

function formatType(t: ApiJob["type"]) {
  if (t === "full-time") return "Full-time";
  if (t === "part-time") return "Part-time";
  return "Internship";
}

function formatExp(min: number, max: number) {
  if (min === max) return `${min} years`;
  return `${min}–${max} years`;
}

export default function CareersPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const bulletIconClass = "mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00AAB7]";

  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobsError, setJobsError] = useState<string | null>(null);

  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  const [jobAppliedFor, setJobAppliedFor] = useState<string>("");
  const [jobAppliedForId, setJobAppliedForId] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [callbackName, setCallbackName] = useState("");
  const [callbackEmail, setCallbackEmail] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackCompany, setCallbackCompany] = useState("");
  const [callbackService, setCallbackService] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  const selectedJob = useMemo(() => {
    return jobs.find((j) => j.title === jobAppliedFor);
  }, [jobs, jobAppliedFor]);

  const resetForm = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setExperience("");
    setLocation("");
    setNoticePeriod("");
    setMessage("");
    setResume(null);
    setFormError(null);

    if (resumeInputRef.current) resumeInputRef.current.value = "";
  };

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    return /^[0-9+]{10,15}$/.test(cleaned);
  };

  const fetchJobs = useCallback(async () => {
    setJobsLoading(true);
    setJobsError(null);

    try {
      if (!API) {
        setJobsError("NEXT_PUBLIC_API_BASE_URL is missing.");
        setJobsLoading(false);
        return;
      }

      const res = await fetch(`${API}/jobs`, { cache: "no-store" });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setJobsError(data?.message || "Failed to load jobs.");
        setJobsLoading(false);
        return;
      }

      const list: ApiJob[] = Array.isArray(data?.data) ? data.data : [];
      const active = list.filter((j) => j.isActive);

      const mapped: Job[] = active.map((j) => ({
        id: j._id,
        title: j.title,
        department: "General",
        location: j.location,
        type: formatType(j.type),
        experience: formatExp(j.experienceMin, j.experienceMax),
        salary: j.salaryLabel || "Not disclosed",
        summary: j.description,
        qualificationAndExperience: j.qualificationAndExperience || "",
        responsibilities: j.responsibilities || [],
        requirements: j.requirements || [],
        skillsGoodToHave: j.goodToHave || [],
      }));

      setJobs(mapped);

      if (mapped.length > 0) {
        setActiveJobId((prev) => prev ?? mapped[0].id);
        setJobAppliedFor((prev) => prev || mapped[0].title);
        setJobAppliedForId((prev) => prev ?? mapped[0].id);
      }
    } catch {
      setJobsError("Server not reachable.");
    } finally {
      setJobsLoading(false);
    }
  }, [API]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setFormError(null);

    if (!API) return setFormError("NEXT_PUBLIC_API_BASE_URL is missing.");
    if (!fullName.trim()) return setFormError("Please enter your full name.");
    if (!phone.trim() || !validatePhone(phone)) {
      return setFormError("Please enter a valid phone number.");
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      return setFormError("Please enter a valid email.");
    }
    if (!resume) return setFormError("Please upload your resume.");
    if (resume.size > 5 * 1024 * 1024) return setFormError("Resume file must be under 5MB.");

    try {
      setSubmitting(true);

      const fd = new FormData();
      if (jobAppliedForId) fd.append("jobId", jobAppliedForId);
      fd.append("jobTitle", jobAppliedFor);

      fd.append("fullName", fullName);
      fd.append("phone", phone);
      fd.append("email", email);

      if (experience) fd.append("experience", experience);
      if (location) fd.append("location", location);
      if (noticePeriod) fd.append("noticePeriod", noticePeriod);
      if (message) fd.append("message", message);

      fd.append("resume", resume);

      const res = await fetch(`${API}/careers/`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setFormError(data?.message || "Failed to submit application.");
        return;
      }

      setSuccess(true);
      resetForm();
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#10282d]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#06363c_0%,#075059_45%,#0295a0_100%)] mt-[-80] pt-10">
        {/* dotted pattern */}
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]" />

        {/* wave shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[-10%] top-[26%] h-[220px] w-[70%] rotate-[-10deg] bg-white/10 [clip-path:polygon(0_45%,15%_32%,33%_52%,51%_35%,70%_58%,100%_22%,100%_62%,0_100%)]" />
          <div className="absolute left-[20%] top-[48%] h-[250px] w-[85%] rotate-[-8deg] bg-white/10 [clip-path:polygon(0_28%,20%_45%,38%_20%,54%_50%,72%_26%,100%_52%,100%_100%,0_100%)]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left hero content */}
            <div className="pt-2 lg:pt-4">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                About BrainADZ • Strategy • Execution • Scale
              </div>

              <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[0.98] text-white sm:text-4xl lg:text-5xl">
                Build your career with a team that grows brands online & on-ground.
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
                BrainADZ Marketing brings together branding, social media, design, websites,
                performance marketing, and execution under one ecosystem. If you want real client
                exposure, practical learning, and a fast-paced growth environment, join a team that
                turns ideas into business results.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-bold text-[#062b31] transition hover:scale-[1.01]"
                >
                  View Openings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#apply"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              
            </div>

            {/* Right hero form */}
            <div className="lg:pt-6">
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-7">
                <h2 className="text-2xl font-extrabold uppercase tracking-[0.12em] text-white/95 sm:text-[30px] sm:leading-[1.2]">
                  Connect with our hiring team
                </h2>

                <div className="mt-6 h-px w-full bg-white/15" />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <HeroInput
                    value={callbackName}
                    onChange={setCallbackName}
                    placeholder="Your name"
                  />
                  <HeroInput
                    value={callbackEmail}
                    onChange={setCallbackEmail}
                    placeholder="Email address"
                    type="email"
                  />
                  <HeroInput
                    value={callbackPhone}
                    onChange={setCallbackPhone}
                    placeholder="Phone"
                    type="tel"
                  />
                  <HeroInput
                    value={callbackCompany}
                    onChange={setCallbackCompany}
                    placeholder="Current company"
                  />
                </div>

                <div className="mt-4">
                  <select
                    value={callbackService}
                    onChange={(e) => setCallbackService(e.target.value)}
                    className="h-14 w-full rounded-2xl border border-white/15 bg-white/10 px-4 text-base text-white outline-none backdrop-blur placeholder:text-white/55 focus:border-white/30"
                  >
                    <option value="" className="bg-[#0a3d44] text-white">
                      Choose department
                    </option>
                    <option value="Graphic Design" className="bg-[#0a3d44] text-white">
                      Graphic Design
                    </option>
                    <option value="Website Development" className="bg-[#0a3d44] text-white">
                      Website Development
                    </option>
                    <option value="SEO" className="bg-[#0a3d44] text-white">
                      SEO
                    </option>
                    <option value="Social Media" className="bg-[#0a3d44] text-white">
                      Social Media
                    </option>
                    <option value="Video Editing" className="bg-[#0a3d44] text-white">
                      Video Editing
                    </option>
                    <option value="Digital Marketing" className="bg-[#0a3d44] text-white">
                      Digital Marketing
                    </option>
                    <option value="Business Development" className="bg-[#0a3d44] text-white">
                      Business Development
                    </option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-5 h-14 w-full rounded-2xl bg-white text-base font-bold text-[#062b31] transition hover:scale-[1.01]"
                >
                  Request a Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CULTURE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full bg-[#00AAB7]/10 blur-2xl" />
              <div className="absolute -bottom-3 right-10 h-20 w-20 rounded-full bg-[#00AAB7]/10 blur-2xl" />

              <div className="overflow-hidden rounded-[28px] border border-[#e2eff1] bg-white shadow-sm">
                <Image
                  src="/teams/teams.png"
                  alt="BrainADZ Marketing Team"
                  width={900}
                  height={520}
                  className="h-[340px] w-full object-cover sm:h-[430px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex rounded-full border border-[#00AAB7]/20 bg-[#ecfbfc] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0a7f89]">
                Career Growth
              </div>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#0c2227] sm:text-4xl">
                Work where strategy, creativity and execution come together.
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#587379]">
                At BrainADZ Marketing, every role connects to real client growth. Our team works
                across websites, social media, branding, ad campaigns, videos, creative design,
                exhibitions, and content. You don’t just work on tasks here — you contribute to
                visible outcomes.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#587379]">
                We look for people who are sharp, responsible, creative, and ready to move with
                speed. Whether you’re joining as a designer, marketer, developer, editor, content
                writer, or business development executive, you get room to learn and perform.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#e2eff1] bg-[#fbfefe] p-5">
                  <p className="text-sm text-[#6b848a]">Work Culture</p>
                  <p className="mt-1 text-base font-bold text-[#0c2227]">Practical & Collaborative</p>
                </div>
                <div className="rounded-2xl border border-[#e2eff1] bg-[#fbfefe] p-5">
                  <p className="text-sm text-[#6b848a]">Learning</p>
                  <p className="mt-1 text-base font-bold text-[#0c2227]">Live Project Exposure</p>
                </div>
                <div className="rounded-2xl border border-[#e2eff1] bg-[#fbfefe] p-5">
                  <p className="text-sm text-[#6b848a]">Growth</p>
                  <p className="mt-1 text-base font-bold text-[#0c2227]">Performance Driven</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
{/* WHY JOIN */}
<section className="bg-[#f8fcfc]">
  <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
    <h2 className="text-3xl font-extrabold text-[#0c2227] sm:text-4xl">
      Why Join BrainADZ Marketing?
    </h2>
    <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#587379]">
      We are building a team that values clarity, ownership, design quality, performance,
      communication, and execution speed.
    </p>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {[
        {
          img: "/icons/1.png",
          title: "Creative Ownership",
          desc: "Work on brand communication, visual design, and concepts that go live.",
        },
        {
          img: "/icons/2.png",
          title: "Digital-First Exposure",
          desc: "Contribute across websites, SEO, ad creatives, UI, and social platforms.",
        },
        {
          img: "/icons/3.png",
          title: "Campaign Experience",
          desc: "Be part of real marketing campaigns with measurable outcomes.",
        },
        {
          img: "/icons/4.png",
          title: "Performance-Based Growth",
          desc: "Your consistency, output, and thinking directly influence your growth.",
        },
        {
          img: "/icons/5.png",
          title: "Team Collaboration",
          desc: "Work closely with designers, strategists, developers, and marketers.",
        },
        {
          img: "/icons/6.png",
          title: "Structured Environment",
          desc: "Clear processes, defined tasks, and execution-focused culture.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className=" border border-[#e2eff1] bg-white p-6 shadow-sm transition hover:border-[#00AAB7]/30 hover:shadow-md"
        >
          <Image
            src={item.img}
            alt={item.title}
            width={96}
            height={96}
            className="h-24 w-24 object-contain"
            sizes="96px"
          />

          <h3 className="mt-0 text-lg font-bold text-[#0c2227]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#587379]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* OPENINGS */}
      <section id="openings" className="bg-white">
        <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex rounded-full border border-[#00AAB7]/20 bg-[#ecfbfc] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0a7f89]">
                Open Positions
              </div>

              <h2 className="mt-5 text-3xl font-extrabold text-[#0c2227] sm:text-4xl">
                Current Career Opportunities
              </h2>

              <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#587379]">
                Explore active roles in Graphic Design, Website Development, SEO, Social Media,
                Content Writing, Video Editing, Digital Marketing, Business Development, and more.
              </p>

              {jobsError && <p className="mt-3 text-sm font-semibold text-red-500">{jobsError}</p>}
              {jobsLoading && <p className="mt-3 text-sm text-[#6c848a]">Loading jobs...</p>}
              {!jobsLoading && !jobsError && jobs.length === 0 && (
                <p className="mt-3 text-sm text-[#6c848a]">No openings available right now.</p>
              )}
            </div>

            <a
              href="#apply"
              onClick={() => {
                setJobAppliedFor("General Application");
                setJobAppliedForId(null);
              }}
              className="inline-flex items-center justify-center rounded-full border border-[#dceef0] bg-white px-6 py-3 text-sm font-bold text-[#0c2227] transition hover:bg-[#f6feff]"
            >
              Submit General Profile
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {jobs.map((job) => {
                const active = activeJobId === job.id;

                return (
                  <button
                    key={job.id}
                    type="button"
                    onClick={() => {
                      setActiveJobId(job.id);
                      setJobAppliedFor(job.title);
                      setJobAppliedForId(job.id);
                    }}
                    className={`w-full rounded-[24px] border p-5 text-left transition ${
                      active
                        ? "border-[#00AAB7]/40 bg-[#f3fdfe] shadow-sm"
                        : "border-[#e2eff1] bg-white hover:border-[#ccecef]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold text-[#0c2227]">{job.title}</p>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-[#6d858b] transition ${active ? "rotate-180" : ""}`}
                      />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#648087] sm:grid-cols-4">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#8aa6ab]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#8aa6ab]" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-[#8aa6ab]" />
                        {job.experience}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-[#8aa6ab]" />
                        {job.salary}
                      </span>
                    </div>

                    {active && job.qualificationAndExperience?.trim() ? (
                      <div className="mt-4 rounded-2xl border border-[#00AAB7]/15 bg-white p-4">
                        <p className="text-sm font-bold text-[#0c2227]">Qualification & Experience</p>
                        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#587379]">
                          {job.qualificationAndExperience}
                        </p>
                      </div>
                    ) : null}

                    {active && (
                      <div className="mt-4 rounded-2xl bg-white p-4 border border-[#eef6f7]">
                        <p className="text-sm font-bold text-[#0c2227]">Role Summary</p>
                        <p className="mt-2 text-sm leading-7 text-[#587379]">{job.summary}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="rounded-[28px] border border-[#e2eff1] bg-white p-6 shadow-sm">
              {selectedJob ? (
                <>
                  <h3 className="text-2xl font-bold text-[#0c2227]">{selectedJob.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#587379]">{selectedJob.summary}</p>

                  <div className="mt-6 grid gap-4 text-sm text-[#587379] sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#8aa6ab]" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#8aa6ab]" />
                      {selectedJob.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#8aa6ab]" />
                      {selectedJob.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4 text-[#8aa6ab]" />
                      {selectedJob.salary}
                    </div>
                  </div>

                  {selectedJob.qualificationAndExperience?.trim() ? (
                    <div className="mt-6 rounded-2xl border border-[#00AAB7]/15 bg-[#f4fdfe] p-4">
                      <p className="flex items-center gap-2 text-sm font-bold text-[#0c2227]">
                        <GraduationCap className="h-4 w-4 text-[#00AAB7]" />
                        Qualification & Experience
                      </p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-7 text-[#587379]">
                        {selectedJob.qualificationAndExperience}
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-bold text-[#0c2227]">Responsibilities</h4>
                      <ul className="mt-3 space-y-3 text-sm leading-7 text-[#587379]">
                        {selectedJob.responsibilities.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#0c2227]">Requirements</h4>
                      <ul className="mt-3 space-y-3 text-sm leading-7 text-[#587379]">
                        {selectedJob.requirements.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                            {r}
                          </li>
                        ))}
                      </ul>

                      {selectedJob.skillsGoodToHave?.length > 0 && (
                        <>
                          <h4 className="mt-6 text-sm font-bold text-[#0c2227]">Preferred Skills</h4>
                          <ul className="mt-3 space-y-3 text-sm leading-7 text-[#587379]">
                            {selectedJob.skillsGoodToHave.map((r, i) => (
                              <li key={i} className="flex gap-2">
                                <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  <a
                    href="#apply"
                    onClick={() => {
                      setJobAppliedFor(selectedJob.title);
                      setJobAppliedForId(selectedJob.id);
                    }}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#00AAB7] px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
                  >
                    Apply for this role
                  </a>
                </>
              ) : (
                <p className="text-[#6c848a]">Select a role to view details.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="bg-[#f8fcfc]">
        <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-[#00AAB7]/20 bg-[#ecfbfc] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0a7f89]">
                Apply Now
              </div>

              <h2 className="mt-5 text-3xl font-extrabold text-[#0c2227] sm:text-4xl">
                Start your journey with BrainADZ Marketing
              </h2>

              <p className="mt-4 text-[15px] leading-8 text-[#587379]">
                Share your details and resume with our team. We review profiles based on role
                requirement, skill set, experience, and overall fit.
              </p>

              <div className="mt-8 rounded-[24px] border border-[#e2eff1] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0c2227]">Application Guidelines</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#587379]">
                  <li className="flex gap-2">
                    <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                    Upload your resume in PDF, DOC, or DOCX format up to 5 MB.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                    Mention your current location, total experience, and notice period clearly.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                    Add a short note about your role interest and relevant work experience.
                  </li>
                </ul>
              </div>

              <div className="mt-6 rounded-[24px] border border-[#e2eff1] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0c2227]">HR Contact Details</h3>
                <div className="mt-4 space-y-3 text-sm text-[#587379]">
                  <Link
                    href="https://wa.me/919574511152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#0c2227]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#8aa6ab]" />
                    WhatsApp: +91 9574511152
                  </Link>

                  <Link
                    href="mailto:hr@brainadzmarketing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#0c2227]"
                  >
                    <Mail className="h-4 w-4 text-[#8aa6ab]" />
                    Email: hr@brainadzmarketing.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e2eff1] bg-white p-6 shadow-sm">
              {success ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="text-base font-bold text-[#0c2227]">Application submitted</p>
                      <p className="mt-2 text-sm leading-7 text-[#587379]">
                        Thank you. Our team will review your profile and contact you if a suitable
                        opening matches your background.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSuccess(false)}
                        className="mt-4 rounded-full bg-[#00AAB7] px-5 py-2.5 text-sm font-bold text-white"
                      >
                        Submit another application
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  {formError && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b848a]">
                      Applying For
                    </label>
                    <select
                      value={jobAppliedFor}
                      onChange={(e) => {
                        const val = e.target.value;
                        setJobAppliedFor(val);

                        if (val === "General Application") {
                          setJobAppliedForId(null);
                          return;
                        }

                        const found = jobs.find((x) => x.title === val);
                        setJobAppliedForId(found?.id ?? null);
                      }}
                      className="mt-2 h-14 w-full rounded-2xl border border-[#dceef0] bg-[#f9fcfc] px-4 text-sm text-[#10282d] outline-none focus:border-[#00AAB7]/60 focus:ring-1 focus:ring-[#00AAB7]/20"
                    >
                      {jobs.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                      <option value="General Application">
                        General Application (Any Suitable Role)
                      </option>
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      icon={<User className="h-4 w-4 text-[#90a9ae]" />}
                      value={fullName}
                      onChange={setFullName}
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                    <FormField
                      label="Phone"
                      icon={<Phone className="h-4 w-4 text-[#90a9ae]" />}
                      value={phone}
                      onChange={setPhone}
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                    <FormField
                      label="Email"
                      icon={<Mail className="h-4 w-4 text-[#90a9ae]" />}
                      value={email}
                      onChange={setEmail}
                      type="email"
                      placeholder="you@domain.com"
                      required
                    />
                    <FormField
                      label="Current Location"
                      icon={<MapPin className="h-4 w-4 text-[#90a9ae]" />}
                      value={location}
                      onChange={setLocation}
                      type="text"
                      placeholder="e.g. Delhi NCR"
                    />
                    <FormField
                      label="Total Experience"
                      icon={<Briefcase className="h-4 w-4 text-[#90a9ae]" />}
                      value={experience}
                      onChange={setExperience}
                      type="text"
                      placeholder="e.g. 2 years"
                    />
                    <FormField
                      label="Notice Period"
                      icon={<Clock className="h-4 w-4 text-[#90a9ae]" />}
                      value={noticePeriod}
                      onChange={setNoticePeriod}
                      type="text"
                      placeholder="e.g. Immediate or 15 days"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b848a]">
                      Resume
                    </label>
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#dceef0] bg-[#f9fcfc] px-4 py-3 focus-within:border-[#00AAB7]/60 focus-within:ring-1 focus-within:ring-[#00AAB7]/20">
                      <Upload className="h-4 w-4 text-[#90a9ae]" />
                      <input
                        required
                        ref={resumeInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full text-sm text-[#10282d] outline-none file:mr-3 file:rounded-md file:border-0 file:bg-[#00AAB7]/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[#0c2227] hover:file:bg-[#00AAB7]/20"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          if (file && file.size > 5 * 1024 * 1024) {
                            setFormError("Resume must be under 5MB.");
                            e.currentTarget.value = "";
                            setResume(null);
                            return;
                          }
                          setResume(file);
                        }}
                      />
                    </div>

                    {resume && (
                      <p className="mt-2 text-xs text-[#6b848a]">
                        Selected: <span className="font-semibold text-[#0c2227]">{resume.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b848a]">
                      Message
                    </label>
                    <div className="mt-2 flex items-start gap-3 rounded-2xl border border-[#dceef0] bg-[#f9fcfc] px-4 py-3 focus-within:border-[#00AAB7]/60 focus-within:ring-1 focus-within:ring-[#00AAB7]/20">
                      <FileText className="mt-1 h-4 w-4 text-[#90a9ae]" />
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        placeholder="Write a short note about your experience and role interest."
                        className="w-full resize-none bg-transparent text-sm text-[#10282d] outline-none placeholder:text-[#9ab1b5]"
                      />
                    </div>
                  </div>

                  <button
                    disabled={submitting}
                    type="submit"
                    className="h-14 w-full rounded-2xl bg-[#00AAB7] text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      className="h-14 w-full rounded-2xl border border-[#dceef0] bg-[#f9fcfc] px-4 text-sm text-[#10282d] outline-none placeholder:text-[#8fa7ab] focus:border-[#00AAB7]/50"
    />
  );
}

function FormField({
  label,
  icon,
  value,
  onChange,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b848a]">
        {label}
      </label>
      <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#dceef0] bg-[#f9fcfc] px-4 py-3 focus-within:border-[#00AAB7]/60 focus-within:ring-1 focus-within:ring-[#00AAB7]/20">
        {icon}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-[#10282d] outline-none placeholder:text-[#9ab1b5]"
        />
      </div>
    </div>
  );
}
