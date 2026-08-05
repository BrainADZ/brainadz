"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";

type FAQItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

const FAQ_CATEGORIES = [
  "All Services",
  "Marketing Strategy",
  "Performance Marketing",
  "SEO",
  "Social Media",
  "Content & Creative",
  "Website Development",
  "Branding",
  "CRM & Automation",
  "Analytics",
  "Consulting & Support",
];

const FAQS: FAQItem[] = [
  {
    id: 1,
    category: "Marketing Strategy",
    question: "What does your digital marketing strategy service include?",
    answer:
      "Our digital marketing strategy service includes business and competitor analysis, audience planning, brand positioning, channel selection, campaign planning, content direction, lead funnel planning, tracking requirements and a clear execution roadmap.",
  },
  {
    id: 2,
    category: "Marketing Strategy",
    question: "Do you create a customized marketing plan for every business?",
    answer:
      "Yes. We do not use the same marketing plan for every client. The strategy is created around your industry, target audience, competition, location, business goals, available resources and marketing budget.",
  },
  {
    id: 3,
    category: "Marketing Strategy",
    question: "Can BrainADZ manage our complete digital marketing?",
    answer:
      "Yes. BrainADZ can manage strategy, creative design, content, social media, SEO, paid advertising, website improvements, lead tracking, automation and performance reporting as one connected marketing system.",
  },

  {
    id: 4,
    category: "Performance Marketing",
    question: "Which paid advertising platforms do you manage?",
    answer:
      "We can plan and manage campaigns across Google Ads, Meta Ads, LinkedIn Ads and other suitable platforms based on your audience, campaign objective and business model.",
  },
  {
    id: 5,
    category: "Performance Marketing",
    question: "How do you decide the advertising budget?",
    answer:
      "The recommended budget depends on your industry, target location, competition, expected lead volume, average order value and campaign objective. We first study the opportunity and then suggest a practical starting budget.",
  },
  {
    id: 6,
    category: "Performance Marketing",
    question: "Can you improve the quality of leads from paid campaigns?",
    answer:
      "Yes. We improve lead quality through better audience targeting, keyword selection, campaign structure, ad messaging, landing page experience, qualification forms, conversion tracking and continuous optimization.",
  },
  {
    id: 7,
    category: "Performance Marketing",
    question: "Do you guarantee a fixed number of leads or sales?",
    answer:
      "No responsible agency can guarantee a fixed number of sales because results also depend on competition, pricing, offer quality, market demand and your sales process. We focus on measurable improvements, qualified traffic and better return on marketing spend.",
  },

  {
    id: 8,
    category: "SEO",
    question: "What is included in your SEO service?",
    answer:
      "Our SEO service can include website audit, keyword research, technical SEO, on-page optimization, content planning, internal linking, local SEO, competitor analysis, backlink direction and monthly performance reporting.",
  },
  {
    id: 9,
    category: "SEO",
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term growth process. Initial improvements may become visible within a few months, while competitive keywords can require more time. The actual timeline depends on your website condition, competition, content quality and industry.",
  },
  {
    id: 10,
    category: "SEO",
    question: "Can you handle technical SEO for an existing website?",
    answer:
      "Yes. We can review indexing, crawling, website speed, mobile usability, metadata, schema markup, broken links, redirects, sitemap configuration, internal linking and other technical issues affecting organic performance.",
  },
  {
    id: 11,
    category: "SEO",
    question: "Do you provide local SEO services?",
    answer:
      "Yes. Local SEO can include Google Business Profile optimization, location-based keywords, local landing pages, business citations, review strategy and improvements that help customers find your business in relevant local searches.",
  },

  {
    id: 12,
    category: "Social Media",
    question: "Which social media platforms do you manage?",
    answer:
      "We manage platforms according to business relevance, including Instagram, Facebook, LinkedIn, YouTube and other suitable channels. We do not recommend being active everywhere unless it supports your audience and goals.",
  },
  {
    id: 13,
    category: "Social Media",
    question: "What is included in social media management?",
    answer:
      "Social media management can include content planning, creative design, captions, reels, posting schedules, campaign ideas, profile optimization, basic community management and monthly performance reviews.",
  },
  {
    id: 14,
    category: "Social Media",
    question: "Do you create reels and video content?",
    answer:
      "Yes. Depending on the selected plan, we can support reel concepts, scripts, editing, motion graphics, short-form videos, promotional content and platform-specific video formats.",
  },
  {
    id: 15,
    category: "Social Media",
    question: "Can you manage both organic and paid social media?",
    answer:
      "Yes. Organic content builds consistency, trust and audience engagement, while paid campaigns increase reach, enquiries and conversions. We can connect both activities under one strategy.",
  },

  {
    id: 16,
    category: "Content & Creative",
    question: "What types of creative content do you provide?",
    answer:
      "We can create social media posts, carousels, campaign creatives, ad banners, brochures, presentations, website graphics, short videos, reels, infographics and other digital marketing materials.",
  },
  {
    id: 17,
    category: "Content & Creative",
    question: "Will the content match our brand identity?",
    answer:
      "Yes. We follow your logo, colors, typography, communication style and existing brand guidelines. When guidelines are unavailable, we can establish a consistent visual and content direction for your brand.",
  },
  {
    id: 18,
    category: "Content & Creative",
    question: "Do you write website, blog and advertising content?",
    answer:
      "Yes. Our content support can include website copy, landing page content, blog articles, social media captions, ad copy, email content, brochure text and other marketing communication.",
  },

  {
    id: 19,
    category: "Website Development",
    question: "Does BrainADZ design and develop websites?",
    answer:
      "Yes. We design and develop responsive corporate websites, landing pages, portfolio websites, e-commerce websites and custom web experiences based on your brand and business requirements.",
  },
  {
    id: 20,
    category: "Website Development",
    question: "Can you redesign our existing website?",
    answer:
      "Yes. We can review your current website and improve its structure, visual design, mobile experience, content hierarchy, speed, lead forms, calls to action and conversion journey.",
  },
  {
    id: 21,
    category: "Website Development",
    question: "Will the website be mobile-friendly and SEO-ready?",
    answer:
      "Yes. Our websites are planned for responsive performance across common devices. We can also implement SEO-friendly page structure, metadata support, heading hierarchy, image optimization and technical foundations.",
  },
  {
    id: 22,
    category: "Website Development",
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. Maintenance support can include content updates, technical troubleshooting, security checks, backups, speed improvements, feature updates and general website support according to the selected agreement.",
  },

  {
    id: 23,
    category: "Branding",
    question: "What branding services do you provide?",
    answer:
      "Our branding services can include brand strategy, logo design, color palette, typography, brand guidelines, stationery, marketing templates, presentation design and a consistent visual communication system.",
  },
  {
    id: 24,
    category: "Branding",
    question: "Can you refresh an existing brand without changing everything?",
    answer:
      "Yes. A brand refresh can improve the visual identity, communication style and consistency while retaining recognizable elements of the existing brand.",
  },
  {
    id: 25,
    category: "Branding",
    question: "Do you create brand guidelines for internal teams?",
    answer:
      "Yes. Brand guidelines can document logo usage, colors, typography, imagery, tone of voice, design rules and practical examples so different teams maintain consistency.",
  },

  {
    id: 26,
    category: "CRM & Automation",
    question: "Can you help us select and implement a CRM?",
    answer:
      "Yes. We first understand your lead sources, sales stages, follow-up process, reporting needs and team structure. We then recommend a suitable CRM setup or a customized solution.",
  },
  {
    id: 27,
    category: "CRM & Automation",
    question: "Can you automate lead follow-ups and enquiry management?",
    answer:
      "Yes. We can plan workflows for lead assignment, follow-up reminders, email communication, WhatsApp journeys, enquiry status updates and sales team notifications.",
  },
  {
    id: 28,
    category: "CRM & Automation",
    question: "Can marketing forms be connected with our existing CRM?",
    answer:
      "In many cases, yes. Website forms, landing pages, advertising platforms and other lead sources can be connected with compatible CRM systems through available APIs, webhooks or approved integrations.",
  },
  {
    id: 29,
    category: "CRM & Automation",
    question: "Can you improve our existing CRM process?",
    answer:
      "Yes. We can audit your current CRM structure, lead stages, user access, duplicate work, reporting, follow-up process and automation opportunities before recommending improvements.",
  },

  {
    id: 30,
    category: "Analytics",
    question: "Do you set up website and campaign tracking?",
    answer:
      "Yes. We can assist with analytics, conversion events, advertising pixels, campaign tracking, form submission tracking, call-to-action tracking and other relevant measurement requirements.",
  },
  {
    id: 31,
    category: "Analytics",
    question: "What will be included in performance reports?",
    answer:
      "Reports can include traffic, reach, engagement, leads, conversion rates, campaign spend, cost per lead, keyword movement, landing page performance and recommended next actions.",
  },
  {
    id: 32,
    category: "Analytics",
    question: "Can you create a customized marketing dashboard?",
    answer:
      "Yes. We can plan dashboards around your important KPIs so management and marketing teams can review performance without depending on disconnected reports from multiple platforms.",
  },

  {
    id: 33,
    category: "Consulting & Support",
    question: "Can we hire BrainADZ only for marketing consulting?",
    answer:
      "Yes. You can engage us for an audit, strategy roadmap, campaign review, SEO consultation, website conversion review, CRM planning or ongoing advisory without outsourcing the complete execution.",
  },
  {
    id: 34,
    category: "Consulting & Support",
    question: "Can your consultants work with our internal marketing team?",
    answer:
      "Yes. We can guide your internal team with priorities, campaign direction, review meetings, reporting structure, content planning, process improvements and performance optimization.",
  },
  {
    id: 35,
    category: "Consulting & Support",
    question: "How does a marketing consultation begin?",
    answer:
      "The process normally begins with a discovery discussion about your business, current marketing activities, problems, objectives, audience and available resources. We then define the audit and recommended next steps.",
  },
  {
    id: 36,
    category: "Consulting & Support",
    question: "Do you provide ongoing support after completing a project?",
    answer:
      "Yes. Depending on your requirement, we can provide monthly marketing management, consulting retainers, website maintenance, campaign optimization, reporting and other ongoing support services.",
  },
];

