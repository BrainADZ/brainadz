/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type TeamMember = {
  name: string;
  designation: string;
  image: string;
};

type TeamGroup = {
  label: string;
  title: string;
  description: string;
  members: TeamMember[];
};

const PROJECT_MANAGERS: TeamMember[] = [
  {
    name: "Roshan Kumar",
    designation: "Creative Head",
    image: "/teams/thumbs/creativehead.webp",
  },
  {
    name: "Mayur Sharma",
    designation: "Marketing Head",
    image: "/teams/thumbs/mh.webp",
  },
  {
    name: "Vinay Rathor",
    designation: "IT Head",
    image: "/teams/thumbs/ithead.webp",
  },
  {
    name: "Aastha Singh",
    designation: "Business Development Manager",
    image: "/teams/thumbs/bdm.webp",
  },
  {
    name: "Deepak Awasthi",
    designation: "SEO Manager",
    image: "/teams/thumbs/seo.webp",
  },
  {
    name: "Jai Karan",
    designation: "Social Media Manager",
    image: "/teams/thumbs/smm.webp",
  },
  {
    name: "Shivangi",
    designation: "Ads Manager",
    image: "/teams/thumbs/seoe.webp",
  },
];

const CORE_TEAM: TeamMember[] = [
  {
    name: "Shivam Goyal",
    designation: "Data Manager",
    image: "/teams/thumbs/seo.webp",
  },
  {
    name: "Rishabh Pratap",
    designation: "Software Developer",
    image: "/teams/thumbs/sd.webp",
  },
  {
    name: "Nisha Kushwaha",
    designation: "Social Media Manager",
    image: "/teams/thumbs/smm.webp",
  },
  {
    name: "A. Rahman",
    designation: "Sr. Graphic Designer",
    image: "/teams/thumbs/sgd3.webp",
  },
  {
    name: "Virendar Kumar",
    designation: "Sr. Graphic Designer",
    image: "/teams/thumbs/sgd4.webp",
  },
  {
    name: "Aashish Saini",
    designation: "Sr. Graphic Designer",
    image: "/teams/thumbs/sgd.webp",
  },
  {
    name: "Chirag Quareshi",
    designation: "Sr. Graphic Designer",
    image: "/teams/thumbs/sgd2.webp",
  },
  {
    name: "Komal Kushwaha",
    designation: "Graphic Designer",
    image: "/teams/thumbs/gd1.webp",
  },
  {
    name: "Akshansa Raw",
    designation: "Sr. Video Editor",
    image: "/teams/thumbs/ve.webp",
  },
  {
    name: "Lovneet Pawar",
    designation: "Social Media Executive",
    image: "/teams/thumbs/smo.webp",
  },
  {
    name: "Mithun Rai",
    designation: "Sr. Accountant",
    image: "/teams/thumbs/seo.webp",
  },
  {
    name: "Simran",
    designation: "Accountant",
    image: "/teams/thumbs/gd2.webp",
  },
];

const TEAM_GROUPS: TeamGroup[] = [
  {
    label: "Project Management",
    title: "Meet Our Project Managers",
    description:
      "The people who keep strategy, timelines, communication, and delivery moving with clarity across every active engagement.",
    members: PROJECT_MANAGERS,
  },
  {
    label: "Core Team",
    title: "Meet Our Core Team",
    description:
      "Specialists across creative, development, SEO, social, media, data, and operations who turn plans into consistent daily execution.",
    members: CORE_TEAM,
  },
];

type TeamShowcaseSectionProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

export default function TeamShowcaseSection({
  ctaHref = "/teams",
  ctaLabel = "View Full Team",
}: TeamShowcaseSectionProps) {
  return (
    <section
      className="border-y border-white/10 bg-black text-white"
      aria-labelledby="team-showcase-title"
    >
      <div className="mx-auto max-w-[1700px] px-5 py-16 sm:px-8 md:py-20">
        <header className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
              People Of BrainADZ
            </p>
            <h2
              id="team-showcase-title"
              className="mt-3 max-w-[760px] text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[56px]"
            >
              Teams That Plan, Build, And Deliver
            </h2>
          </div>

          <Link
            href={ctaHref}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 text-[12px] font-semibold text-white transition-colors hover:border-[#1467f5] hover:bg-[#1467f5]"
          >
            {ctaLabel}
          </Link>
        </header>

        <div className="space-y-20">
          {TEAM_GROUPS.map((group) => (
            <TeamGroupBlock key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamGroupBlock({ group }: { group: TeamGroup }) {
  return (
    <section className="[contain-intrinsic-size:auto_900px] [content-visibility:auto]">
      <header className="mx-auto mb-10 max-w-[820px] text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/45">
          {group.label}
        </p>
        <h3 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.035em] sm:text-[44px]">
          {group.title}
        </h3>
        <p className="mx-auto mt-5 max-w-[720px] text-[15px] font-medium leading-7 text-white/65">
          {group.description}
        </p>
      </header>

      <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {group.members.map((member) => (
          <TeamCard key={`${group.title}-${member.name}`} member={member} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article>
      <div className="relative aspect-square overflow-hidden rounded-[10px] border border-white/10 bg-[#151515]">
        <img
          src={member.image}
          alt={`${member.name} - ${member.designation}`}
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="block h-full w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/35 to-transparent" />
      </div>

      <div className="pt-4">
        <h4 className="text-[17px] font-semibold leading-tight">
          {member.name}
        </h4>
        <p className="mt-1 text-[14px] font-medium leading-5 text-white/50">
          {member.designation}
        </p>
      </div>
    </article>
  );
}
