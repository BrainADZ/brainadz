/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clapperboard,
  ClipboardList,
  Film,
  Gauge,
  ImageIcon,
  Layers3,
  LineChart,
  Megaphone,
  Palette,
  PenTool,
  Scissors,
  Share2,
  Sparkles,
  Target,
  Video,
  Youtube,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creative & Media Services | Design, Motion & Video | BrainADZ",
  description:
    "BrainADZ Creative & Media Services cover creative design, graphic design, branding, social media creatives, ad creatives, visual content, motion graphics, reel editing, video editing, corporate videos and YouTube thumbnails.",
  alternates: {
    canonical: "/services/creative-media",
  },
  openGraph: {
    title: "Creative & Media Services | BrainADZ Marketing",
    description:
      "Build a consistent creative system across branding, campaigns, social media, motion graphics, reels, videos and digital content.",
    type: "website",
    url: "/services/creative-media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative & Media Services | BrainADZ Marketing",
    description:
      "Creative design, branding, social media creatives, motion graphics, reel editing, video editing and content production.",
  },
};

const CREATIVE_SERVICES = [
  {
    title: "Creative Design Services",
    slug: "creative-design-services",
    description:
      "Develop original visual concepts for campaigns, launches, presentations, digital platforms and ongoing brand communication.",
    icon: Sparkles,
    result: "Creative Direction",
  },
  {
    title: "Graphic Design Services",
    slug: "graphic-design-services",
    description:
      "Create professional marketing graphics, brochures, banners, posters, presentations and platform-ready visual assets.",
    icon: PenTool,
    result: "Visual Communication",
  },
  {
    title: "Branding Design Services",
    slug: "branding-design-services",
    description:
      "Build consistent visual identities through logos, colour systems, typography, guidelines and branded applications.",
    icon: Palette,
    result: "Brand Identity",
  },
  {
    title: "Social Media Creative Design",
    slug: "social-media-creative-design",
    description:
      "Design posts, carousels, stories, covers and campaign creatives adapted for each social media platform.",
    icon: Share2,
    result: "Social Consistency",
  },
  {
    title: "Ad Creative Design",
    slug: "ad-creative-design",
    description:
      "Create conversion-focused static, carousel and video ad assets with clear messaging, hierarchy and calls to action.",
    icon: Megaphone,
    result: "Campaign Impact",
  },
  {
    title: "Visual Content Creation",
    slug: "visual-content-creation",
    description:
      "Produce branded visual content for products, services, campaigns, websites, social media and digital communication.",
    icon: ImageIcon,
    result: "Content Supply",
  },
  {
    title: "Motion Graphics Services",
    slug: "motion-graphics-services",
    description:
      "Bring messages to life through animated graphics, typography, explainers, transitions and branded motion systems.",
    icon: Clapperboard,
    result: "Motion Storytelling",
  },
  {
    title: "Short Video Editing",
    slug: "short-video-editing",
    description:
      "Edit concise platform-ready videos with stronger hooks, pacing, subtitles, transitions, music and branded finishing.",
    icon: Scissors,
    result: "Short-Form Content",
  },
  {
    title: "Reel Editing Services",
    slug: "reel-editing-services",
    description:
      "Turn raw footage into engaging Instagram and social reels using platform-specific pacing, captions and visual rhythm.",
    icon: Film,
    result: "Reel Engagement",
  },
  {
    title: "Video Editing Services",
    slug: "video-editing-services",
    description:
      "Edit marketing, product, interview, event and promotional videos from rough footage to final delivery.",
    icon: Video,
    result: "Video Production",
  },
  {
    title: "Corporate Video Editing",
    slug: "corporate-video-editing",
    description:
      "Create polished company profiles, interviews, case studies, internal films and corporate communication videos.",
    icon: Building2,
    result: "Corporate Story",
  },
  {
    title: "YouTube Thumbnail Design",
    slug: "youtube-thumbnail-design",
    description:
      "Design clear, high-impact thumbnails that improve content recognition and support stronger click-through potential.",
    icon: Youtube,
    result: "Content Discovery",
  },
];

