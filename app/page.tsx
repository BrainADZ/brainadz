import AboutSection from "@/section/about";
import BrandLogosCarousel from "@/section/brandslogoSection";
import CeoDeskSection from "@/section/CeoDesks";
import CollageSection from "@/section/collageSection";
import ContactFormSection from "@/section/contact";
import ContactCtaSection from "@/section/Ctas";
import FaqSection from "@/section/faqs";
import Hero from "@/section/hero";
import ImpactStartsHereSection from "@/section/ImpactStart";
import GlobalPresenceSection from "@/section/Maps";
import PillarsSection from "@/section/pillars";
import ResultStrip from "@/section/resultStrip";
import ServicesCardsSection from "@/section/serviceSection";
import TechExpertiseSection from "@/section/Technologies";
import TestimonialSection from "@/section/Testimonials";
import WhyDynamicSection from "@/section/whyDynamicSection";

export default function Home() {
  return (
    <div>
      <main >
        {/* <Hero/> */}
        <Hero/>
        <AboutSection/>
        <ResultStrip/>
        <ServicesCardsSection/>
        <BrandLogosCarousel />
        <WhyDynamicSection/>
        <TechExpertiseSection/>
        <ContactCtaSection/>
        <ImpactStartsHereSection/>
        <CeoDeskSection/>
        <PillarsSection/>
        <CollageSection/>
        <TestimonialSection/>
        <FaqSection/>
        <ContactFormSection/>
        <GlobalPresenceSection />
      </main>
    </div>
  );
}
