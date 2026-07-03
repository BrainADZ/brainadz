import type { Metadata } from "next";
import AboutPageContent from "@/section/aboutPageContent";
import BrandLogosCarousel from "@/section/brandslogoSection";

export const metadata: Metadata = {
  title: "Company Overview | BrainADZ Marketing",
  description:
    "Learn about BrainADZ Marketing, a strategy-led digital growth partner for marketing, creative, web, performance, and brand execution.",
};

export default function CompanyOverviewPage() {
  return (
    <>
      <AboutPageContent />
      <BrandLogosCarousel />
    </>
  );
}