const CREATIVE_JOURNEY_STAGES = [
  {
    title: "Brief & Discover",
    text: "Understand the brand, audience, platform, message, campaign goal, references and required deliverables.",
    icon: Target,
  },
  {
    title: "Concept & Design",
    text: "Develop creative directions, visual systems, storyboards, layouts and content ideas around the approved brief.",
    icon: Palette,
  },
  {
    title: "Produce & Edit",
    text: "Create graphics, animation and video while maintaining hierarchy, pacing, brand consistency and technical quality.",
    icon: Clapperboard,
  },
  {
    title: "Adapt & Deliver",
    text: "Prepare approved assets in the correct sizes, formats, ratios and file structures for every required platform.",
    icon: Layers3,
  },
];

const CREATIVE_ROADMAP = [
  {
    label: "Phase 01",
    title: "Brief & Direction",
    points: [
      "Confirm audience, message, platform and campaign objective",
      "Collect brand assets, references, footage and content inputs",
      "Define creative direction, formats and approval process",
    ],
  },
  {
    label: "Phase 02",
    title: "Design & Production",
    points: [
      "Develop concepts, layouts, scripts or storyboards",
      "Create graphics, motion, reels, videos and adaptations",
      "Review brand consistency, pacing and visual hierarchy",
    ],
  },
  {
    label: "Phase 03",
    title: "Review & Delivery",
    points: [
      "Consolidate feedback through controlled revision rounds",
      "Quality-check dimensions, copy, audio and export settings",
      "Deliver organised master files and platform-ready assets",
    ],
  },
];

const DELIVERY_ROWS = [
  { label: "Brand Consistency", value: "Reviewed", width: "88%" },
  { label: "Format Readiness", value: "Prepared", width: "82%" },
  { label: "Production Status", value: "Tracked", width: "76%" },
  { label: "Asset Delivery", value: "Organised", width: "90%" },
];

const QUALITY_ITEMS = [
  "Brand colours, typography, logo use and visual consistency",
  "Creative hierarchy, readability and message clarity",
  "Platform dimensions, aspect ratios and safe areas",
  "Image quality, retouching and export resolution",
  "Video pacing, transitions, captions and audio balance",
  "Spelling, claims, dates, offers and call-to-action accuracy",
  "File naming, folder structure and master-file organisation",
  "Approval status, revision history and final deliverables",
];

const JOURNEY_COLORS = ["#E1122B", "#E1122B", "#E1122B", "#E1122B"];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creative & Media Services",
  serviceType: "Creative Design, Motion Graphics and Video Editing Services",
  description:
    "Creative and media services covering graphic design, branding, social media creatives, ad creative design, visual content, motion graphics, reels, video editing, corporate videos and YouTube thumbnails.",
  url: "https://www.brainadz.marketing/services/creative-media",
  provider: {
    "@type": "Organization",
    name: "BrainADZ Marketing",
    url: "https://www.brainadz.marketing",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative & Media Service Stack",
    itemListElement: CREATIVE_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function CreativeMediaServicesPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HeroSection />
      <CreativeServicesSection />
      <CreativeJourneySection />
      <CreativeRoadmapSection />
      <CreativeDeliverySection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
      <img
        src="/creative-media/creative-media-hero.jpg"
        alt="Creative design, motion graphics and professional video editing services"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_30%,rgba(0,0,0,0.38)_55%,rgba(0,0,0,0.02)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.06)_48%,rgba(0,0,0,0.26)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[540px] lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[14px] font-medium leading-none"
        >
          <Link
            href="/"
            className="text-[#E1122B] transition hover:text-white"
          >
            Home
          </Link>
          <span className="text-white/70">/</span>
          <span className="text-white">Creative & Media Services</span>
        </nav>

        <h1 className="mt-7 max-w-[980px] text-[32px] font-normal leading-[1.04] tracking-[-0.045em] text-white sm:text-[42px] lg:text-[52px]">
          Creative & Media Services
        </h1>

        <div className="mt-auto max-w-[790px] pb-6 sm:pb-10 lg:pb-12">
          <p className="text-[22px] font-semibold leading-[1.38] tracking-[-0.02em] text-white sm:text-[26px] lg:text-[28px]">
            Build a recognisable visual presence through thoughtful design,
            platform-ready content, motion graphics and professional video editing.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-sm bg-[#E1122B] px-5 text-[15px] font-medium text-white transition hover:bg-black sm:min-h-14 sm:px-6"
          >
            Discuss your creative requirement
            <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="rounded-sm border border-black/10 bg-white p-4">
      <div className="flex items-center justify-between gap-4 text-[13px]">
        <span className="text-black/64">{label}</span>
        <span className="font-semibold text-[#E1122B]">{value}</span>
      </div>
      <div className="mt-3 h-2 bg-black/10">
        <div className="h-full bg-[#E1122B]" style={{ width }} />
      </div>
    </div>
  );
}

