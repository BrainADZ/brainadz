/* eslint-disable @next/next/no-img-element */
"use client";

export default function GlobalPresenceSection() {
  return (
    <section className="w-full bg-[#F3F3F3] py-4 md:py-8">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 text-center">
        
        {/* Heading */}
        <h2 className="leading-tight">
          <span className="block text-3xl md:text-6xl font-light text-[#3F3F3F] font-sans">
            Working with clients
          </span>
          <span className="block text-4xl md:text-6xl font-bold text-[#B7B800] mt-2">
            Across the globe
          </span>
        </h2>

        {/* Map Image */}
        <div className="mt-2">
          <img
            src="/map.png"   // apna map image path yaha daalo
            alt="Global Clients Map"
            className="mx-auto w-full max-w-[1200px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
