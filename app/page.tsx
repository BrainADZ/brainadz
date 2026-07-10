import AboutSection from "@/section/about";
import BrandLogosCarousel from "@/section/brandslogoSection";
import CaseStudiesSection from "@/section/caseStudies";
import FounderDeskSameToSame from "@/section/CeoDesks";
import ContactCtaSection from "@/section/Ctas";
import FaqSection from "@/section/faqs";
import Hero from "@/section/hero";
import ImpactStartsHereSection from "@/section/ImpactStart";
import GlobalPresenceSection from "@/section/Maps";
import ServicesCardsSection from "@/section/serviceSection";
import TeamShowcaseSection from "@/section/teamShowcase";
import TestimonialSection from "@/section/Testimonials";

export default function Home() {
  return (
    <div>
      <main >
        {/* <Hero/> */}
        <Hero/>
        <AboutSection/>
        <FounderDeskSameToSame/>
        <ServicesCardsSection/>
        <CaseStudiesSection/>
        <ImpactStartsHereSection/>
        <BrandLogosCarousel />
        <ContactCtaSection/>
        <TeamShowcaseSection/>
        <TestimonialSection/>
        <FaqSection/>
        <GlobalPresenceSection />
      </main>
    </div>
  );
}
