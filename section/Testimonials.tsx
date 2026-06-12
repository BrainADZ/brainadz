import Image from "next/image";
import { Star } from "lucide-react";

const ACCENT = "#00AAB7";

type T = {
  id: number;
  text: string;
  name: string;
  location: string;
  initial: string;
  rating?: number;
};

const testimonials: T[] = [
  {
    id: 1,
    text: "We were struggling to get quality leads for our manufacturing business. Within 2 months of working with them, our inquiries increased significantly. Very systematic and result-focused team.",
    name: "Amit Jain",
    location: "Ahmedabad",
    initial: "A",
    rating: 5,
  },
  {
    id: 2,
    text: "Their SEO and paid ads strategy helped our RO business grow online. Reporting is transparent and communication is always clear.",
    name: "Priya Sharma",
    location: "Delhi NCR",
    initial: "P",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-[#F59E0B]"
          fill="#F59E0B"
          stroke="none"
        />
      ))}
    </div>
  );
}

function ReviewCard({ item }: { item: T }) {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="mb-4">
        <Stars count={item.rating ?? 5} />
      </div>

      <div className="absolute right-5 top-5 opacity-80">
        <Image src="/quote.png" alt="" width={32} height={32} />
      </div>

      <p className="flex-1 pr-10 text-[15px] leading-7 text-black/70">
        &quot;{item.text}&quot;
      </p>

      <div className="mt-6 flex items-center gap-3">
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-semibold text-white"
          style={{ backgroundColor: ACCENT }}
        >
          {item.initial}
        </div>

        <div className="min-w-0">
          <div className="truncate font-semibold text-black">{item.name}</div>
          <div className="truncate text-sm text-black/50">{item.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black/70">
            Pillars
          </p>

          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-black md:text-5xl">
            What <span className="font-extrabold">Our Happy Clients</span> Say
            About
            <br />
            <span className="font-extrabold">Working</span> With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0B4E8F 0%, #0A4F97 40%, #0A3F7D 100%)",
              }}
            />

            <div className="relative flex h-full flex-1 flex-col justify-between p-6">
              <div>
                <div className="flex items-center gap-3">
                  <Image src="/google.svg" alt="Google" width={40} height={40} />
                  <div className="text-4xl font-extrabold text-white">4.9</div>
                </div>

                <div className="mt-3 flex gap-1">
                  <Stars />
                </div>
              </div>

              <div>
                <p className="font-semibold leading-7 text-white/90">
                  We value your opinion: share your review with us
                </p>

                <button className="mt-6 w-fit rounded-full bg-[#FBBF24] px-6 py-3 font-semibold text-black transition hover:opacity-95">
                  Write Your Review Here -&gt;
                </button>
              </div>
            </div>
          </div>

          {testimonials.map((item) => (
            <ReviewCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
