"use client";

/* eslint-disable @next/next/no-img-element */

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
  return `${min}-${max} years`;
}

export default function CareersPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const bulletIconClass = "mt-1 h-4 w-4 shrink-0 text-[#1467f5]";

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
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/about/about.avif"
          alt="BrainADZ office and team workspace"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.26)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] font-medium leading-none"
          >
            <Link href="/" className="text-[#1467f5] transition hover:text-white">
              Home
            </Link>
            <span className="text-white/70">/</span>
            <span className="text-white">Career</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
            Build your career with a team that grows brands online & on-ground.
          </h1>

          <div className="mt-auto max-w-[650px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[16px] font-normal leading-[1.38] tracking-[-0.02em] text-white sm:text-[18px] lg:text-[22px]">
              Creators, partners and clients putting digital growth to work in
              the real world
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-[4px] bg-[#1467f5] px-5 text-[15px] font-medium text-white transition hover:bg-[#0f56d6] sm:min-h-14 sm:px-6"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="border-b border-white/10 bg-black py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <div className="relative">
              <div className="overflow-hidden rounded-[6px] border border-white/10 bg-[#101010]">
                <Image
                  src="/teams/teams.png"
                  alt="BrainADZ Marketing Team"
                  width={900}
                  height={520}
                  className="h-[360px] w-full object-cover sm:h-[500px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="max-w-[760px]">
              <div className="flex items-center gap-3 text-[13px] font-semibold uppercase text-[#6995ff]">
                <span className="h-2 w-2 rounded-full bg-[#1467f5]" />
                Career Growth
              </div>

              <h2 className="mt-6 text-[40px] font-medium leading-[1.08] text-white sm:text-[50px] lg:text-[56px]">
                Work where strategy, creativity and execution come together.
              </h2>

              <p className="mt-7 text-[16px] leading-8 text-white/65">
                At BrainADZ Marketing, every role connects to real client growth. Our team works
                across websites, social media, branding, ad campaigns, videos, creative design,
                exhibitions, and content. You don’t just work on tasks here — you contribute to
                visible outcomes.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-white/65">
                We look for people who are sharp, responsible, creative, and ready to move with
                speed. Whether you’re joining as a designer, marketer, developer, editor, content
                writer, or business development executive, you get room to learn and perform.
              </p>

              <div className="mt-10 grid border-y border-white/10 sm:grid-cols-3">
                <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:pr-5">
                  <p className="text-[12px] font-medium uppercase text-white/38">Work Culture</p>
                  <p className="mt-2 text-[15px] font-semibold leading-6 text-white">Practical & Collaborative</p>
                </div>
                <div className="border-b border-white/10 py-5 sm:border-b-0 sm:border-r sm:px-5">
                  <p className="text-[12px] font-medium uppercase text-white/38">Learning</p>
                  <p className="mt-2 text-[15px] font-semibold leading-6 text-white">Live Project Exposure</p>
                </div>
                <div className="py-5 sm:pl-5">
                  <p className="text-[12px] font-medium uppercase text-white/38">Growth</p>
                  <p className="mt-2 text-[15px] font-semibold leading-6 text-white">Performance Driven</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="border-b border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <p className="text-[13px] font-semibold uppercase text-[#6995ff]">
            Why BrainADZ
          </p>
          <h2 className="mt-4 text-[42px] font-medium leading-[1.08] text-white sm:text-[54px]">
            Why Join BrainADZ Marketing?
          </h2>
          <p className="mt-5 max-w-[820px] text-[16px] leading-8 text-white/58">
            We are building a team that values clarity, ownership, design quality, performance,
            communication, and execution speed.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
            ].map((item) => (
              <div
                key={item.title}
                className="min-h-[260px] rounded-[6px] border border-white/10 bg-[#111111] p-6 transition hover:border-[#1467f5] sm:p-7"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={72}
                  height={72}
                  className="h-16 w-16 object-contain"
                  sizes="64px"
                />

                <h3 className="mt-8 text-[22px] font-semibold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[430px] text-[15px] leading-7 text-white/55">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="scroll-mt-24 bg-black py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-[13px] font-semibold uppercase text-[#6995ff]">
                Open Positions
              </div>

              <h2 className="mt-4 text-[42px] font-medium leading-[1.08] text-white sm:text-[54px]">
                Current Career Opportunities
              </h2>

              <p className="mt-5 max-w-[900px] text-[16px] leading-8 text-white/58">
                Explore active roles in Graphic Design, Website Development, SEO, Social Media,
                Content Writing, Video Editing, Digital Marketing, Business Development, and more.
              </p>

              {jobsError && <p className="mt-4 text-sm font-semibold text-red-400">{jobsError}</p>}
              {jobsLoading && <p className="mt-4 text-sm text-white/45">Loading jobs...</p>}
              {!jobsLoading && !jobsError && jobs.length === 0 && (
                <p className="mt-4 text-sm text-white/45">No openings available right now.</p>
              )}
            </div>

            <a
              href="#apply"
              onClick={() => {
                setJobAppliedFor("General Application");
                setJobAppliedForId(null);
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-white/20 px-6 text-[13px] font-semibold text-white transition hover:border-[#1467f5] hover:bg-[#1467f5]"
            >
              Submit General Profile
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start xl:gap-8">
            <div className="space-y-3">
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
                    className={`w-full rounded-[6px] border p-5 text-left transition sm:p-6 ${active
                        ? "border-[#1467f5] bg-[#101827]"
                        : "border-white/10 bg-[#0d0d0d] hover:border-white/25"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[19px] font-semibold text-white">{job.title}</p>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-white/42 transition ${active ? "rotate-180 text-[#6995ff]" : ""}`}
                      />
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4 text-[12px] text-white/48 sm:grid-cols-4">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#6995ff]" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#6995ff]" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-[#6995ff]" />
                        {job.experience}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-[#6995ff]" />
                        {job.salary}
                      </span>
                    </div>

                    {active && job.qualificationAndExperience?.trim() ? (
                      <div className="mt-5 border-t border-white/10 pt-5">
                        <p className="text-[13px] font-semibold text-white">Qualification & Experience</p>
                        <p className="mt-2 whitespace-pre-line text-[14px] leading-7 text-white/58">
                          {job.qualificationAndExperience}
                        </p>
                      </div>
                    ) : null}

                    {active && (
                      <div className="mt-5 border-t border-white/10 pt-5">
                        <p className="text-[13px] font-semibold text-white">Role Summary</p>
                        <p className="mt-2 text-[14px] leading-7 text-white/58">{job.summary}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="rounded-[6px] border border-white/12 bg-[#101010] p-6 lg:sticky lg:top-28 sm:p-8">
              {selectedJob ? (
                <>
                  <h3 className="text-[30px] font-semibold leading-tight text-white">{selectedJob.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-white/58">{selectedJob.summary}</p>

                  <div className="mt-7 grid gap-4 border-y border-white/10 py-6 text-[13px] text-white/58 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#6995ff]" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#6995ff]" />
                      {selectedJob.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-[#6995ff]" />
                      {selectedJob.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4 text-[#6995ff]" />
                      {selectedJob.salary}
                    </div>
                  </div>

                  {selectedJob.qualificationAndExperience?.trim() ? (
                    <div className="mt-7 border-b border-white/10 pb-7">
                      <p className="flex items-center gap-2 text-[14px] font-semibold text-white">
                        <GraduationCap className="h-4 w-4 text-[#6995ff]" />
                        Qualification & Experience
                      </p>
                      <p className="mt-3 whitespace-pre-line text-[14px] leading-7 text-white/58">
                        {selectedJob.qualificationAndExperience}
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div>
                      <h4 className="text-[14px] font-semibold text-white">Responsibilities</h4>
                      <ul className="mt-4 space-y-3 text-[14px] leading-7 text-white/58">
                        {selectedJob.responsibilities.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[14px] font-semibold text-white">Requirements</h4>
                      <ul className="mt-4 space-y-3 text-[14px] leading-7 text-white/58">
                        {selectedJob.requirements.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                            {r}
                          </li>
                        ))}
                      </ul>

                      {selectedJob.skillsGoodToHave?.length > 0 && (
                        <>
                          <h4 className="mt-7 text-[14px] font-semibold text-white">Preferred Skills</h4>
                          <ul className="mt-4 space-y-3 text-[14px] leading-7 text-white/58">
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
                    className="mt-8 inline-flex min-h-13 items-center justify-center rounded-[4px] bg-[#1467f5] px-6 text-[13px] font-semibold text-white transition hover:bg-[#0f56d6]"
                  >
                    Apply for this role
                  </a>
                </>
              ) : (
                <p className="text-white/45">Select a role to view details.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="scroll-mt-24 border-t border-white/10 bg-[#080808] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-16 xl:gap-24">
            <div className="lg:sticky lg:top-28">
              <div className="text-[13px] font-semibold uppercase text-[#6995ff]">
                Apply Now
              </div>

              <h2 className="mt-4 text-[42px] font-medium leading-[1.08] text-white sm:text-[54px]">
                Start your journey with BrainADZ Marketing
              </h2>

              <p className="mt-6 max-w-[650px] text-[16px] leading-8 text-white/58">
                Share your details and resume with our team. We review profiles based on role
                requirement, skill set, experience, and overall fit.
              </p>

              <div className="mt-9 border-t border-white/12 pt-6">
                <h3 className="text-[18px] font-semibold text-white">Application Guidelines</h3>
                <ul className="mt-5 space-y-3 text-[14px] leading-7 text-white/58">
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

              <div className="mt-8 border-t border-white/12 pt-6">
                <h3 className="text-[18px] font-semibold text-white">HR Contact Details</h3>
                <div className="mt-5 space-y-4 text-[14px] text-white/58">
                  <Link
                    href="https://wa.me/919574511152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 text-[#6995ff]" />
                    WhatsApp: +91 9574511152
                  </Link>

                  <Link
                    href="mailto:hr@brainadzmarketing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-[#6995ff]" />
                    Email: hr@brainadzmarketing.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-[6px] border border-white/12 bg-[#101010] p-5 sm:p-8 lg:p-10">
              {success ? (
                <div className="rounded-[4px] border border-emerald-400/25 bg-emerald-400/8 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                    <div>
                      <p className="text-[16px] font-semibold text-white">Application submitted</p>
                      <p className="mt-2 text-[14px] leading-7 text-white/58">
                        Thank you. Our team will review your profile and contact you if a suitable
                        opening matches your background.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSuccess(false)}
                        className="mt-5 min-h-11 rounded-[4px] bg-[#1467f5] px-5 text-[13px] font-semibold text-white transition hover:bg-[#0f56d6]"
                      >
                        Submit another application
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  {formError && (
                    <div className="rounded-[4px] border border-red-400/25 bg-red-400/8 px-4 py-3 text-[14px] font-medium text-red-300">
                      {formError}
                    </div>
                  )}

                  <div>
                    <label className="text-[12px] font-semibold uppercase text-white/55">
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
                      className="mt-2 h-14 w-full rounded-[4px] border border-white/14 bg-black px-4 text-[14px] text-white outline-none transition focus:border-[#1467f5]"
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
                      icon={<User className="h-4 w-4 text-[#6995ff]" />}
                      value={fullName}
                      onChange={setFullName}
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                    <FormField
                      label="Phone"
                      icon={<Phone className="h-4 w-4 text-[#6995ff]" />}
                      value={phone}
                      onChange={setPhone}
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                    <FormField
                      label="Email"
                      icon={<Mail className="h-4 w-4 text-[#6995ff]" />}
                      value={email}
                      onChange={setEmail}
                      type="email"
                      placeholder="you@domain.com"
                      required
                    />
                    <FormField
                      label="Current Location"
                      icon={<MapPin className="h-4 w-4 text-[#6995ff]" />}
                      value={location}
                      onChange={setLocation}
                      type="text"
                      placeholder="e.g. Delhi NCR"
                    />
                    <FormField
                      label="Total Experience"
                      icon={<Briefcase className="h-4 w-4 text-[#6995ff]" />}
                      value={experience}
                      onChange={setExperience}
                      type="text"
                      placeholder="e.g. 2 years"
                    />
                    <FormField
                      label="Notice Period"
                      icon={<Clock className="h-4 w-4 text-[#6995ff]" />}
                      value={noticePeriod}
                      onChange={setNoticePeriod}
                      type="text"
                      placeholder="e.g. Immediate or 15 days"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold uppercase text-white/55">
                      Resume
                    </label>
                    <div className="mt-2 flex min-h-14 items-center gap-3 rounded-[4px] border border-white/14 bg-black px-4 py-3 transition focus-within:border-[#1467f5]">
                      <Upload className="h-4 w-4 shrink-0 text-[#6995ff]" />
                      <input
                        required
                        ref={resumeInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full text-[13px] text-white/65 outline-none file:mr-3 file:rounded-[3px] file:border-0 file:bg-[#1467f5] file:px-3 file:py-2 file:text-[12px] file:font-semibold file:text-white hover:file:bg-[#0f56d6]"
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
                      <p className="mt-2 text-[12px] text-white/45">
                        Selected: <span className="font-semibold text-white">{resume.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[12px] font-semibold uppercase text-white/55">
                      Message
                    </label>
                    <div className="mt-2 flex items-start gap-3 rounded-[4px] border border-white/14 bg-black px-4 py-3 transition focus-within:border-[#1467f5]">
                      <FileText className="mt-1 h-4 w-4 shrink-0 text-[#6995ff]" />
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        placeholder="Write a short note about your experience and role interest."
                        className="w-full resize-none bg-transparent text-[14px] text-white outline-none placeholder:text-white/28"
                      />
                    </div>
                  </div>

                  <button
                    disabled={submitting}
                    type="submit"
                    className="h-14 w-full rounded-[4px] bg-[#1467f5] text-[14px] font-semibold text-white transition hover:bg-[#0f56d6] disabled:cursor-not-allowed disabled:opacity-70"
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
      <label className="text-[12px] font-semibold uppercase text-white/55">
        {label}
      </label>
      <div className="mt-2 flex min-h-14 items-center gap-3 rounded-[4px] border border-white/14 bg-black px-4 py-3 transition focus-within:border-[#1467f5]">
        {icon}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-[14px] text-white outline-none placeholder:text-white/28"
        />
      </div>
    </div>
  );
}
