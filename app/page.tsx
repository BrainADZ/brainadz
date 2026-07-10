import AboutSection from "@/section/about";
import BrandLogosCarousel from "@/section/brandslogoSection";
import CaseStudiesSection from "@/section/caseStudies";
import FounderDeskSameToSame from "@/section/CeoDesks";
import CompanyGallerySection from "@/section/companyGallery";
import ContactCtaSection from "@/section/Ctas";
import FaqSection from "@/section/faqs";
import Hero from "@/section/hero";
import ImpactStartsHereSection from "@/section/ImpactStart";
import GlobalPresenceSection from "@/section/Maps";
import ServicesCardsSection from "@/section/serviceSection";
import TeamShowcaseSection from "@/section/teamShowcase";
import TechExpertiseSection from "@/section/Technologies";
import TestimonialSection from "@/section/Testimonials";

export default function Home() {
  return (
    <div>
      <main >
        {/* <Hero/> */}
        <Hero/>
        <ServicesCardsSection/>
        <CaseStudiesSection/>
        <AboutSection/>
        <ImpactStartsHereSection/>
        <BrandLogosCarousel />
        <ContactCtaSection/>
        {/* <WhyDynamicSection/> */}
        {/* <TechExpertiseSection/> */}
        <FounderDeskSameToSame/>
        <TeamShowcaseSection/>
        {/* <CompanyGallerySection/> */}
        <TestimonialSection/>
        <FaqSection/>
        <GlobalPresenceSection />
      </main>
    </div>
  );
}
