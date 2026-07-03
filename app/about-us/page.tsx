import type { Metadata } from "next";
import AboutPageContent from "@/section/aboutPageContent";
import BrandLogosCarousel from "@/section/brandslogoSection";
import TestimonialSection from "@/section/Testimonials";

export const metadata: Metadata = {
  title: "About Us | BrainADZ Marketing",
  description:
    "About BrainADZ Marketing, an integrated team for growth strategy, digital marketing, creative media, web development, and performance execution.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutPageContent />
      <BrandLogosCarousel />
      <TestimonialSection/>
    </>
  );
}
