import Image from "next/image";

export default function GlobalPresenceSection() {
  return (
    <section className="w-full bg-[#F3F3F3] py-4 md:py-8">
      <div className="mx-auto max-w-[1500px] px-4 text-center sm:px-6">
        <h2 className="leading-tight">
          <span className="block font-sans text-3xl font-light text-[#3F3F3F] md:text-6xl">
            Working with clients
          </span>
          <span className="mt-2 block text-4xl font-bold text-[#B7B800] md:text-6xl">
            Across the globe
          </span>
        </h2>

        <div className="mt-2">
          <Image
            src="/map.png"
            alt="Global Clients Map"
            width={1200}
            height={620}
            className="mx-auto h-auto w-full max-w-[1200px] object-contain"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>
      </div>
    </section>
  );
}
