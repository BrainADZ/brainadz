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
    image: "/teams/Preeti-J.webp",
    linkedin: "#",
  },
  {
    name: "Aastha Singh",
    designation: "Sr. Business Development Manager",
    image: "/teams/Aastha (2).webp",
    linkedin: "https://www.linkedin.com/in/aastha-singh-78a531211/",
  },
  {
    name: "Ayushi Baliyan",
    designation: "Business Development Manager",
    image: "/teams/Ayushi.webp",
    linkedin: "https://www.linkedin.com/in/ayushi-baliyan-61b607283?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Pooja Paswan",
    designation: "Business Development Manager",
    image: "/teams/Pooja.webp",
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
    name: "Roshan Kumar",
    designation: "Creative Head",
    image: "/teams/Roshan.webp",
    linkedin: "#",
  },
  {
    name: "Mayur Sharma",
    designation: "Marketing Head",
    image: "/teams/Mayur.webp",
    linkedin: "#",
  },
  {
    name: "Vinay Rathour",
    designation: "IT Head",
    image: "/teams/Vinay.webp",
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

const TEAMS_PAGE_CORE_TEAM: TeamMember[] = [
  ...CORE_TEAM,
  {
    name: "Jai Karan",
    designation: "Social Media Manager",
    image: "/teams/Jai.webp",
    linkedin: "https://www.linkedin.com/in/jai-karan-071033268/",
  },
  {
    name: "Preeti Yadav",
    designation: "Social Media Executive",
    image: "/teams/Preeti.webp",
    linkedin: "https://www.linkedin.com/in/preeti-yadav-47067819a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Deepak Awasthi",
    designation: "SEO Manager",
    image: "/teams/Deepak.webp",
    linkedin: "#",
  },
  {
    name: "Aashish Saini",
    designation: "Sr. Graphic Designer",
    image: "/teams/Aashish.webp",
    linkedin: "#",
  },
  {
    name: "Chirag Qureshi",
    designation: "Sr. Graphic Designer",
    image: "/teams/Chirag.webp",
    linkedin: "#",
  },
  {
    name: "Akshansh",
    designation: "Sr. Video Editor",
    image: "/teams/Akshansh.webp",
    linkedin: "https://www.linkedin.com/in/akshansh-raw-00b75033a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Loveneet Pawar",
    designation: "SEO Executive",
    image: "/teams/Loveneet.webp",
    linkedin: "https://www.linkedin.com/in/loveneet-pawar-9a9aaa301/",
  },
  {
    name: "Komal Kushwaha",
    designation: "Sr. Graphic Designer",
    image: "/teams/Komal.webp",
    linkedin: "#",
  },
  {
    name: "Virendar",
    designation: "Sr. Graphic Designer",
    image: "/teams/Virendar.webp",
    linkedin: "#",
  },
  {
    name: "K",
    designation: "Graphic Designer",
    image: "/teams/.webp",
    linkedin: "#",
  },
  // {
  //   name: "J",
  //   designation: "Marketing Executive",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "I",
  //   designation: "Software Developer",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "H",
  //   designation: "SEO Executive",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "G",
  //   designation: "Senior SEO Executive",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "F",
  //   designation: "Senior Graphic Designer",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "E",
  //   designation: "Senior Graphic Designer",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "D",
  //   designation: "Senior Graphic Designer",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "C",
  //   designation: "Senior Graphic Designer",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "B",
  //   designation: "Social Media Executive",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
  // {
  //   name: "A",
  //   designation: "Video Editor",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },
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
  showFullCoreTeam?: boolean;
};

export default function TeamShowcaseSection({
  showFullCoreTeam = false,
}: TeamShowcaseSectionProps) {
  const teamGroups = showFullCoreTeam
    ? TEAM_GROUPS.map((group) =>
        group.label === "Core Team"
          ? { ...group, members: TEAMS_PAGE_CORE_TEAM }
          : group,
      )
    : TEAM_GROUPS;

  return (
    <section
      className=" bg-white text-black"
      aria-labelledby="team-showcase-title"
    >
      <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-12 py-16 md:py-20">
        <div className="space-y-20">
          {teamGroups.map((group) => (
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
          <TeamCard key={`${group.title}-${member.name}`} member={member} />
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
          target={
            member.linkedin && member.linkedin !== "#" ? "_blank" : undefined
          }
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
