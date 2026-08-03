/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import {
  AlertCircle,
  ArrowRight,
  BadgeIndianRupee,
  Ban,
  BriefcaseBusiness,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Copyright,
  FileCheck2,
  FileText,
  Gavel,
  Globe2,
  Handshake,
  Landmark,
  LockKeyhole,
  Megaphone,
  RefreshCcw,
  Scale,
  ScrollText,
  ServerCog,
  ShieldCheck,
  UserCheck,
  WalletCards,
} from "lucide-react";

/*
  Replace these details before publishing.
*/
const TERMS_EMAIL = "legal@yourdomain.com";
const COMPANY_NAME = "BrainADZ Marketing";
const LAST_UPDATED = "3 August 2026";

const TERMS_NAVIGATION = [
  {
    number: "01",
    label: "Acceptance of terms",
    href: "#acceptance",
  },
  {
    number: "02",
    label: "About our services",
    href: "#services",
  },
  {
    number: "03",
    label: "Proposals and scope",
    href: "#scope",
  },
  {
    number: "04",
    label: "Client responsibilities",
    href: "#client-responsibilities",
  },
  {
    number: "05",
    label: "Payments and taxes",
    href: "#payments",
  },
  {
    number: "06",
    label: "Advertising budgets",
    href: "#advertising-budget",
  },
  {
    number: "07",
    label: "Approvals and revisions",
    href: "#approvals",
  },
  {
    number: "08",
    label: "Timelines and delays",
    href: "#timelines",
  },
  {
    number: "09",
    label: "Intellectual property",
    href: "#intellectual-property",
  },
  {
    number: "10",
    label: "Third-party services",
    href: "#third-party-services",
  },
  {
    number: "11",
    label: "Performance and results",
    href: "#performance",
  },
  {
    number: "12",
    label: "Confidentiality",
    href: "#confidentiality",
  },
  {
    number: "13",
    label: "Cancellation and refunds",
    href: "#cancellation",
  },
  {
    number: "14",
    label: "Suspension and termination",
    href: "#termination",
  },
  {
    number: "15",
    label: "Website usage",
    href: "#website-usage",
  },
  {
    number: "16",
    label: "Disclaimers",
    href: "#disclaimers",
  },
  {
    number: "17",
    label: "Limitation of liability",
    href: "#liability",
  },
  {
    number: "18",
    label: "Indemnity",
    href: "#indemnity",
  },
  {
    number: "19",
    label: "Force majeure",
    href: "#force-majeure",
  },
  {
    number: "20",
    label: "Governing law",
    href: "#governing-law",
  },
  {
    number: "21",
    label: "Changes to terms",
    href: "#changes",
  },
  {
    number: "22",
    label: "Contact us",
    href: "#contact",
  },
];

const TERMS_HIGHLIGHTS = [
  {
    icon: FileCheck2,
    title: "Clear scope",
    description:
      "Project deliverables, timelines and responsibilities are defined through the approved proposal or agreement.",
  },
  {
    icon: Handshake,
    title: "Fair engagement",
    description:
      "Both BrainADZ and the client are expected to provide timely communication, approvals and cooperation.",
  },
  {
    icon: ShieldCheck,
    title: "Protected work",
    description:
      "Service terms protect confidential information, creative assets, payments and intellectual property.",
  },
];

const SERVICES_LIST = [
  "Digital marketing strategy and consulting",
  "Search engine optimization and local SEO",
  "Google Ads, Meta Ads and other paid campaigns",
  "Social media management and marketing",
  "Content writing, design and creative production",
  "Brand strategy and visual identity services",
  "Website design, development and maintenance",
  "Landing page design and conversion optimization",
  "Email marketing and marketing automation",
  "CRM planning, implementation and integration",
  "Analytics, reporting and campaign tracking",
  "Other marketing, technology and consulting services",
];

const CLIENT_RESPONSIBILITIES = [
  "Provide complete, accurate and current business information.",
  "Nominate an authorised point of contact for communication and approvals.",
  "Share logos, brand assets, content, credentials and other required materials on time.",
  "Confirm that supplied content, images, trademarks and data can be legally used.",
  "Review drafts, reports, campaigns and deliverables within the agreed timeline.",
  "Provide consolidated feedback instead of conflicting instructions from multiple representatives.",
  "Maintain sufficient balances in advertising, hosting, software and third-party accounts.",
  "Comply with applicable laws, platform policies and industry-specific requirements.",
  "Protect account credentials and immediately report suspected unauthorised access.",
  "Make payments according to the approved proposal, invoice or agreement.",
];

