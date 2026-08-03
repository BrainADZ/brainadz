/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cookie,
  Database,
  Eye,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Megaphone,
  ServerCog,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

/*
  IMPORTANT:
  Replace this placeholder with your official privacy or support email
  before publishing the page.
*/
const PRIVACY_EMAIL = "privacy@yourdomain.com";

const POLICY_NAVIGATION = [
  {
    number: "01",
    label: "Introduction",
    href: "#introduction",
  },
  {
    number: "02",
    label: "Information we collect",
    href: "#information-we-collect",
  },
  {
    number: "03",
    label: "How we collect information",
    href: "#how-we-collect",
  },
  {
    number: "04",
    label: "How we use information",
    href: "#how-we-use",
  },
  {
    number: "05",
    label: "Cookies and tracking",
    href: "#cookies",
  },
  {
    number: "06",
    label: "Advertising and analytics",
    href: "#advertising",
  },
  {
    number: "07",
    label: "Information sharing",
    href: "#information-sharing",
  },
  {
    number: "08",
    label: "Data retention",
    href: "#data-retention",
  },
  {
    number: "09",
    label: "Data security",
    href: "#data-security",
  },
  {
    number: "10",
    label: "Your privacy rights",
    href: "#privacy-rights",
  },
  {
    number: "11",
    label: "Third-party services",
    href: "#third-party-services",
  },
  {
    number: "12",
    label: "Children's privacy",
    href: "#children-privacy",
  },
  {
    number: "13",
    label: "Policy updates",
    href: "#policy-updates",
  },
  {
    number: "14",
    label: "Contact us",
    href: "#contact-us",
  },
];

const POLICY_HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Responsible collection",
    description:
      "We collect information that helps us respond to enquiries, deliver services and improve website performance.",
  },
  {
    icon: LockKeyhole,
    title: "Data protection",
    description:
      "We apply reasonable organisational and technical safeguards to protect personal information.",
  },
  {
    icon: UserCheck,
    title: "Your choices",
    description:
      "You may request access, correction, deletion or withdrawal of consent, subject to applicable law.",
  },
];

const INFORMATION_TYPES = [
  {
    title: "Identity and contact information",
    description:
      "Your name, business name, email address, phone number, designation, city or other contact details submitted through our forms.",
  },
  {
    title: "Business requirement information",
    description:
      "Information about your marketing goals, selected services, project requirements, estimated budget, timelines and messages shared with our team.",
  },
  {
    title: "Communication information",
    description:
      "Emails, call notes, consultation details, support requests, feedback and other communications between you and BrainADZ.",
  },
  {
    title: "Website and device information",
    description:
      "IP address, browser type, device type, operating system, approximate location, referring page, visited pages and interaction information.",
  },
  {
    title: "Marketing and campaign information",
    description:
      "Campaign source, advertisement interaction, enquiry source, conversion activity and communication preferences.",
  },
  {
    title: "Recruitment information",
    description:
      "Resume, portfolio, employment history, education, contact details and other information submitted for a career opportunity.",
  },
];

const DATA_USAGE_ITEMS = [
  "Respond to enquiries, consultation requests and service-related questions.",
  "Understand your business goals and recommend suitable marketing services.",
  "Prepare proposals, quotations, plans, presentations and project documentation.",
  "Deliver SEO, advertising, social media, branding, website and consulting services.",
  "Manage project communication, approvals, reporting and customer support.",
  "Track leads, follow-ups and enquiry status through internal systems or CRM tools.",
  "Send relevant service updates or marketing communication where permitted.",
  "Measure website traffic, campaign performance and conversion activity.",
  "Improve website usability, content, security and service quality.",
  "Prevent misuse, fraud, security incidents and unauthorised activity.",
  "Meet contractual, accounting, legal, regulatory and compliance requirements.",
];

