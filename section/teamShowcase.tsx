/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

type TeamMember = {
  name: string;
  designation: string;
  image: string;
  linkedin?: string;
  email?: string;
  phone?: string;
};

type TeamGroup = {
  label: string;
  title: string;
  members: TeamMember[];
};

const PROJECT_MANAGERS: TeamMember[] = [
  {
    name: "Aastha Singh",
    designation: "Sr. Business Development Manager",
    image: "/teams/Aastha.webp",
    linkedin: "https://www.linkedin.com/in/aastha-singh-78a531211/",
    phone: "+91 92116 03152", // Replace with actual number
  },
  {
    name: "Ayushi Baliyan",
    designation: "Business Development Manager",
    image: "/teams/Ayushi.webp",
    linkedin: "https://www.linkedin.com/in/ayushi-baliyan-61b607283?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    phone: "+91 95602 73794", // Replace with actual number
  },
  {
    name: "Pooja Paswan",
    designation: "Business Development Manager",
    image: "/teams/Pooja.webp",
    linkedin: "#",
    phone: "+91 70489 15802", // Replace with actual number
  },
  {
    name: "Rakesh Kumar",
    designation: "Sr. Business Development Manager",
    image: "/teams/Rakesh.webp",
    linkedin: "#",
    phone: "+91 99110 78143", // Replace with actual number
  },
  {
    name: "Sharthak Raina",
    designation: "Business Development Manager",
    image: "/teams/Sharthak.webp",
    linkedin: "#",
    phone: "+91 92112 93332", // Replace with actual number
  },
];

const CORE_TEAM: TeamMember[] = [
  {
    name: "Roshan Kumar",
    designation: "Creative Head",
    image: "/teams/Roshan.webp",
    linkedin: "https://www.linkedin.com/in/roshan-kumar-96626816b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Mayur Sharma",
    designation: "Marketing Head",
    image: "/teams/Mayur.webp",
    linkedin: "https://www.linkedin.com/in/mayur-sharma259/",
  },
  {
    name: "Vinay Rathour",
    designation: "IT Head",
    image: "/teams/Vinay.webp",
    linkedin: "https://www.linkedin.com/in/vinay-rathod-b4042671/",
  },
  {
    name: "Rishabh Pratap",
    designation: "Sr. Software Developer",
    image: "/teams/Rishabh.webp",
    linkedin: "https://www.linkedin.com/in/rishabh-pratap-445b761a2/",
  },
  {
    name: "Nisha Kushwaha",
    designation: "Social Media Manager",
    image: "/teams/Nisha.webp",
    linkedin: "https://www.linkedin.com/in/nisha-kushwaha-979107313/",
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
    linkedin:
      "https://www.linkedin.com/in/preeti-yadav-47067819a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Deepak Awasthi",
    designation: "SEO Manager",
    image: "/teams/Deepak.webp",
    linkedin: "https://in.linkedin.com/in/deepakawasthiseo",
  },
  {
    name: "Aashish Saini",
    designation: "Sr. Graphic Designer",
    image: "/teams/Aashish.webp",
    linkedin: "https://www.linkedin.com/in/aashish-saini-988a14251?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Chirag Qureshi",
    designation: "Sr. Graphic Designer",
    image: "/teams/Chirag.webp",
    linkedin: "https://www.linkedin.com/in/chirag-qureshi-5878b1215?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Akshansh",
    designation: "Sr. Video Editor",
    image: "/teams/Akshansh.webp",
    linkedin:
      "https://www.linkedin.com/in/akshansh-raw-00b75033a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
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
    linkedin: "https://www.linkedin.com/in/komal-kushwaha-43120b362?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Virendar",
    designation: "Sr. Graphic Designer",
    image: "/teams/Virendar.webp",
    linkedin: "#",
  },
  // {
  //   name: "K",
  //   designation: "Graphic Designer",
  //   image: "/teams/.webp",
  //   linkedin: "#",
  // },

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
          ? {
              ...group,
              members: TEAMS_PAGE_CORE_TEAM,
            }
          : group,
      )
    : TEAM_GROUPS;

  return (
    <section
      className="bg-white text-black"
      aria-labelledby="team-showcase-title"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-16 md:px-10 md:py-20 lg:px-12">
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
        <div className="flex items-center justify-center gap-3">
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
  const clickablePhone = member.phone?.replace(/[^\d+]/g, "");

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

        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
          {member.linkedin && member.linkedin !== "#" ? (
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="grid h-9 w-9 place-items-center rounded-full bg-white text-black shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:bg-[#E1122B] hover:text-white"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.8} />
            </Link>
          ) : (
            <span
              aria-label={`LinkedIn profile not added for ${member.name}`}
              title="LinkedIn profile not added"
              className="grid h-9 w-9 cursor-not-allowed place-items-center rounded-full bg-white/90 text-black/40 shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.8} />
            </span>
          )}

          <a
            href={member.email ? `mailto:${member.email}` : "mailto:"}
            aria-label={
              member.email
                ? `Email ${member.name} at ${member.email}`
                : `Email ${member.name}`
            }
            title={member.email || `Email ${member.name}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-white text-black shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:bg-[#E1122B] hover:text-white"
          >
            <Mail className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
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

        {member.phone && clickablePhone && (
          <a
            href={`tel:${clickablePhone}`}
            aria-label={`Call ${member.name} at ${member.phone}`}
            className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-black transition-colors duration-300 hover:text-[#E1122B]"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={2} />
            <span>{member.phone}</span>
          </a>
        )}
      </div>
    </article>
  );
}