const FAQ_HIGHLIGHTS = [
  {
    icon: CircleHelp,
    title: "Service questions",
    description:
      "Understand what is included across marketing, SEO, social media, websites and branding.",
  },
  {
    icon: BarChart3,
    title: "Results and reporting",
    description:
      "Learn how campaigns, conversions, performance and business outcomes are measured.",
  },
  {
    icon: MessageCircle,
    title: "Process and support",
    description:
      "Get clarity about onboarding, consultation, execution, timelines and ongoing support.",
  },
];

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const filteredFAQs = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All Services" ||
        faq.category === selectedCategory;

      const matchesSearch =
        !normalizedSearch ||
        faq.question.toLowerCase().includes(normalizedSearch) ||
        faq.answer.toLowerCase().includes(normalizedSearch) ||
        faq.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setOpenFAQ(null);
  };

  return (
    <main className="dm-sans bg-white text-[#111111]">
      <FAQHero />
      <FAQHighlightsSection />

      <FAQListingSection
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        openFAQ={openFAQ}
        filteredFAQs={filteredFAQs}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchQuery}
        onFAQToggle={(id) =>
          setOpenFAQ((currentFAQ) => (currentFAQ === id ? null : id))
        }
      />

      <FAQCTASection />
    </main>
  );
}

function FAQHero() {
  return (
    <>
      {/* FAQ HERO SECTION */}
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[560px]">
        <img
          src="/gallery/8.jpeg"
          alt="BrainADZ team discussing digital marketing services"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.84)_34%,rgba(0,0,0,0.48)_65%,rgba(0,0,0,0.14)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.04)_48%,rgba(0,0,0,0.4)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[500px] sm:px-8 lg:min-h-[560px] lg:px-10">
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
            <span className="text-white">FAQs</span>
          </nav>

          <div className="mt-7">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Frequently asked questions
              </p>
            </div>

            <h1 className="mt-5 max-w-[980px] text-[38px] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
              Clear answers about our marketing services, process and support.
            </h1>
          </div>

          <div className="mt-auto max-w-[790px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[18px] font-normal leading-[1.5] tracking-[-0.02em] text-white/88 sm:text-[22px] lg:text-[25px]">
              Explore common questions about digital marketing, SEO, paid
              campaigns, social media, websites, branding, CRM, automation and
              consulting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#all-faqs"
                className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-black"
              >
                Explore all FAQs
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </Link>

              <Link
                href="/contact" data-enquiry-trigger data-enquiry-source="Page CTA"
                className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-white/45 bg-black/25 px-7 text-[13px] font-semibold text-white transition hover:border-[#E1122B] hover:bg-[#E1122B]"
              >
                Enquire Now
                <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ STATS */}
      <section className="border-y border-black/10 bg-[#fbfbfb] text-black">
        <div className="mx-auto grid max-w-[1800px] px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
          <div className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-[38px] font-medium leading-none tracking-[-0.05em] text-[#E1122B] sm:text-[48px]">
              36
            </p>
            <p className="mt-3 max-w-[360px] text-[15px] leading-6 text-black/60">
              Detailed answers across our main marketing services
            </p>
          </div>

          <div className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:px-8">
            <p className="text-[38px] font-medium leading-none tracking-[-0.05em] text-[#E1122B] sm:text-[48px]">
              10+
            </p>
            <p className="mt-3 max-w-[360px] text-[15px] leading-6 text-black/60">
              Service categories covered in one simple knowledge centre
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <p className="text-[38px] font-medium leading-none tracking-[-0.05em] text-[#E1122B] sm:text-[48px]">
              360°
            </p>
            <p className="mt-3 max-w-[360px] text-[15px] leading-6 text-black/60">
              Answers covering strategy, execution, reporting and support
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQHighlightsSection() {
  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Find your answer
              </p>
            </div>

            <h2 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[48px] lg:text-[58px]">
              Everything you need to know before getting started.
            </h2>

            <p className="mt-7 max-w-[650px] text-[16px] leading-8 text-black/62">
              These FAQs explain how our services work, what they include and
              how BrainADZ connects strategy, creative, media, technology and
              reporting.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {FAQ_HIGHLIGHTS.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="group min-h-[260px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/45 hover:bg-[#fff8f8] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 text-[22px] font-semibold leading-tight tracking-[-0.035em] text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-black/58">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type FAQListingSectionProps = {
  selectedCategory: string;
  searchQuery: string;
  openFAQ: number | null;
  filteredFAQs: FAQItem[];
  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
  onFAQToggle: (id: number) => void;
};

function FAQListingSection({
  selectedCategory,
  searchQuery,
  openFAQ,
  filteredFAQs,
  onCategoryChange,
  onSearchChange,
  onFAQToggle,
}: FAQListingSectionProps) {
  return (
    <section
      id="all-faqs"
      className="border-y border-black/10 bg-[#fbfbfb] py-16 text-black sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[330px_1fr] lg:gap-16">
          {/* LEFT SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#E1122B]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                Browse topics
              </p>
            </div>

            <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px]">
              Choose a service category.
            </h2>

            <div className="mt-8 hidden overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_12px_38px_rgba(0,0,0,0.05)] lg:block">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    type="button"
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`flex w-full items-center justify-between gap-4 border-b border-black/8 px-5 py-4 text-left text-[14px] font-medium transition last:border-b-0 ${
                      isActive
                        ? "bg-[#E1122B] text-white"
                        : "bg-white text-black/65 hover:bg-[#fff5f5] hover:text-[#E1122B]"
                    }`}
                  >
                    <span>{category}</span>

                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition ${
                        isActive
                          ? "translate-x-0 text-white"
                          : "-translate-x-1 text-black/25"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-[14px] bg-black p-6 text-white">
              <Sparkles className="h-7 w-7 text-[#E1122B]" strokeWidth={1.7} />

              <h3 className="mt-5 text-[22px] font-semibold leading-tight tracking-[-0.03em]">
                Still have a question?
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-white/60">
                Share your requirement and our team will help you identify the
                right service.
              </p>

              <Link
                href="/contact" data-enquiry-trigger data-enquiry-source="Page CTA"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-full bg-[#E1122B] px-5 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Enquire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>

          {/* FAQ CONTENT */}
          <div>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-black/35"
                strokeWidth={1.8}
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search questions, services or topics..."
                aria-label="Search frequently asked questions"
                className="h-16 w-full rounded-[12px] border border-black/10 bg-white pl-14 pr-5 text-[15px] text-black outline-none transition placeholder:text-black/35 focus:border-[#E1122B]/60 focus:ring-4 focus:ring-[#E1122B]/8"
              />
            </div>

            {/* MOBILE CATEGORY FILTER */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:hidden">
              {FAQ_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    type="button"
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`shrink-0 rounded-full border px-5 py-3 text-[13px] font-semibold transition ${
                      isActive
                        ? "border-[#E1122B] bg-[#E1122B] text-white"
                        : "border-black/10 bg-white text-black/60 hover:border-[#E1122B]/45 hover:text-[#E1122B]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col justify-between gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Current category
                </p>

                <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.035em] text-black sm:text-[34px]">
                  {selectedCategory}
                </h3>
              </div>

              <p className="text-[14px] font-medium text-black/45">
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "question" : "questions"} found
              </p>
            </div>

            {filteredFAQs.length > 0 ? (
              <div className="mt-6 space-y-3">
                {filteredFAQs.map((faq, index) => {
                  const isOpen = openFAQ === faq.id;
                  const answerId = `faq-answer-${faq.id}`;

                  return (
                    <article
                      key={faq.id}
                      data-aos="fade-up"
                      data-aos-delay={(index % 5) * 40}
                      className={`overflow-hidden rounded-[14px] border bg-white shadow-[0_12px_34px_rgba(0,0,0,0.04)] transition duration-300 ${
                        isOpen
                          ? "border-[#E1122B]/45 shadow-[0_18px_48px_rgba(0,0,0,0.07)]"
                          : "border-black/10 hover:border-[#E1122B]/30"
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => onFAQToggle(faq.id)}
                        className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                      >
                        <div className="flex min-w-0 gap-4 sm:gap-5">
                          <span
                            className={`mt-0.5 hidden text-[13px] font-semibold sm:block ${
                              isOpen ? "text-[#E1122B]" : "text-black/25"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#E1122B]">
                              {faq.category}
                            </p>

                            <h4 className="mt-2 text-[17px] font-semibold leading-7 tracking-[-0.02em] text-black sm:text-[20px]">
                              {faq.question}
                            </h4>
                          </div>
                        </div>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                            isOpen
                              ? "rotate-180 border-[#E1122B] bg-[#E1122B] text-white"
                              : "border-black/10 bg-[#fbfbfb] text-black/55"
                          }`}
                        >
                          <ChevronDown className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                      </button>

                      <div
                        id={answerId}
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-black/8 px-5 pb-6 pt-5 sm:ml-[52px] sm:px-7 sm:pb-7">
                            <p className="max-w-[1050px] text-[15px] leading-8 text-black/60">
                              {faq.answer}
                            </p>

                            <div className="mt-5 flex items-center gap-3 text-[13px] font-medium text-black/42">
                              <CheckCircle2 className="h-4 w-4 text-[#E1122B]" />
                              <span>BrainADZ Marketing service information</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-6 flex min-h-[330px] flex-col items-center justify-center rounded-[14px] border border-dashed border-black/15 bg-white px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1f1] text-[#E1122B]">
                  <Search className="h-7 w-7" strokeWidth={1.7} />
                </div>

                <h3 className="mt-6 text-[25px] font-semibold tracking-[-0.03em] text-black">
                  No matching questions found
                </h3>

                <p className="mt-3 max-w-[480px] text-[15px] leading-7 text-black/55">
                  Try a different search term or select another service
                  category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onSearchChange("");
                    onCategoryChange("All Services");
                  }}
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#E1122B] px-6 text-[13px] font-semibold text-white transition hover:bg-black"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQCTASection() {
  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[18px] bg-black px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-24 -top-32 h-[360px] w-[360px] rounded-full bg-[#E1122B]/25 blur-[100px]" />
          <div className="absolute -bottom-40 left-[25%] h-[320px] w-[320px] rounded-full bg-[#E1122B]/15 blur-[110px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#E1122B]" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
                  Need more clarity?
                </p>
              </div>

              <h2 className="mt-5 max-w-[920px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[58px]">
                Let&apos;s discuss the right marketing solution for your
                business.
              </h2>

              <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-white/60">
                Tell us about your goals, current challenges and target
                audience. Our team will help you understand the most practical
                next step.
              </p>
            </div>

            <Link
              href="/contact" data-enquiry-trigger data-enquiry-source="Page CTA"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Enquire Now
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}