const COOKIE_TYPES = [
  {
    title: "Essential cookies",
    description:
      "These cookies support important website functions such as security, form submission, page navigation and basic preferences.",
  },
  {
    title: "Analytics cookies",
    description:
      "These cookies help us understand website traffic, popular pages, visitor behaviour and overall website performance.",
  },
  {
    title: "Advertising cookies",
    description:
      "Where enabled, these cookies may help measure advertising campaigns, conversions and relevant remarketing audiences.",
  },
  {
    title: "Preference cookies",
    description:
      "These cookies may remember language, display, consent or other website preferences for future visits.",
  },
];

const PRIVACY_RIGHTS = [
  {
    title: "Access information",
    description:
      "You may request information about the personal data we hold or process about you, subject to applicable law.",
  },
  {
    title: "Correction",
    description:
      "You may ask us to correct personal information that is inaccurate, incomplete or outdated.",
  },
  {
    title: "Erasure",
    description:
      "You may request deletion of personal data that is no longer required, subject to legal, contractual and operational retention requirements.",
  },
  {
    title: "Withdraw consent",
    description:
      "Where processing is based on your consent, you may withdraw that consent for future processing.",
  },
  {
    title: "Marketing preferences",
    description:
      "You may unsubscribe from promotional emails or ask us to stop sending non-essential marketing communication.",
  },
  {
    title: "Grievance redressal",
    description:
      "You may contact us if you have a concern about how your personal information has been collected, used or handled.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <PrivacyPolicyHero />
      <PrivacyHighlightsSection />
      <PrivacyPolicyContent />
      <PrivacyPolicyCTA />
    </main>
  );
}

