import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import {
  AlertCircle,
  ArrowRight,
  BadgeIndianRupee,
  Ban,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Megaphone,
  PackageX,
  ReceiptIndianRupee,
  RefreshCcw,
  RotateCcw,
  Scale,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";

/*
  Replace these details before publishing.
*/
const COMPANY_NAME = "BrainADZ Marketing";
const REFUND_EMAIL = "accounts@yourdomain.com";
const LAST_UPDATED = "3 August 2026";
const REFUND_PROCESSING_TIME = "7–15 business days";

const POLICY_NAVIGATION = [
  {
    number: "01",
    label: "Policy scope",
    href: "#policy-scope",
  },
  {
    number: "02",
    label: "Nature of our services",
    href: "#service-nature",
  },
  {
    number: "03",
    label: "Cancellation requests",
    href: "#cancellation-requests",
  },
  {
    number: "04",
    label: "Refund eligibility",
    href: "#refund-eligibility",
  },
  {
    number: "05",
    label: "Non-refundable payments",
    href: "#non-refundable",
  },
  {
    number: "06",
    label: "Monthly retainers",
    href: "#monthly-retainers",
  },
  {
    number: "07",
    label: "Advertising budgets",
    href: "#advertising-budgets",
  },
  {
    number: "08",
    label: "Website projects",
    href: "#website-projects",
  },
  {
    number: "09",
    label: "Creative services",
    href: "#creative-services",
  },
  {
    number: "10",
    label: "Duplicate payments",
    href: "#duplicate-payments",
  },
  {
    number: "11",
    label: "Refund calculation",
    href: "#refund-calculation",
  },
  {
    number: "12",
    label: "Refund processing",
    href: "#refund-processing",
  },
  {
    number: "13",
    label: "Client delays",
    href: "#client-delays",
  },
  {
    number: "14",
    label: "Service termination",
    href: "#service-termination",
  },
  {
    number: "15",
    label: "Chargebacks",
    href: "#chargebacks",
  },
  {
    number: "16",
    label: "Disputes and contact",
    href: "#disputes-contact",
  },
  {
    number: "17",
    label: "Policy updates",
    href: "#policy-updates",
  },
];

const POLICY_HIGHLIGHTS = [
  {
    icon: FileCheck2,
    title: "Clear eligibility",
    description:
      "Refund eligibility is based on the approved scope, payment type, project stage and work already completed.",
  },
  {
    icon: WalletCards,
    title: "Transparent deductions",
    description:
      "Completed work, reserved resources, taxes and third-party charges may be deducted from an approved refund.",
  },
  {
    icon: Handshake,
    title: "Fair review process",
    description:
      "Every valid cancellation or refund request is reviewed using the relevant proposal, invoice and project records.",
  },
];

const REFUND_ELIGIBILITY_ITEMS = [
  {
    title: "Cancellation before work begins",
    description:
      "A partial refund may be considered when the client cancels before strategy, design, campaign setup, development or resource allocation has started.",
  },
  {
    title: "Duplicate payment",
    description:
      "An accidental duplicate payment may be refunded after the transaction and related invoice have been verified.",
  },
  {
    title: "Incorrect excess payment",
    description:
      "A verified payment received above the invoiced amount may be adjusted against future work or refunded.",
  },
  {
    title: "Service not initiated by BrainADZ",
    description:
      "A refund may be considered where BrainADZ is unable to begin the approved service and no equivalent alternative is accepted.",
  },
  {
    title: "Mutual project cancellation",
    description:
      "Where both parties agree to close a project, the refundable amount will be calculated after deducting completed work and committed costs.",
  },
  {
    title: "Specific written commitment",
    description:
      "A refund may be issued where it is expressly provided for in the approved proposal, agreement or written commercial commitment.",
  },
];

const NON_REFUNDABLE_ITEMS = [
  "Strategy, consultation, audit or research work that has already been completed.",
  "Advance payments after project planning or resource allocation has started.",
  "Completed milestones, approved deliverables or published campaign work.",
  "Monthly retainers after the relevant service period has begun.",
  "Advertising spend paid to Google, Meta, LinkedIn or another media platform.",
  "Domain, hosting, software, plugin, stock asset, API or subscription charges.",
  "Payment gateway, banking, currency conversion or transaction charges.",
  "Taxes already deposited or statutory charges that cannot be reversed.",
  "Printing, production, influencer, media buying or external vendor costs.",
  "Urgent work or priority resource charges already incurred.",
  "Work delayed because of missing client information, access or approvals.",
  "Payments for work rejected only because of a change in personal preference after prior approval.",
];

const REFUND_DEDUCTIONS = [
  {
    title: "Completed work",
    description:
      "The value of strategy, consultation, research, design, development, campaign setup or other work completed before cancellation.",
  },
  {
    title: "Reserved resources",
    description:
      "Reasonable charges for team capacity, project scheduling or specialist resources reserved specifically for the engagement.",
  },
  {
    title: "Third-party expenses",
    description:
      "Software, advertising, hosting, domain, licensing, vendor, printing or other external expenses already committed.",
  },
  {
    title: "Taxes and transaction charges",
    description:
      "Applicable taxes, payment gateway fees, banking charges or transaction costs that cannot be recovered.",
  },
  {
    title: "Delivered milestones",
    description:
      "Any milestone, report, plan, design, campaign, page, code or deliverable already shared with the client.",
  },
  {
    title: "Administrative closure",
    description:
      "Reasonable project reconciliation, documentation, transfer or account closure work required after cancellation.",
  },
];

const REQUIRED_REFUND_DETAILS = [
  "Client or company name",
  "Registered email address and phone number",
  "Invoice, quotation or proposal reference",
  "Payment date and transaction reference",
  "Service or project name",
  "Reason for cancellation or refund request",
  "Supporting screenshots or payment documents, where applicable",
  "Bank or payment details requested by our accounts team",
];

export default function ReturnPolicyPage() {
  return (
    <main className="dm-sans bg-white text-[#111111]">
      <ReturnPolicyHero />
      <ReturnPolicyHighlights />
      <ReturnPolicyContent />
      <ReturnPolicyCTA />
    </main>
  );
}

function ReturnPolicyHero() {
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
            <span className="text-white">
              Return, Refund &amp; Cancellation Policy
            </span>
          </nav>

          <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-[12px] border border-white/15 bg-white/5 text-[#E1122B] backdrop-blur-sm">
            <RotateCcw className="h-7 w-7" strokeWidth={1.7} />
          </div>

          <h1 className="mt-7 max-w-[1040px] text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-[50px] lg:text-[62px]">
            Clear cancellation and refund terms for our professional services.
          </h1>

          <div className="mt-auto flex flex-col justify-between gap-8 pb-5 pt-10 sm:pb-9 lg:flex-row lg:items-end lg:pb-11">
            <p className="max-w-[860px] text-[18px] leading-[1.55] tracking-[-0.02em] text-white/72 sm:text-[21px] lg:text-[24px]">
              This policy explains when a payment may be refundable, which
              charges are non-refundable and how cancellation requests are
              reviewed by BrainADZ Marketing.
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
              Services
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Customized digital services cannot be physically returned
            </p>
          </div>

          <div className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:px-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Review
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Each request is reviewed against the project and payment records
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <p className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#E1122B] sm:text-[36px]">
              Fairness
            </p>

            <p className="mt-3 text-[14px] leading-6 text-black/55">
              Approved refunds consider completed work and committed expenses
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ReturnPolicyHighlights() {
  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Our refund approach</SectionLabel>

            <h2 className="mt-5 max-w-[860px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
              Transparent terms based on the actual stage of work.
            </h2>
          </div>

          <p className="max-w-[650px] text-[16px] leading-8 text-black/58">
            Our services involve professional time, planning, creative work,
            technology and reserved resources. Refund decisions therefore
            depend on what has already been completed or committed.
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

function ReturnPolicyContent() {
  return (
    <section className="border-y border-black/10 bg-[#fbfbfb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1800px] gap-12 px-5 sm:px-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:gap-16 lg:px-10">
        <ReturnPolicyNavigation />

        <div className="min-w-0">
          <div className="mb-6 rounded-[14px] border border-[#E1122B]/20 bg-[#fff5f5] p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-[#E1122B]" />

              <div>
                <h2 className="text-[18px] font-semibold tracking-[-0.02em]">
                  Important service clarification
                </h2>

                <p className="mt-2 text-[14px] leading-7 text-black/58">
                  BrainADZ provides customized professional and digital
                  services. These services cannot be returned in the same
                  manner as physical goods after work, delivery or resource
                  allocation has started.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <PolicySection
              id="policy-scope"
              number="01"
              icon={FileText}
              title="Scope of this policy"
            >
              <PolicyParagraph>
                This Return, Refund &amp; Cancellation Policy applies to
                payments made to {COMPANY_NAME} for marketing, branding,
                advertising, creative, website, technology, consulting,
                maintenance and related professional services.
              </PolicyParagraph>

              <PolicyParagraph>
                The terms &quot;BrainADZ&quot;, &quot;we&quot;,
                &quot;us&quot; and &quot;our&quot; refer to{" "}
                {COMPANY_NAME}. The terms &quot;client&quot;,
                &quot;you&quot; and &quot;your&quot; refer to the individual,
                organisation or authorised representative purchasing or
                requesting our services.
              </PolicyParagraph>

              <PolicyParagraph>
                This policy should be read with the approved proposal,
                quotation, invoice, scope of work, Terms &amp; Conditions and
                any separately signed service agreement.
              </PolicyParagraph>

              <PolicyParagraph>
                Where a service-specific agreement contains different refund or
                cancellation terms, the terms of that agreement will apply to
                the relevant engagement.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="service-nature"
              number="02"
              icon={PackageX}
              title="Nature of our services"
            >
              <PolicyParagraph>
                BrainADZ primarily provides customized services rather than
                standard physical products. Our team may begin research,
                strategy, planning, design, development, account setup,
                campaign preparation or resource allocation shortly after
                receiving approval and payment.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Digital marketing strategy and consulting",
                  "Search engine optimization and content planning",
                  "Google Ads, Meta Ads and performance marketing",
                  "Social media management and creative production",
                  "Branding and visual identity development",
                  "Website design, development and maintenance",
                  "Landing pages and conversion optimization",
                  "CRM, automation, analytics and reporting support",
                  "Campaign audits, market research and consultation",
                  "Other customized professional or digital services",
                ]}
              />

              <PolicyParagraph className="mt-7">
                Because professional time and project resources are consumed
                during delivery, completed work cannot be returned, reversed or
                restored to its original unused condition.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="cancellation-requests"
              number="03"
              icon={XCircle}
              title="How to request cancellation"
            >
              <PolicyParagraph>
                A client requesting cancellation should contact BrainADZ in
                writing as soon as possible. A discussion with a team member
                does not become a confirmed cancellation until it has been
                acknowledged through an official communication channel.
              </PolicyParagraph>

              <PolicyList items={REQUIRED_REFUND_DETAILS} />

              <PolicyParagraph className="mt-7">
                The effective cancellation date will generally be the date on
                which BrainADZ receives a complete written request containing
                enough information to identify the project and payment.
              </PolicyParagraph>

              <PolicyParagraph>
                Work completed, resources reserved or third-party expenses
                incurred before the effective cancellation date may remain
                chargeable.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="refund-eligibility"
              number="04"
              icon={ReceiptIndianRupee}
              title="When a refund may be considered"
            >
              <PolicyParagraph>
                Refunds are not automatic. A refund may be considered after
                reviewing the applicable proposal, payment record, project
                stage and work already completed.
              </PolicyParagraph>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {REFUND_ELIGIBILITY_ITEMS.map((item) => (
                  <InfoCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>

              <PolicyParagraph className="mt-7">
                Approval of one refund request does not create an obligation to
                approve another request involving different facts, services or
                project stages.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="non-refundable"
              number="05"
              icon={Ban}
              title="Non-refundable payments and expenses"
            >
              <PolicyParagraph>
                Unless otherwise required by applicable law or specifically
                agreed in writing, the following amounts are generally
                non-refundable:
              </PolicyParagraph>

              <PolicyList items={NON_REFUNDABLE_ITEMS} />

              <div className="mt-7 rounded-[12px] bg-black p-5 text-white sm:p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Important
                </p>

                <p className="mt-3 text-[15px] leading-7 text-white/68">
                  Dissatisfaction caused only by changed business plans,
                  management decisions, personal preferences or results outside
                  BrainADZ&apos;s control does not automatically create refund
                  eligibility.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="monthly-retainers"
              number="06"
              icon={RefreshCcw}
              title="Monthly retainers and recurring services"
            >
              <PolicyParagraph>
                Monthly marketing, SEO, social media, advertising management,
                consulting, support and maintenance services reserve team
                capacity for a defined service period.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Monthly service fees are generally payable in advance.",
                  "A monthly fee becomes non-refundable once the relevant service period has started.",
                  "Unused content quantities, consultation hours or service capacity may expire at the end of the applicable period.",
                  "Unused monthly deliverables do not automatically roll over unless the proposal specifically allows it.",
                  "The client should provide cancellation notice according to the approved proposal or agreement.",
                  "Failure to use, review or respond during a service period does not automatically qualify the payment for a refund.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                Where no specific notice period has been agreed, cancellation
                will normally apply prospectively and will not reverse services
                or resource allocation from a period that has already started.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="advertising-budgets"
              number="07"
              icon={Megaphone}
              title="Advertising budgets and campaign expenses"
            >
              <PolicyParagraph>
                Advertising media spend is separate from BrainADZ&apos;s
                campaign management, strategy, creative or consulting fees
                unless an approved proposal expressly states otherwise.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Advertising payments made directly to a platform are governed by that platform's billing and refund policies.",
                  "BrainADZ cannot directly refund money retained or charged by Google, Meta, LinkedIn or another third party.",
                  "Media spend already consumed through impressions, clicks, leads or campaign delivery is non-refundable.",
                  "Campaign management fees remain chargeable for work completed before campaign cancellation.",
                  "Advertising account taxes, platform fees and currency conversion charges may be non-refundable.",
                  "Any remaining advertising balance will be handled according to the relevant platform's account and billing rules.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                Where BrainADZ has paid an advertising or media expense on the
                client&apos;s behalf, any possible refund will depend on the
                amount actually recovered from the relevant provider.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="website-projects"
              number="08"
              icon={Globe2}
              title="Website design and development projects"
            >
              <PolicyParagraph>
                Website projects commonly involve discovery, planning, design,
                development, content implementation, testing and deployment.
                Payments may be linked to an advance or defined milestones.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "The advance payment becomes non-refundable after project planning or resource allocation starts.",
                  "Completed design, development or content milestones remain payable even if the client later cancels.",
                  "A change in preferred design direction after approval does not automatically qualify for a refund.",
                  "Domains, hosting, paid themes, plugins, APIs and software licences are non-refundable by BrainADZ.",
                  "Client delays in content, feedback, credentials or approval do not make completed work refundable.",
                  "Source code, credentials or final files may be withheld until all approved invoices are cleared.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                If a project is cancelled before completion, BrainADZ may
                provide the completed and paid deliverables in their existing
                condition, subject to intellectual property and third-party
                licensing restrictions.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="creative-services"
              number="09"
              icon={FileCheck2}
              title="Creative, branding and content services"
            >
              <PolicyParagraph>
                Creative services involve subjective direction, professional
                time and customized output. The approved scope will define the
                number of concepts, designs, videos, content pieces and revision
                rounds included.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Strategy, research, concepts and drafts become chargeable when work begins.",
                  "A revision is a reasonable change to an existing direction and not a completely new requirement.",
                  "Rejection of work due only to a changed preference does not create an automatic refund right.",
                  "Approved, published, printed or distributed creative work is non-refundable.",
                  "Stock images, music, fonts and other licensed assets are subject to third-party terms.",
                  "Unused or rejected concepts remain the property of BrainADZ unless otherwise agreed.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                BrainADZ will make reasonable efforts to complete the agreed
                revision process, but unlimited revisions are not included
                unless specifically stated in the approved scope.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="duplicate-payments"
              number="10"
              icon={CreditCard}
              title="Duplicate, failed or incorrect payments"
            >
              <PolicyParagraph>
                If the same invoice is accidentally paid more than once, the
                client should contact our accounts team with transaction
                references and supporting payment documents.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "A verified duplicate payment may be refunded or adjusted against another approved invoice.",
                  "A bank deduction does not confirm payment until the amount is successfully received by BrainADZ.",
                  "For a failed transaction, the client's bank or payment provider may automatically reverse the amount.",
                  "BrainADZ cannot control the reversal timeline of a bank, card network, UPI provider or payment gateway.",
                  "Payment gateway and banking charges may be deducted where they are not recoverable.",
                  "Incorrect payments should be reported promptly using the official accounts email.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                BrainADZ may request additional verification before returning
                money to protect both parties against fraud or payment disputes.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="refund-calculation"
              number="11"
              icon={BadgeIndianRupee}
              title="How an approved refund is calculated"
            >
              <PolicyParagraph>
                Where a refund is approved, the refundable amount will not
                necessarily equal the original payment. The calculation may
                include reasonable deductions for the following:
              </PolicyParagraph>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {REFUND_DEDUCTIONS.map((item) => (
                  <InfoCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>

              <PolicyParagraph className="mt-7">
                BrainADZ may provide a written calculation showing the approved
                amount and major deductions before processing the refund.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="refund-processing"
              number="12"
              icon={Clock3}
              title="Refund approval and processing time"
            >
              <PolicyParagraph>
                After receiving a complete request, BrainADZ will review the
                payment, project status, completed deliverables and related
                records.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Additional documents or clarification may be requested before a decision is made.",
                  "An acknowledgement of the request does not mean that the refund has been approved.",
                  "Approved refunds are normally initiated within the stated processing period.",
                  "Banking, card, UPI and payment gateway settlement times may add further delay.",
                  "Refunds will ordinarily be returned through the original payment method where reasonably possible.",
                  "The recipient name and account may need to match the original payer or invoice record.",
                ]}
              />

              <div className="mt-7 rounded-[12px] border border-[#E1122B]/20 bg-[#fff5f5] p-5 sm:p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E1122B]">
                  Standard processing period
                </p>

                <p className="mt-3 text-[28px] font-semibold tracking-[-0.04em] text-black">
                  {REFUND_PROCESSING_TIME}
                </p>

                <p className="mt-2 text-[14px] leading-7 text-black/55">
                  This period begins after written refund approval and receipt
                  of all required payment details.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="client-delays"
              number="13"
              icon={AlertCircle}
              title="Client delays, inactivity and abandoned projects"
            >
              <PolicyParagraph>
                Projects may be delayed when the client does not provide
                content, credentials, feedback, approvals, payment or other
                required information.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Client-caused delays may automatically extend the delivery schedule.",
                  "Reserved team capacity and completed work remain chargeable during the delay.",
                  "Payments do not become refundable merely because the client has stopped responding.",
                  "A prolonged inactive project may be paused, archived or rescheduled.",
                  "Restarting an archived project may require revised timelines and additional charges.",
                  "Third-party subscriptions and licences may continue to incur charges during inactivity.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                BrainADZ may treat a project as inactive or abandoned after
                reasonable follow-ups remain unanswered. Any restart will
                depend on team availability and the current project
                requirements.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="service-termination"
              number="14"
              icon={Ban}
              title="Cancellation or termination by BrainADZ"
            >
              <PolicyParagraph>
                BrainADZ may pause or terminate an engagement where continuing
                the service creates a legal, payment, security, reputational or
                operational concern.
              </PolicyParagraph>

              <PolicyList
                items={[
                  "Invoices remain unpaid beyond the applicable due date.",
                  "The client requests unlawful, fraudulent, misleading or prohibited activity.",
                  "Required cooperation or information is repeatedly withheld.",
                  "The client materially breaches the approved agreement or platform policies.",
                  "There is abusive, threatening or inappropriate conduct toward our team.",
                  "The project creates an unexpected legal, technical or security risk.",
                  "BrainADZ is unable to continue the service because of circumstances beyond reasonable control.",
                ]}
              />

              <PolicyParagraph className="mt-7">
                If BrainADZ terminates a service without client fault and before
                completing the paid scope, any possible refund will be
                calculated after deducting completed work and non-recoverable
                commitments.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="chargebacks"
              number="15"
              icon={ShieldCheck}
              title="Chargebacks and payment disputes"
            >
              <PolicyParagraph>
                Before filing a chargeback or payment dispute, the client should
                contact BrainADZ and allow a reasonable opportunity to review
                the matter.
              </PolicyParagraph>

              <PolicyParagraph>
                A chargeback submitted for legitimately approved and delivered
                work may be contested using proposals, approvals, invoices,
                communications, campaign records and delivery evidence.
              </PolicyParagraph>

              <PolicyParagraph>
                Fraudulent, misleading or abusive chargebacks may result in
                immediate suspension of services, withdrawal of access and
                recovery action for unpaid amounts and reasonable associated
                costs.
              </PolicyParagraph>

              <PolicyParagraph>
                Raising a valid concern or requesting a review in good faith
                will not affect the client&apos;s right to use available legal
                or contractual remedies.
              </PolicyParagraph>
            </PolicySection>

            <PolicySection
              id="disputes-contact"
              number="16"
              icon={Scale}
              title="Refund disputes and contact information"
            >
              <PolicyParagraph>
                If you disagree with a refund decision, you may request a second
                review by providing the relevant proposal, invoice, payment
                proof and the specific reason for disagreement.
              </PolicyParagraph>

              <PolicyParagraph>
                Both parties should first attempt to resolve the matter through
                good-faith discussion and a review of the approved scope,
                completed work and payment records.
              </PolicyParagraph>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <a
                  href={`mailto:${REFUND_EMAIL}`}
                  className="group rounded-[12px] border border-black/10 bg-[#fbfbfb] p-5 transition hover:border-[#E1122B]/40 hover:bg-[#fff8f8]"
                >
                  <ReceiptIndianRupee className="h-6 w-6 text-[#E1122B]" />

                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.15em] text-black/38">
                    Refund and accounts email
                  </p>

                  <p className="mt-2 break-all text-[16px] font-semibold text-black transition group-hover:text-[#E1122B]">
                    {REFUND_EMAIL}
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
                    Submit a payment query
                  </p>
                </Link>
              </div>

              <div className="mt-5 rounded-[12px] border border-black/10 bg-white p-5">
                <p className="text-[14px] leading-7 text-black/56">
                  Include your company name, invoice reference, transaction
                  number and a clear description of the cancellation or refund
                  issue so our team can review it efficiently.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="policy-updates"
              number="17"
              icon={RefreshCcw}
              title="Changes to this policy"
            >
              <PolicyParagraph>
                BrainADZ may update this policy when its services, payment
                methods, business practices, third-party platforms or legal
                obligations change.
              </PolicyParagraph>

              <PolicyParagraph>
                The latest version will be published on this page with a revised
                &quot;Last updated&quot; date.
              </PolicyParagraph>

              <PolicyParagraph>
                Policy updates will not automatically replace specific refund
                or cancellation terms contained in an existing signed agreement
                unless the parties agree to the change.
              </PolicyParagraph>
            </PolicySection>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReturnPolicyNavigation() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <SectionLabel>Policy contents</SectionLabel>

      <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em]">
        Find the relevant refund condition.
      </h2>

      <div className="mt-7 max-h-[640px] overflow-y-auto rounded-[14px] border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
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
        <ReceiptIndianRupee
          className="h-7 w-7 text-[#E1122B]"
          strokeWidth={1.7}
        />

        <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.03em]">
          Have a payment concern?
        </h3>

        <p className="mt-3 text-[14px] leading-6 text-white/58">
          Contact our team with your invoice and transaction details for a
          proper review.
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

function ReturnPolicyCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[18px] bg-black px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -right-28 -top-32 h-[380px] w-[380px] rounded-full bg-[#E1122B]/25 blur-[110px]" />
          <div className="absolute -bottom-44 left-[25%] h-[340px] w-[340px] rounded-full bg-[#E1122B]/15 blur-[120px]" />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Need payment assistance?</SectionLabel>

              <h2 className="mt-5 max-w-[920px] text-[38px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[48px] lg:text-[58px]">
                Share your invoice details with our accounts team.
              </h2>

              <p className="mt-6 max-w-[770px] text-[16px] leading-8 text-white/60">
                Contact BrainADZ regarding a duplicate payment, cancellation
                request, billing concern or refund eligibility review.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-14 shrink-0 items-center justify-center gap-5 rounded-full bg-[#E1122B] px-7 text-[13px] font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Submit your request
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