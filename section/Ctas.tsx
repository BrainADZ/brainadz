import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section className="bg-black px-5 py-14 text-white sm:px-8 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#020522] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/home-roadmap-cta.webp')",
          }}
        >
          <div className="relative z-10 flex min-h-[360px] items-center">
            <div className="max-w-[650px] px-7 py-10 sm:px-10 lg:px-12">
              <h2 className="text-[30px] font-normal leading-[1.32] tracking-[-0.02em] sm:text-[38px] lg:text-[26px]">
               Ready to turn your brand into a stronger {" "}
                digital growth system?
              </h2>

              <p className="mt-7 max-w-[570px] text-[15px] font-semibold leading-7 text-white sm:text-[14px]">
               From digital marketing and performance campaigns to creative content, websites, SEO, and automation — BrainADZ Marketing helps you build visibility, generate leads, and scale with a clear growth roadmap.
              </p>

              <Link
                href="/contact"
                className="mt-11 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-[13px] font-bold text-black shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition hover:bg-[#eaf6ff]"
              >
                Consult Our Experts for Growth Roadmap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
