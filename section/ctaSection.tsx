"use client";

export default function FooterCta() {
  return (
    <section className=" bg-white">
      <div className="max-w-full mx-auto ">
        <div className="relative overflow-hidden">

          {/* Background Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #006f75 0%, #00AAB7 50%, #008a93 100%)",
            }}
          />

          {/* Geometry Overlay */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 6px, transparent 6px, transparent 14px)",
            }}
          />

          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-8 items-center px-10 py-14 max-w-7xl mx-auto">

            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Let’s Grow Your Business
                <br />
                With Smart Digital Marketing
              </h2>

              <p className="mt-4 text-white/80 max-w-md">
                Ready to scale? Talk to our experts and discover strategies that
                actually convert.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col md:items-end gap-4">
              <div className="text-white text-sm">
                Speak with our marketing expert
              </div>

              <div className="text-white font-semibold text-lg flex items-center gap-2">
                🇮🇳 +91 8826 916 476
              </div>

              <button className="mt-2 px-8 py-3 rounded-full bg-[#FFC44D] text-black font-semibold hover:opacity-90 transition flex items-center gap-2">
                Book Free Consultation
                <span>↗</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
