/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  designation: string;
  image: string;
  linkedin?: string;
};

type TeamGroup = {
  label: string;
  title: string;
  // description: string;
  members: TeamMember[];
};

const PROJECT_MANAGERS: TeamMember[] = [
  {
    name: "Preeti Jaiswal",
    designation: "CEO",
    image: "/teams/darpan-sharma.webp",
    linkedin: "#",
  },
  {
    name: "Aastha Sharma",
    designation: "Sr. Business Development Manager",
    image: "/teams/Aastha.webp",
    linkedin: "#",
  },
  {
    name: "Ayushi Baliyan",
    designation: "Business Development Manager",
    image: "/teams/Ayushi.webp",
    linkedin: "#",
  },
  {
    name: "Preeti Chaudhary",
    designation: "Business Development Manager",
    image: "/teams/Kavish.webp",
    linkedin: "#",
  },
  {
    name: "Sharthak Raina",
    designation: "Business Development Manager",
    image: "/teams/malika.webp",
    linkedin: "#",
  },

];

const CORE_TEAM: TeamMember[] = [
  {
    name: "Raushan Kumar",
    designation: "Creative Head",
    image: "/teams/Deepak.webp",
    linkedin: "#",
  },
  {
    name: "Mayur Sharma",
    designation: "Marketing Head",
    image: "/teams/Rishabh.webp",
    linkedin: "#",
  },
  {
    name: "Vinay Rathour",
    designation: "IT Head",
    image: "/teams/Aashish.webp",
    linkedin: "#",
  },
  {
    name: "Rishabh Pratap",
    designation: "Sr. Software Developer",
    image: "/teams/Rishabh.webp",
    linkedin: "#",
  },
  {
    name: "Nisha Kushwaha",
    designation: "Social Media Manager",
    image: "/teams/Nisha.webp",
    linkedin: "#",
  },
];

const TEAM_GROUPS: TeamGroup[] = [
  {
    label: "Project Management",
    title: "Meet Our Project Managers",

    members: PROJECT_MANAGERS,
  },
  {
    label: "Core Team",
    title: "Meet Our Core Team",

    members: CORE_TEAM,
  },
];

type TeamShowcaseSectionProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

export default function TeamShowcaseSection({

}: TeamShowcaseSectionProps) {
  return (
    <section
      className=" bg-white text-black"
      aria-labelledby="team-showcase-title"
    >
      <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-12 py-16 md:py-20">


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
          <div className="flex justify-center items-center gap-3">
            <span className="h-0.5 w-8 bg-[#E1122B]" />

            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/50">
              {group.label}
            </p>
          </div>

        <h3 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.035em] text-black sm:text-[44px]">
          {group.title}
        </h3>

      </header>

      <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {group.members.map((member) => (
          <TeamCard
            key={`${group.title}-${member.name}`}
            member={member}
          />
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-[10px] border border-black/10 bg-[#f3f3f3]">
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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/30 to-transparent" />

        <Link
          href={member.linkedin || "#"}
          target={member.linkedin && member.linkedin !== "#" ? "_blank" : undefined}
          rel={
            member.linkedin && member.linkedin !== "#"
              ? "noopener noreferrer"
              : undefined
          }
          aria-label={`${member.name} on LinkedIn`}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 -translate-y-2 place-items-center rounded-full bg-white text-black opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#193175] hover:text-white"
        >
          <Linkedin className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      </div>

      <div className="pt-4">
        <h4 className="inline-block text-[17px] font-semibold leading-tight text-black">
          <span className="bg-[linear-gradient(#E1122B,#E1122B)] bg-size-[0%_2px] bg-bottom-left bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-size-[100%_2px]">
            {member.name}
          </span>
        </h4>

        <p className="mt-1 text-[14px] font-medium leading-5 text-black/50">
          {member.designation}
        </p>
      </div>
    </article>
  );
}