function PrivacyPolicyHero() {
  return (
    <>
      <section className="relative min-h-[440px] overflow-hidden bg-black text-white sm:min-h-[520px] lg:min-h-[570px]">
        {/* Background decoration */}
        <div className="absolute -right-32 -top-36 h-[440px] w-[440px] rounded-full bg-[#E1122B]/25 blur-[120px]" />
        <div className="absolute -bottom-48 left-[20%] h-[420px] w-[420px] rounded-full bg-[#E1122B]/15 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute left-[8%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[30%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[55%] top-0 h-full w-px bg-white" />
          <div className="absolute left-[78%] top-0 h-full w-px bg-white" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1800px] flex-col px-5 py-8 sm:min-h-[520px] sm:px-8 lg:min-h-[570px] lg:px-10">
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
            <span className="text-white">Privacy Policy</span>
          </nav>

          <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-[12px] border border-white/15 bg-white/5 text-[#E1122B] backdrop-blur-sm">
            <ShieldCheck className="h-7 w-7" strokeWidth={1.7} />
          </div>

          <h1 className="mt-7 max-w-[920px] text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[62px]">
            Your privacy and trust matter to us.
          </h1>

          <div className="mt-auto flex flex-col justify-between gap-7 pb-5 pt-10 sm:pb-9 lg:flex-row lg:items-end lg:pb-11">
            <p className="max-w-[800px] text-[18px] leading-[1.55] tracking-[-0.02em] text-white/72 sm:text-[21px] lg:text-[24px]">
              This Privacy Policy explains how BrainADZ Marketing collects,
              uses, stores and protects information when you visit our website,
              contact our team or use our services.
            </p>

            <div className="shrink-0 border-l-2 border-[#E1122B] pl-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
                Last updated
              </p>

              <p className="mt-2 text-[15px] font-medium text-white">
                3 August 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fbfbfb]">
        <div className="mx-auto grid max-w-[1800px] px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
          <div className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Clear
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Transparent explanation of how information is handled
            </p>
          </div>

          <div className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:px-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Secure
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Reasonable safeguards for collected personal information
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Responsible
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Information used for defined business and service purposes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function PrivacyHighlightsSection() {
  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Our privacy approach</SectionLabel>

            <h2 className="mt-5 max-w-[820px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
              Clear practices for responsible data handling.
            </h2>
          </div>

          <p className="max-w-[620px] text-[16px] leading-8 text-black/58">
            We collect and use information to respond to your requirements,
            deliver relevant services and improve the experience provided
            through our website.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {POLICY_HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group min-h-[280px] rounded-[14px] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#E1122B]/40 hover:bg-[#fff8f8] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:p-7"
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

function PrivacyPolicyContent() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <PrivacyPolicyNavigation />

        <div className="min-w-0">
          <div className="mb-6 rounded-[14px] border border-[#E1122B]/20 bg-[#fff5f5] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <FileText className="mt-0.5 h-6 w-6 shrink-0 text-[#E1122B]" />

              <div>
                <h2 className="text-[18px] font-semibold tracking-[-0.02em]">
                  About this policy
                </h2>

                <p className="mt-2 text-[14px] leading-7 text-black/58">
                  This policy applies to information collected through the
                  BrainADZ Marketing website, enquiry forms, consultation
                  requests, newsletter forms, project discussions and related
                  digital interactions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <PolicySection
              id="introduction"
              number="01"
              icon={ShieldCheck}
              title="Introduction and scope"
            >
              <PolicyParagraph>
                BrainADZ Marketing, referred to in this policy as
                &quot;BrainADZ&quot;, &quot;we&quot;, &quot;us&quot; or
                &quot;our&quot;, respects the privacy of website visitors,
                prospective clients, existing clients, partners, applicants and
                other individuals who interact with us.
              </PolicyParagraph>

              <PolicyParagraph>
                This Privacy Policy explains the categories of information we
                may collect, why we collect it, how it may be used, when it may
                be shared and the choices available to you.
              </PolicyParagraph>

              <PolicyParagraph>
                Where BrainADZ determines the purpose and manner in which
                personal data is processed, BrainADZ may act as the responsible
                data-handling entity or Data Fiduciary under applicable law.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="information-we-collect"
              number="02"
              icon={Database}
              title="Information we may collect"
            >
              <PolicyParagraph>
                The information collected depends on how you interact with our
                website and services. We may collect the following categories
                of information:
              </PolicyParagraph>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {INFORMATION_TYPES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5"
                  >
                    <h3 className="text-[16px] font-semibold leading-6 tracking-[-0.02em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-black/56">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <PolicyParagraph className="mt-7">
                Please avoid sharing sensitive personal information that is not
                necessary for your enquiry or project requirement.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="how-we-collect"
              number="03"
              icon={Eye}
              title="How we collect information"
            >
              <PolicyParagraph>
                We may collect information through the following sources:
              </PolicyParagraph>

              <PolicyList
                items={[
                  "When you complete an enquiry, contact, consultation, newsletter or career form.",
                  "When you contact us through email, phone, WhatsApp, social media or other communication channels.",
                  "When you request a proposal, quotation, audit, presentation, brochure or service information.",
                  "When you work with us on a marketing, branding, website, advertising or consulting project.",
                  "Automatically through cookies, server logs, analytics tools and similar website technologies.",
                  "Through advertising or lead-generation platforms when you submit a form or respond to a campaign.",
                  "Through referrals, professional platforms, business directories or publicly available business sources.",
                ]}
              />
            </PolicySection>

            <PolicySection
              id="how-we-use"
              number="04"
              icon={ServerCog}
              title="How we use your information"
            >
              <PolicyParagraph>
                We may use collected information for the following business and
                service purposes:
              </PolicyParagraph>

              <PolicyList items={DATA_USAGE_ITEMS} />

              <div className="mt-7 rounded-[12px] border border-black/10 bg-black p-5 text-white sm:p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Our commitment
                </p>

                <p className="mt-3 text-[15px] leading-7 text-white/68">
                  BrainADZ does not sell your personal information as a
                  standalone commercial product. Information may only be shared
                  where necessary for legitimate business operations, service
                  delivery, compliance or with your direction.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="cookies"
              number="05"
              icon={Cookie}
              title="Cookies and similar technologies"
            >
              <PolicyParagraph>
                Our website may use cookies, pixels, tags, local storage and
                similar technologies to operate correctly, remember
                preferences, understand traffic and measure marketing
                performance.
              </PolicyParagraph>

              <div className="mt-7 space-y-3">
                {COOKIE_TYPES.map((cookie) => (
                  <div
                    key={cookie.title}
                    className="grid gap-3 rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5 sm:grid-cols-[210px_1fr] sm:gap-7"
                  >
                    <h3 className="text-[15px] font-semibold text-black">
                      {cookie.title}
                    </h3>

                    <p className="text-[14px] leading-7 text-black/56">
                      {cookie.description}
                    </p>
                  </div>
                ))}
              </div>

              <PolicyParagraph className="mt-7">
                You can control or delete cookies through your browser settings.
                Disabling certain cookies may affect some website functions,
                form behaviour or saved preferences.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="advertising"
              number="06"
              icon={BarChart3}
              title="Analytics, advertising and campaign measurement"
            >
              <PolicyParagraph>
                Where enabled, our website may use third-party analytics,
                advertising and conversion-measurement technologies. These tools
                may collect information about visits, page interactions,
                campaign sources and form conversions.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Understand which pages and services receive the most interest.",
                  "Measure website and landing-page performance.",
                  "Identify the source of enquiries and campaign conversions.",
                  "Improve advertising audiences, messaging and budget allocation.",
                  "Create aggregated reports for internal performance analysis.",
                  "Limit repeated or irrelevant advertisements where supported.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                Third-party advertising and analytics providers may process
                information according to their own privacy policies and
                technology settings.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="information-sharing"
              number="07"
              icon={Globe2}
              title="When information may be shared"
            >
              <PolicyParagraph>
                We may share limited information when reasonably necessary with:
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Employees, consultants and authorised team members who require access to perform their responsibilities.",
                  "Website hosting, cloud storage, email, analytics, CRM, communication and technology service providers.",
                  "Advertising, marketing and reporting platforms used for approved campaigns.",
                  "Professional advisers such as accountants, auditors or legal consultants.",
                  "Business partners or subcontractors supporting an agreed client project.",
                  "Government authorities, regulators or law-enforcement bodies where disclosure is legally required.",
                  "A successor entity in connection with a lawful merger, restructuring, acquisition or transfer of business.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                Service providers are expected to process information only for
                authorised purposes and apply appropriate confidentiality and
                security practices.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="data-retention"
              number="08"
              icon={Database}
              title="Data retention"
            >
              <PolicyParagraph>
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected, including
                enquiry management, project delivery, support, accounting,
                dispute resolution and legal compliance.
              </PolicyParagraph>

              <PolicyParagraph>
                Retention periods may vary depending on the type of information,
                the relationship with you, contractual requirements and
                applicable legal obligations.
              </PolicyParagraph>

              <PolicyParagraph>
                When information is no longer reasonably required, we may
                delete, anonymise or securely archive it, unless continued
                retention is required or permitted by law.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="data-security"
              number="09"
              icon={LockKeyhole}
              title="How we protect information"
            >
              <PolicyParagraph>
                We use reasonable technical and organisational measures designed
                to protect personal information from unauthorised access,
                alteration, disclosure, misuse, loss or destruction.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Access restrictions based on business responsibilities.",
                  "Password protection and account-access controls.",
                  "Secure hosting and encrypted website connections where available.",
                  "Software, plugin and system updates where applicable.",
                  "Internal confidentiality and information-handling practices.",
                  "Backups, monitoring and incident-response procedures where appropriate.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                No website, internet transmission or electronic storage method
                can be guaranteed to be completely secure. Users should also
                take reasonable precautions when sharing information online.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="privacy-rights"
              number="10"
              icon={UserCheck}
              title="Your privacy rights and choices"
            >
              <PolicyParagraph>
                Depending on applicable law and the circumstances of processing,
                you may have the following rights or choices:
              </PolicyParagraph>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {PRIVACY_RIGHTS.map((right) => (
                  <div
                    key={right.title}
                    className="rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5 transition hover:border-[#E1122B]/35 hover:bg-[#fff8f8]"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E1122B]" />

                      <div>
                        <h3 className="text-[15px] font-semibold">
                          {right.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-7 text-black/56">
                          {right.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <PolicyParagraph className="mt-7">
                We may need to verify your identity and request before providing
                access, correction or deletion. Certain requests may be limited
                where information must be retained for legal, contractual,
                security or legitimate operational reasons.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="third-party-services"
              number="11"
              icon={Megaphone}
              title="Third-party websites and services"
            >
              <PolicyParagraph>
                Our website may contain links to social media platforms,
                advertising platforms, payment services, partner websites or
                other third-party services.
              </PolicyParagraph>

              <PolicyParagraph>
                BrainADZ does not control the privacy, security or content
                practices of independent third parties. You should review the
                privacy policy of any external website or service before
                providing personal information.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="children-privacy"
              number="12"
              icon={ShieldCheck}
              title="Children's privacy"
            >
              <PolicyParagraph>
                Our website and marketing services are primarily intended for
                businesses and adults. We do not knowingly seek to collect
                personal information from children through our general enquiry
                forms.
              </PolicyParagraph>

              <PolicyParagraph>
                If you believe that a child has provided personal information
                without appropriate authorisation, please contact us so that we
                can review and take appropriate action.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="policy-updates"
              number="13"
              icon={FileText}
              title="Changes to this Privacy Policy"
            >
              <PolicyParagraph>
                We may update this Privacy Policy when our website, services,
                technology, business practices or legal obligations change.
              </PolicyParagraph>

              <PolicyParagraph>
                The updated version will be published on this page with a
                revised &quot;Last updated&quot; date. We encourage users to
                review this page periodically.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="contact-us"
              number="14"
              icon={Mail}
              title="Contact and grievance requests"
            >
              <PolicyParagraph>
                For questions, requests or concerns regarding this Privacy
                Policy or the handling of your personal information, contact
                BrainADZ Marketing through the details below.
              </PolicyParagraph>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="group rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5 transition hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <Mail className="h-6 w-6 text-[#E1122B]" />

                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.15em] text-black/38">
                    Privacy email
                  </p>

                  <p className="mt-2 break-all text-[16px] font-semibold text-black transition group-hover:text-[#E1122B]">
                    {PRIVACY_EMAIL}
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
                    Submit a privacy request
                  </p>
                </Link>
              </div>

              <div className="mt-5 rounded-[12px] border border-black/10 bg-white p-5">
                <p className="text-[14px] leading-7 text-black/56">
                  Please include your name, contact information, the nature of
                  your request and any information that can help us identify the
                  relevant interaction or enquiry.
                </p>
              </div>
            </PolicySection>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyPolicyNavigation() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <SectionLabel>Policy contents</SectionLabel>

      <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em]">
        Find the information you need.
      </h2>

      <div className="mt-7 overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
        {POLICY_NAVIGATION.map((item) => (
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
        <LockKeyhole className="h-7 w-7 text-[#E1122B]" strokeWidth={1.7} />

        <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em]">
          Have a privacy concern?
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-white/58">
          Contact our team regarding your personal information or communication
          preferences.
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

function PrivacyPolicyCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[18px] bg-black px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-28 -top-32 h-[380px] w-[380px] rounded-full bg-[#E1122B]/25 blur-[110px]" />
          <div className="absolute -bottom-44 left-[25%] h-[340px] w-[340px] rounded-full bg-[#E1122B]/15 blur-[120px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel light>Questions about your information?</SectionLabel>

              <h2 className="mt-5 max-w-[900px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
                Talk to our team about a privacy request or concern.
              </h2>

              <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-white/60">
                You can contact BrainADZ to update your details, change
                communication preferences or request information about your
                personal data.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Contact our team
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
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
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
  children: React.ReactNode;
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

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-0.5 w-8 bg-[#E1122B]" />

      <p
        className={`text-[12px] font-semibold uppercase tracking-[0.18em] ${
          light ? "text-[#E1122B]" : "text-[#E1122B]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}