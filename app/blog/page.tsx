import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import BlogSidebar from "./BlogSidebar";

export const metadata: Metadata = {
  title: "Blog & Insights | BrainADZ Marketing",
  description:
    "Explore practical insights from BrainADZ on social media, SEO, performance marketing, websites, content and digital growth.",
};

const BLOG_POSTS = [
  {
    id: "social-media",
    category: "Social Media",
    title: "How to Build a Social Media Strategy That Drives Real Growth",
    excerpt:
      "A practical framework for choosing the right platforms, planning useful content and connecting engagement with business outcomes.",
    image: "/portfolio/instagram/1.png",
    imageAlt: "Social media content and Instagram profile managed by BrainADZ",
    readTime: "6 min read",
  },
  {
    id: "performance-marketing",
    category: "Performance Marketing",
    title: "SEO or Paid Ads: Choosing the Right Growth Channel",
    excerpt:
      "Understand when organic visibility, paid acquisition or a balanced combination can create the strongest path to qualified leads.",
    image: "/perfomance.png",
    imageAlt: "Performance marketing strategy and growth visual",
    readTime: "7 min read",
  },
  {
    id: "web-design",
    category: "Web Design",
    title: "Seven Website Decisions That Improve Conversion Rates",
    excerpt:
      "From page hierarchy to calls to action, these focused decisions can make your website clearer, faster and easier to act on.",
    image: "/portfolio/web/1.png",
    imageAlt: "Conversion-focused website project by BrainADZ",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[500px] lg:min-h-[540px]">
        <Image
          src="/about/about.avif"
          alt="BrainADZ team workspace"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
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
            <span className="text-white">Blog</span>
          </nav>

          <h1 className="mt-7 max-w-[760px] text-[32px] font-normal leading-[1.04] text-white sm:text-[42px] lg:text-[52px]">
            Blog &amp; Insights
          </h1>

          <div className="mt-auto max-w-[700px] pb-6 sm:pb-10 lg:pb-12">
            <p className="text-[18px] font-normal leading-[1.5] text-white/88 sm:text-[21px] lg:text-[24px]">
              Practical thinking on digital marketing, creative execution and
              the decisions that help brands grow with more clarity.
            </p>

            <Link
              href="#articles"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-9 rounded-[4px] bg-[#1467f5] px-5 text-[15px] font-medium text-white transition hover:bg-[#0f56d6] sm:min-h-14 sm:px-6"
            >
              Explore articles
              <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="articles"
        className="scroll-mt-24 bg-[#080808] py-16 text-white sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 border-b border-white/12 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[13px] font-medium uppercase text-white/52">
                Latest insights
              </p>
              <h2 className="mt-4 max-w-[920px] text-[38px] font-normal leading-[1.08] text-white sm:text-[50px] lg:text-[60px]">
                Ideas you can put to work
              </h2>
            </div>
            <p className="max-w-[620px] text-[15px] leading-7 text-white/62 sm:text-[16px] sm:leading-8">
              Browse practical guidance across marketing, social media, search,
              paid campaigns, content and digital experiences.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:gap-10">
            <div className="grid content-start gap-5 md:grid-cols-2">
              {BLOG_POSTS.map((post) => (
                <article
                  id={post.id}
                  key={post.title}
                  className="group scroll-mt-28 overflow-hidden rounded-[6px] border border-white/12 bg-black transition-colors hover:border-[#1467f5]/70"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#101010]">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className={`transition-transform duration-500 group-hover:scale-[1.03] ${
                        post.image === "/perfomance.png"
                          ? "object-contain p-8"
                          : "object-cover object-top"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 38vw"
                    />
                  </div>

                  <div className="flex min-h-[285px] flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[12px] font-semibold uppercase text-[#6995ff]">
                        {post.category}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[12px] text-white/46">
                        <Clock3 className="h-4 w-4" strokeWidth={1.6} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[25px] font-medium leading-[1.2] text-white sm:text-[28px]">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-7 text-white/60 sm:text-[15px]">
                      {post.excerpt}
                    </p>

                    <p className="mt-auto pt-7 text-[13px] font-medium text-white/42">
                      Article coming soon
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