const PAYMENT_TERMS = [
  {
    title: "Advance payment",
    description:
      "Projects may require an advance or initial payment before strategy, design, development, campaign setup or other work begins.",
  },
  {
    title: "Milestone payments",
    description:
      "Larger projects may be billed according to defined milestones, phases, deliverables or monthly service periods.",
  },
  {
    title: "Recurring services",
    description:
      "Monthly retainers and ongoing service fees are generally payable in advance for the applicable service period.",
  },
  {
    title: "Taxes",
    description:
      "GST and any other applicable taxes, duties or statutory charges may be added to the quoted service amount.",
  },
  {
    title: "Additional work",
    description:
      "Work outside the approved scope may require a revised quotation, change request or additional invoice.",
  },
  {
    title: "Payment delay",
    description:
      "BrainADZ may pause work, campaigns, access, delivery or support where an invoice remains unpaid beyond its due date.",
  },
];

const INTELLECTUAL_PROPERTY_ITEMS = [
  {
    title: "Pre-existing BrainADZ materials",
    description:
      "Processes, frameworks, templates, systems, reusable code, internal tools and know-how developed before or independently of the client project remain the property of BrainADZ or their respective owners.",
  },
  {
    title: "Client-owned materials",
    description:
      "The client retains ownership of logos, trademarks, content, data and other materials supplied by the client, subject to the rights granted to BrainADZ for performing the services.",
  },
  {
    title: "Final approved deliverables",
    description:
      "Ownership or usage rights for final deliverables will transfer only as described in the approved proposal and generally after all related invoices have been paid.",
  },
  {
    title: "Drafts and unused concepts",
    description:
      "Rejected, unused or preliminary concepts, drafts, strategies and design directions remain the property of BrainADZ unless otherwise agreed in writing.",
  },
  {
    title: "Third-party assets",
    description:
      "Fonts, stock images, plugins, templates, software, music and other licensed materials remain subject to their respective third-party licence terms.",
  },
  {
    title: "Portfolio usage",
    description:
      "Unless prohibited by a written confidentiality agreement, BrainADZ may display publicly released work in its portfolio, case studies, credentials and promotional material.",
  },
];

const PERFORMANCE_FACTORS = [
  "Market demand and changes in consumer behaviour",
  "Competition, seasonality and geographic targeting",
  "Advertising budget and media costs",
  "Website speed, user experience and conversion flow",
  "Offer quality, pricing and brand reputation",
  "Client response time and sales follow-up process",
  "Search engine and social platform algorithm changes",
  "Third-party platform policies and account restrictions",
  "Content availability and approval timelines",
  "Accuracy of tracking, CRM and analytics systems",
];

const WEBSITE_RESTRICTIONS = [
  "Attempt to gain unauthorised access to the website, server, forms or connected systems.",
  "Upload malware, malicious scripts, viruses or technically harmful material.",
  "Use website content for unlawful, fraudulent, misleading or abusive purposes.",
  "Copy, scrape, reproduce or commercially exploit website content without permission.",
  "Impersonate another person, company or authorised representative.",
  "Submit false, misleading, defamatory, obscene or unlawful information.",
  "Interfere with website performance, security or availability.",
  "Use automated systems to overload or misuse enquiry forms and website resources.",
  "Violate the intellectual property, privacy or legal rights of any party.",
];

export default function TermsAndConditionsPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <TermsHero />
      <TermsHighlights />
      <TermsContent />
      <TermsCTA />
    </main>
  );
}