function CreativeServicesSection() {
  return (
    <section
      id="service-directory"
      className="relative border-y border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#E1122B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/[0.07] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#E1122B]">
              Creative service stack
            </p>

            <h2 className="mt-5 max-w-[720px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-black sm:text-[44px] lg:text-[52px]">
              Creative and media services built for brand consistency and content impact.
            </h2>

            <p className="mt-6 max-w-[640px] text-[15px] leading-7 text-black/62 sm:text-[16px]">
              Explore our design, branding, social creative, motion graphics and
              video-editing capabilities for ongoing communication, campaigns,
              launches and digital platforms.
            </p>

            <div className="relative mt-9 h-[300px] overflow-hidden rounded-[28px] border border-black/10 bg-[#f7f7f7] sm:h-[360px] lg:h-[430px]">
              <img
                src="/creative-media/creative-media-services.jpg"
                alt="Creative and media production services by BrainADZ Marketing"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.72)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <p className="max-w-[460px] text-[20px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[24px]">
                  One creative team for design, branding, motion, reels and video production.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 text-[14px] font-semibold text-[#E1122B] transition hover:text-white"
                >
                  Discuss your content plan
                  <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {CREATIVE_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href={`/services/creative-media/${service.slug}`}
                  id={service.slug}
                  key={service.title}
                  className="group relative min-h-[235px] overflow-hidden rounded-3xl border border-black/10 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] sm:p-6"
                >
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#E1122B]/10 blur-2xl transition group-hover:bg-[#E1122B]/18" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#E1122B]/25 bg-[#E1122B]/10 text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                      </div>

                      <span className="rounded-full border border-black/10 bg-[#fbfbfb] px-3 py-1 text-[11px] font-semibold text-black/48">
                        {service.result}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[20px] font-semibold leading-tight tracking-[-0.03em] text-black sm:text-[22px]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-6 text-black/58">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-[13px] font-semibold text-[#E1122B] transition group-hover:text-black">
                      Open service page
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CreativeJourneySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute left-[-220px] top-[-180px] h-[460px] w-[460px] rounded-full bg-[#E1122B]/12 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-60 right-[-220px] h-[520px] w-[520px] rounded-full bg-[#E1122B]/[0.07] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E1122B]">
              Creative production journey
            </p>

            <h2 className="mt-5 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-white sm:text-[44px] lg:text-[52px]">
              Every asset moves through a clear creative and production workflow.
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-7 text-white/62 sm:text-[16px]">
            Strong creative work requires more than an attractive visual. The
            brief, concept, production quality, platform requirements and final
            delivery must remain connected throughout the process.
          </p>
        </div>

        <div className="mt-14 rounded-[34px] border border-white/10 bg-white/2.5 p-5 sm:mt-16 sm:p-7 lg:p-9">
          <div className="relative">
            <div className="absolute bottom-6 left-[27px] top-6 w-px bg-[linear-gradient(180deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:hidden" />

            <div className="absolute left-8 right-8 top-[34px] hidden h-px bg-[linear-gradient(90deg,rgba(225,18,43,0),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0.75),rgba(225,18,43,0))] lg:block" />

            <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
              {CREATIVE_JOURNEY_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                const color = JOURNEY_COLORS[index % JOURNEY_COLORS.length];

                return (
                  <div
                    key={stage.title}
                    className="relative flex gap-5 lg:block"
                  >
                    <div
                      className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.35)] lg:mx-auto"
                      style={{
                        backgroundColor: color,
                        color: "#ffffff",
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <div
                      className={`relative mt-0 w-full rounded-[28px] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#141414] lg:mt-8 ${
                        index % 2 === 1 ? "lg:translate-y-10" : ""
                      }`}
                    >
                      <div
                        className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-15 blur-2xl"
                        style={{ backgroundColor: color }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-5">
                          <span
                            className="rounded-full px-3 py-1 text-[12px] font-semibold"
                            style={{
                              backgroundColor: `${color}24`,
                              color,
                            }}
                          >
                            Step {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-px flex-1 bg-white/10" />
                        </div>

                        <h3 className="mt-7 text-[24px] font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[26px]">
                          {stage.title}
                        </h3>

                        <p className="mt-4 text-[14px] leading-6 text-white/60 sm:text-[15px] sm:leading-7">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 hidden items-center justify-center gap-3 text-[13px] font-medium text-white/42 lg:flex">
              <span>Brief</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Concept</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Production</span>
              <span className="h-px w-16 bg-white/15" />
              <span>Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreativeRoadmapSection() {
  return (
    <section className="border-y border-black/10 bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E1122B]">
              Creative delivery roadmap
            </p>

            <h2 className="mt-5 max-w-[760px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-black sm:text-[44px] lg:text-[52px]">
              Move from a clear brief to organised, platform-ready creative assets.
            </h2>
          </div>

          <p className="max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-[16px]">
            Deliverables, timelines and revision rounds are defined early so
            design and editing work can progress without losing brand direction,
            production quality or platform requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CREATIVE_ROADMAP.map((phase) => (
            <article
              key={phase.label}
              className="rounded-[28px] border border-black/10 bg-[#fbfbfb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] sm:p-7"
            >
              <span className="inline-flex rounded-full bg-[#E1122B] px-4 py-2 text-[12px] font-semibold text-white">
                {phase.label}
              </span>

              <h3 className="mt-7 text-[26px] font-semibold tracking-[-0.035em] text-black">
                {phase.title}
              </h3>

              <ul className="mt-6 space-y-4 border-t border-black/10 pt-6">
                {phase.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[14px] leading-6 text-black/62"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreativeDeliverySection() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
        <div className="rounded-md border border-black/10 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:p-7">
          <div className="flex items-start justify-between gap-5 border-b border-black/10 pb-6">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black/42">
                Creative delivery
              </p>

              <h2 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.04em] sm:text-[38px]">
                A production view that shows what is ready.
              </h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-[#E1122B] text-white">
              <LineChart className="h-7 w-7" strokeWidth={1.7} />
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <ReportBox label="Creative concepts" value="Mapped" />
            <ReportBox label="Revision status" value="Tracked" />
            <ReportBox label="Platform assets" value="Prepared" />
            <ReportBox label="Final masters" value="Organised" />
          </div>

          <div className="mt-7 space-y-3">
            {DELIVERY_ROWS.map((row) => (
              <MetricRow key={row.label} {...row} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
            Creative quality checklist
          </p>

          <h2 className="mt-5 max-w-[820px] text-[40px] font-medium leading-[1.08] tracking-[-0.04em] sm:text-[54px] lg:text-[62px]">
            We review the complete asset, not only how it looks.
          </h2>

          <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-black/60">
            Every final asset is checked for brand consistency, communication
            clarity, platform specifications and production quality before it is
            prepared for delivery.
          </p>

          <div className="mt-9 grid gap-3">
            {QUALITY_ITEMS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-sm border border-black/10 bg-white p-4"
              >
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />
                <p className="text-[15px] font-medium leading-6 text-black/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReportBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-black/10 bg-white p-5">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-black/38">
        {label}
      </p>
      <p className="mt-3 text-[25px] font-semibold tracking-[-0.04em] text-black">
        {value}
      </p>
    </div>
  );
}