function TermsHero() {
  return (
    <>
      <section className="relative min-h-[450px] overflow-hidden bg-black text-white sm:min-h-[520px] lg:min-h-[580px]">
        <div className="absolute -right-36 -top-44 h-[480px] w-[480px] rounded-full bg-[#E1122B]/25 blur-[125px]" />
        <div className="absolute -bottom-48 left-[15%] h-[430px] w-[430px] rounded-full bg-[#E1122B]/15 blur-[135px]" />

        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute left-[8%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[30%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[55%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[78%] top-0 h-full w-px bg-white" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[450px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[520px] sm:px-8 lg:min-h-[580px] lg:px-10">
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

            <span className="text-white/60">/</span>
            <span className="text-white">Terms &amp; Conditions</span>
          </nav>

          <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-[12px] border border-white/15 bg-white/5 text-[#E1122B] backdrop-blur-sm">
            <ScrollText className="h-7 w-7" strokeWidth={1.7} />
          </div>

          <h1 className="mt-7 max-w-[1020px] text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[62px]">
            Clear terms for using our website and working with BrainADZ.
          </h1>

          <div className="mt-auto flex flex-col justify-between gap-8 pb-5 pt-10 sm:pb-9 lg:flex-row lg:items-end lg:pb-11">
            <p className="max-w-[850px] text-[18px] leading-[1.55] tracking-[-0.02em] text-white/72 sm:text-[21px] lg:text-[24px]">
              These Terms &amp; Conditions explain the rules that apply when you
              visit our website, submit an enquiry, accept a proposal or engage
              BrainADZ Marketing for professional services.
            </p>

            <div className="shrink-0 border-l-2 border-[#E1122B] pl-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
                Last updated
              </p>

              <p className="mt-2 text-[15px] font-medium text-white">
                {LAST_UPDATED}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fbfbfb]">
        <div className="mx-auto grid max-w-[1800px] px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
          <div className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Website
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Rules for accessing and using BrainADZ digital platforms
            </p>
          </div>

          <div className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:px-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Services
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Commercial terms covering projects and ongoing engagements
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Partnership
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Responsibilities, approvals and cooperation between both parties
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsHighlights() {
  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Our engagement principles</SectionLabel>

            <h2 className="mt-5 max-w-[850px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
              Transparent expectations for a better working relationship.
            </h2>
          </div>

          <p className="max-w-[630px] text-[16px] leading-8 text-black/58">
            Every engagement works better when deliverables, responsibilities,
            approvals, payments and ownership terms are understood by everyone.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TERMS_HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group min-h-[285px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B] transition group-hover:bg-[#E1122B] group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.7} />
                </div>

                <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Principle {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-[25px] font-semibold leading-tight tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-black/58">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TermsContent() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <TermsNavigation />

        <div className="min-w-0">
          <div className="mb-6 rounded-[14px] border border-[#E1122B]/20 bg-[#fff5f5] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#E1122B]" />

              <div>
                <h2 className="text-[18px] font-semibold tracking-[-0.02em]">
                  Please read these terms carefully
                </h2>

                <p className="mt-2 text-[14px] leading-7 text-black/58">
                  By using our website, submitting information, approving a
                  proposal, making a payment or instructing us to begin work,
                  you acknowledge that you have read and accepted the applicable
                  terms.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <PolicySection
              id="acceptance"
              number="01"
              icon={FileCheck2}
              title="Acceptance of these terms"
            >
              <PolicyParagraph>
                These Terms &amp; Conditions govern your access to the{" "}
                {COMPANY_NAME} website and your engagement with us for
                marketing, creative, website, technology, consulting and related
                professional services.
              </PolicyParagraph>

              <PolicyParagraph>
                The terms &quot;BrainADZ&quot;, &quot;we&quot;,
                &quot;us&quot; and &quot;our&quot; refer to {COMPANY_NAME}. The
                terms &quot;client&quot;, &quot;you&quot; and &quot;your&quot;
                refer to the visitor, prospective client, existing client,
                authorised representative or organisation using our website or
                services.
              </PolicyParagraph>

              <PolicyParagraph>
                If you are accepting these terms on behalf of an organisation,
                you confirm that you are authorised to bind that organisation
                to the applicable terms, proposal and service agreement.
              </PolicyParagraph>

              <PolicyParagraph>
                If you do not agree with these terms, you should not use our
                website, submit confidential information or instruct us to begin
                any service.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="services"
              number="02"
              icon={BriefcaseBusiness}
              title="About our services"
            >
              <PolicyParagraph>
                BrainADZ provides business-to-business marketing, branding,
                creative, digital and technology-related services. Depending on
                the approved requirement, our services may include:
              </PolicyParagraph>

              <PolicyList items={SERVICES_LIST} />

              <PolicyParagraph className="mt-7">
                The exact services, deliverables, exclusions, timelines,
                commercial terms and responsibilities for a particular
                engagement will be defined in the applicable proposal,
                quotation, scope of work, purchase order, email approval or
                signed agreement.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="scope"
              number="03"
              icon={ScrollText}
              title="Proposals, quotations and scope of work"
            >
              <PolicyParagraph>
                Any proposal or quotation provided by BrainADZ is based on the
                information available at the time it is prepared. Unless
                otherwise stated, a proposal may remain valid only for the
                validity period mentioned in that document.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Work will be performed according to the deliverables specifically included in the approved scope.",
                  "Features, pages, campaigns, creatives, integrations or services not listed in the approved scope are excluded.",
                  "Verbal discussions or informal messages do not automatically modify an approved scope.",
                  "Scope changes should be documented through email, a revised proposal or a formal change request.",
                  "Additional work may affect cost, delivery dates and resource allocation.",
                  "Estimated quantities such as posts, reels, pages, revisions or campaign sets apply only to the relevant service period.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                Where these website terms conflict with a separately signed
                client agreement, the signed agreement will generally apply to
                that specific engagement.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="client-responsibilities"
              number="04"
              icon={UserCheck}
              title="Client responsibilities"
            >
              <PolicyParagraph>
                Timely cooperation from the client is necessary for proper
                execution of our services. The client agrees to:
              </PolicyParagraph>

              <PolicyList items={CLIENT_RESPONSIBILITIES} />

              <PolicyParagraph className="mt-7">
                BrainADZ will not be responsible for errors, delays, rejection,
                claims or losses resulting from incorrect information,
                unauthorised materials, delayed approvals or incomplete
                instructions supplied by the client.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="payments"
              number="05"
              icon={BadgeIndianRupee}
              title="Fees, payments and taxes"
            >
              <PolicyParagraph>
                Service fees will be stated in the approved proposal,
                quotation, invoice or agreement. Unless specifically stated
                otherwise, third-party charges and applicable taxes are not
                included in our professional service fees.
              </PolicyParagraph>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {PAYMENT_TERMS.map((item) => (
                  <InfoCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>

              <PolicyParagraph className="mt-7">
                Payments should be made through the approved payment method and
                within the stated due date. Bank charges, payment gateway
                charges or international transfer charges may be borne by the
                client unless agreed otherwise.
              </PolicyParagraph>

              <PolicyParagraph>
                BrainADZ may withhold editable files, credentials, source files,
                final delivery, publishing, transfer or continued support until
                all outstanding amounts related to the engagement have been
                cleared.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="advertising-budget"
              number="06"
              icon={Megaphone}
              title="Advertising budgets and third-party media spend"
            >
              <PolicyParagraph>
                Our campaign management or consulting fee is separate from the
                amount paid to advertising platforms unless the approved
                proposal expressly states otherwise.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "The client is responsible for providing and maintaining the approved advertising budget.",
                  "Media spend may be paid directly to Google, Meta, LinkedIn or another advertising platform.",
                  "BrainADZ does not control platform billing cycles, taxes, exchange rates or automatic billing rules.",
                  "Campaign delivery may stop if the advertising account has insufficient balance or a payment failure.",
                  "Unused advertising balance remains subject to the relevant platform's refund and billing policies.",
                  "Advertising budget recommendations are estimates and may change according to campaign data and competition.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                BrainADZ may recommend budget changes, but no increase will be
                intentionally implemented beyond the client-approved limit
                without permission, except where the client has enabled its own
                automated platform rules.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="approvals"
              number="07"
              icon={CheckCircle2}
              title="Approvals, feedback and revisions"
            >
              <PolicyParagraph>
                Campaigns, designs, content, websites and other deliverables may
                require client review and approval before publication or final
                delivery.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Feedback should be clear, specific and consolidated through the authorised contact person.",
                  "Revision limits will be governed by the approved proposal or scope of work.",
                  "A revision means a reasonable modification to an existing direction, not an entirely new concept or scope.",
                  "Changes requested after final approval may be treated as additional work.",
                  "Approval through email, project-management tools, messages or other recorded communication may be treated as valid approval.",
                  "The client is responsible for checking names, numbers, dates, prices, claims, contact information and other factual content before approval.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                Once an approved item is published, printed, advertised or
                distributed, changes may require additional time, media cost,
                printing cost, development work or third-party charges.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="timelines"
              number="08"
              icon={Clock3}
              title="Project timelines and delays"
            >
              <PolicyParagraph>
                Project and campaign timelines are estimates based on the
                approved scope, available resources and expected client
                cooperation.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Timelines may begin only after receipt of the required advance payment and project information.",
                  "Delayed content, feedback, access, approvals or payment may extend the delivery schedule.",
                  "A prolonged client delay may require the project to be rescheduled according to resource availability.",
                  "Third-party review, platform approval, hosting, domain, API or software delays are outside BrainADZ's direct control.",
                  "Urgent or priority work may require additional charges and confirmation of resource availability.",
                  "BrainADZ may revise delivery dates where the scope changes or unforeseen technical requirements arise.",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="intellectual-property"
              number="09"
              icon={Copyright}
              title="Intellectual property and ownership"
            >
              <PolicyParagraph>
                Intellectual property rights depend on the type of deliverable,
                third-party licences, payment status and the terms agreed for
                the specific project.
              </PolicyParagraph>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {INTELLECTUAL_PROPERTY_ITEMS.map((item) => (
                  <InfoCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>

              <PolicyParagraph className="mt-7">
                Unless otherwise agreed in writing, the client may not resell,
                sublicense, distribute or claim exclusive ownership over
                BrainADZ frameworks, templates, reusable systems or proprietary
                working methods.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="third-party-services"
              number="10"
              icon={Globe2}
              title="Third-party platforms, tools and licences"
            >
              <PolicyParagraph>
                Our services may depend on independent platforms and tools such
                as search engines, social networks, advertising platforms,
                hosting providers, domain registrars, CRM systems, plugins,
                APIs, payment gateways, analytics tools and communication
                services.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Third-party services are governed by their own terms, policies, pricing and availability.",
                  "The client may need to purchase and maintain separate subscriptions or licences.",
                  "BrainADZ cannot guarantee continued availability of a third-party feature, integration or platform.",
                  "Platform updates may require additional configuration, development or maintenance work.",
                  "Account suspension, advertising rejection or software restrictions are ultimately controlled by the relevant provider.",
                  "Third-party charges may change without notice from BrainADZ.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                BrainADZ will provide reasonable support within the approved
                scope but is not liable for outages, policy changes, security
                incidents, data loss or service failures caused by an
                independent third party.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="performance"
              number="11"
              icon={RefreshCcw}
              title="Marketing performance and result expectations"
            >
              <PolicyParagraph>
                BrainADZ applies professional experience, research, strategy and
                reasonable effort to improve marketing performance. However,
                marketing outcomes depend on several factors outside our direct
                control.
              </PolicyParagraph>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {PERFORMANCE_FACTORS.map((factor) => (
                  <div
                    key={factor}
                    className="flex items-start gap-3 rounded-[10px] border border-black/10 bg-[#fbfbfb] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />

                    <p className="text-[14px] leading-7 text-black/58">
                      {factor}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[12px] bg-black p-5 text-white sm:p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Important clarification
                </p>

                <p className="mt-3 text-[15px] leading-7 text-white/68">
                  Unless expressly included in a signed agreement, BrainADZ
                  does not guarantee a specific number of leads, sales,
                  enquiries, followers, rankings, impressions, conversions,
                  revenue or return on investment.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="confidentiality"
              number="12"
              icon={LockKeyhole}
              title="Confidentiality"
            >
              <PolicyParagraph>
                Each party may receive non-public business, technical,
                commercial, financial, strategic or customer-related
                information from the other party.
              </PolicyParagraph>

              <PolicyParagraph>
                Both parties should use confidential information only for the
                relevant engagement and should take reasonable steps to prevent
                unauthorised disclosure.
              </PolicyParagraph>

              <PolicyParagraph>
                Confidentiality obligations do not apply to information that is
                publicly available without breach, independently developed,
                lawfully received from another source or required to be
                disclosed by law.
              </PolicyParagraph>

              <PolicyParagraph>
                Where a separate non-disclosure agreement has been signed, that
                agreement will apply to the covered confidential information.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="cancellation"
              number="13"
              icon={WalletCards}
              title="Cancellation, refunds and non-refundable charges"
            >
              <PolicyParagraph>
                Cancellation and refund terms may vary depending on the service,
                project stage, resources reserved and third-party commitments.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Advance payments may be non-refundable once resources have been reserved or work has started.",
                  "Completed work, strategy time, consultation time and delivered milestones remain chargeable.",
                  "Monthly service fees are generally non-refundable after the applicable service period has begun.",
                  "Advertising spend, software subscriptions, domains, hosting, printing and other third-party charges are non-refundable by BrainADZ.",
                  "Approved or published creative work cannot normally be cancelled retrospectively.",
                  "Any approved refund will be adjusted against completed work, taxes, administrative costs and third-party commitments.",
                  "Refund processing, where approved, may be subject to the original payment method and banking timelines.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                A service-specific proposal, invoice or agreement may contain
                different cancellation terms. Those specific terms will apply
                to that engagement.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="termination"
              number="14"
              icon={Ban}
              title="Suspension and termination of services"
            >
              <PolicyParagraph>
                Either party may terminate an ongoing engagement according to
                the notice period stated in the applicable agreement or
                proposal.
              </PolicyParagraph>

              <PolicyParagraph>
                BrainADZ may immediately suspend or terminate services where:
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Payments remain overdue despite reasonable reminders.",
                  "The client requests unlawful, misleading, fraudulent or unethical activity.",
                  "The client repeatedly violates platform policies or applicable law.",
                  "There is abusive, threatening or inappropriate conduct toward our team.",
                  "Required cooperation, information or approval is withheld for an extended period.",
                  "Continuing the engagement creates a security, legal, reputational or operational risk.",
                  "The client materially breaches the approved terms or agreement.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                On termination, the client remains responsible for charges
                relating to completed work, reserved resources, approved
                milestones and committed third-party expenses.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="website-usage"
              number="15"
              icon={ServerCog}
              title="Permitted use of our website"
            >
              <PolicyParagraph>
                You may use our website for lawful informational and business
                purposes. You must not:
              </PolicyParagraph>

              <PolicyList items={WEBSITE_RESTRICTIONS} />

              <PolicyParagraph className="mt-7">
                BrainADZ may restrict access, block submissions or take
                appropriate action where website misuse or suspicious activity
                is identified.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="disclaimers"
              number="16"
              icon={CircleHelp}
              title="Website and service disclaimers"
            >
              <PolicyParagraph>
                Website content is provided for general business and
                informational purposes. It should not be treated as legal,
                financial, tax or other regulated professional advice.
              </PolicyParagraph>

              <PolicyParagraph>
                We aim to keep information accurate and current but do not
                guarantee that every page, example, price, description or
                reference will always be complete, error-free or immediately
                updated.
              </PolicyParagraph>

              <PolicyParagraph>
                Case studies, examples, testimonials and previous results do not
                guarantee that another client will achieve identical outcomes.
              </PolicyParagraph>

              <PolicyParagraph>
                Service availability, pricing, team allocation and timelines
                may change. A service becomes binding only when the applicable
                commercial arrangement has been accepted.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="liability"
              number="17"
              icon={Scale}
              title="Limitation of liability"
            >
              <PolicyParagraph>
                To the maximum extent permitted by applicable law, BrainADZ will
                not be liable for indirect, incidental, special, punitive or
                consequential losses, including loss of profit, opportunity,
                goodwill, anticipated savings or data.
              </PolicyParagraph>

              <PolicyParagraph>
                BrainADZ is not responsible for loss arising from client
                instructions, inaccurate information, delayed approvals,
                platform restrictions, account suspension, third-party outages,
                algorithm changes, cyber incidents outside our reasonable
                control or unauthorised access caused by compromised client
                credentials.
              </PolicyParagraph>

              <PolicyParagraph>
                Where liability cannot lawfully be excluded, the total aggregate
                liability of BrainADZ relating to a specific claim will, unless
                otherwise stated in a signed agreement, be limited to the
                professional service fees actually paid to BrainADZ for the
                directly affected service during the relevant service period.
              </PolicyParagraph>

              <PolicyParagraph>
                Nothing in these terms excludes liability that cannot legally be
                excluded or restricted.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="indemnity"
              number="18"
              icon={ShieldCheck}
              title="Client indemnity"
            >
              <PolicyParagraph>
                The client agrees to defend, indemnify and hold BrainADZ, its
                employees and authorised service partners harmless from
                third-party claims, penalties, losses and reasonable expenses
                arising from:
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Content, claims, products, offers, data or instructions supplied by the client.",
                  "Unauthorised use of third-party trademarks, images, music, content or intellectual property.",
                  "The client's breach of law, industry regulation or platform policy.",
                  "Misleading, inaccurate or prohibited statements approved by the client.",
                  "The client's misuse of delivered work or connected technology.",
                  "A material breach of these terms or the applicable agreement.",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="force-majeure"
              number="19"
              icon={Landmark}
              title="Events beyond reasonable control"
            >
              <PolicyParagraph>
                Neither party will be responsible for delay or failure caused
                by circumstances beyond reasonable control, including natural
                disasters, severe weather, fire, flood, epidemic, pandemic,
                war, civil disturbance, labour disruption, government action,
                internet outage, cyberattack, power failure or widespread
                third-party platform failure.
              </PolicyParagraph>

              <PolicyParagraph>
                The affected party should provide reasonable notice where
                possible and take reasonable steps to reduce the impact.
                Timelines may be extended for the duration of the disruption and
                a reasonable recovery period.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="governing-law"
              number="20"
              icon={Gavel}
              title="Governing law and dispute resolution"
            >
              <PolicyParagraph>
                These Terms &amp; Conditions and related engagements will be
                governed by the laws of India, unless a separately signed
                agreement specifies otherwise.
              </PolicyParagraph>

              <PolicyParagraph>
                The parties should first attempt to resolve any disagreement
                through good-faith discussion between authorised
                representatives.
              </PolicyParagraph>

              <PolicyParagraph>
                If a dispute cannot be resolved informally, it will be subject
                to the dispute-resolution process stated in the applicable
                client agreement. Where no separate process is agreed, the
                courts having jurisdiction over the registered office of
                BrainADZ will have jurisdiction, subject to applicable law.
              </PolicyParagraph>

              <PolicyParagraph>
                If any part of these terms is found invalid or unenforceable,
                the remaining provisions will continue to apply to the extent
                permitted by law.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="changes"
              number="21"
              icon={RefreshCcw}
              title="Changes to these terms"
            >
              <PolicyParagraph>
                BrainADZ may update these Terms &amp; Conditions to reflect
                changes in services, technology, website functionality,
                commercial practices or legal requirements.
              </PolicyParagraph>

              <PolicyParagraph>
                Updated terms will be published on this page with a revised
                &quot;Last updated&quot; date. Continued use of our website
                after publication of revised terms indicates acceptance of the
                updated website terms.
              </PolicyParagraph>

              <PolicyParagraph>
                Material changes to an active client engagement will not
                automatically replace the terms of a separately signed
                agreement unless accepted by the parties.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="contact"
              number="22"
              icon={FileText}
              title="Contact information"
            >
              <PolicyParagraph>
                For questions about these Terms &amp; Conditions, a proposal,
                invoice or active service engagement, contact BrainADZ Marketing
                through the details below.
              </PolicyParagraph>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${TERMS_EMAIL}`}
                  className="group rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5 transition hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <FileText className="h-6 w-6 text-[#E1122B]" />

                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.15em] text-black/38">
                    Legal email
                  </p>

                  <p className="mt-2 break-all text-[16px] font-semibold text-black transition group-hover:text-[#E1122B]">
                    {TERMS_EMAIL}
                  </p>
                </a>

                <Link
                  href="/contact"
                  className="group rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5 transition hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <ArrowRight className="h-6 w-6 text-[#E1122B]" />

                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.15em] text-black/38">
                    Contact page
                  </p>

                  <p className="mt-2 text-[16px] font-semibold text-black transition group-hover:text-[#E1122B]">
                    Speak with our team
                  </p>
                </Link>
              </div>

              <div className="mt-5 rounded-[12px] border border-black/10 bg-white p-5">
                <p className="text-[14px] leading-7 text-black/56">
                  When contacting us about an existing project, include your
                  company name, invoice or proposal reference and a clear
                  description of your question.
                </p>
              </div>
            </PolicySection>
          </div>
        </div>
      </div>
    </section>
  );
}

function TermsNavigation() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <SectionLabel>Terms contents</SectionLabel>

      <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em]">
        Find the relevant service term.
      </h2>

      <div className="mt-7 max-h-[640px] overflow-y-auto rounded-[14px] border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
        {TERMS_NAVIGATION.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-4 border-b border-black/8 px-5 py-4 transition last:border-b-0 hover:bg-[#fff5f5]"
          >
            <span className="text-[11px] font-semibold text-[#E1122B]">
              {item.number}
            </span>

            <span className="flex-1 text-[13px] font-medium text-black/58 transition group-hover:text-black">
              {item.label}
            </span>

            <ArrowRight className="h-4 w-4 -translate-x-1 text-black/20 transition group-hover:translate-x-0 group-hover:text-[#E1122B]" />
          </a>
        ))}
      </div>

      <div className="mt-5 rounded-[14px] bg-black p-6 text-white">
        <Scale className="h-7 w-7 text-[#E1122B]" strokeWidth={1.7} />

        <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em]">
          Have a service question?
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-white/58">
          Contact our team for clarification about a proposal, payment or
          project condition.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-full bg-[#E1122B] px-5 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Contact BrainADZ
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}

function TermsCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[18px] bg-black px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-28 -top-32 h-[380px] w-[380px] rounded-full bg-[#E1122B]/25 blur-[110px]" />
          <div className="absolute -bottom-44 left-[25%] h-[340px] w-[340px] rounded-full bg-[#E1122B]/15 blur-[120px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Planning a project?</SectionLabel>

              <h2 className="mt-5 max-w-[920px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
                Let&apos;s define the right scope, deliverables and growth plan.
              </h2>

              <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-white/60">
                Share your requirement with our team and receive a structured
                proposal based on your business goals, timeline and service
                needs.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Discuss your project
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type PolicySectionProps = {
  id: string;
  number: string;
  icon: ElementType;
  title: string;
  children: ReactNode;
};

function PolicySection({
  id,
  number,
  icon: Icon,
  title,
  children,
}: PolicySectionProps) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-[14px] border border-black/10 bg-white p-5 shadow-[0_12px_36px_rgba(0,0,0,0.04)] sm:p-7 lg:p-8"
    >
      <div className="flex items-start gap-4 border-b border-black/10 pb-6 sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border border-[#E1122B]/20 bg-[#fff1f1] text-[#E1122B]">
          <Icon className="h-6 w-6" strokeWidth={1.7} />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
            Section {number}
          </p>

          <h2 className="mt-2 text-[27px] font-semibold leading-tight tracking-[-0.035em] text-black sm:text-[32px]">
            {title}
          </h2>
        </div>
      </div>

      <div className="pt-6">{children}</div>
    </article>
  );
}

type PolicyParagraphProps = {
  children: ReactNode;
  className?: string;
};

function PolicyParagraph({
  children,
  className = "",
}: PolicyParagraphProps) {
  return (
    <p
      className={`mb-4 text-[15px] leading-8 text-black/60 last:mb-0 ${className}`}
    >
      {children}
    </p>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-[10px] border border-black/8 bg-[#fbfbfb] px-4 py-3.5"
        >
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#E1122B]" />

          <span className="text-[14px] leading-7 text-black/58">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5 transition duration-300 hover:border-[#E1122B]/35 hover:bg-[#fff8f8]">
      <h3 className="text-[16px] font-semibold leading-6 tracking-[-0.02em] text-black">
        {title}
      </h3>

      <p className="mt-3 text-[14px] leading-7 text-black/56">
        {description}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-0.5 w-8 bg-[#E1122B]" />

      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E1122B]">
        {children}
      </p>
    </div>
  );
}