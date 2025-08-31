import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/home/HeroSection";
import TrustBarSection from "@/components/home/TrustBarSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedProgramsSection from "@/components/home/FeaturedProgramsSection";
import FeaturedProgramsSection2 from "@/components/home/NewFeaturedProgramsSection";
import DestinationHighlightsSection from "@/components/home/DestinationHighlightsSection";
import EmployerBenefitsSection from "@/components/home/EmployerBenefitsSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import AccreditationSection from "@/components/home/AccreditationSection";
import UpcomingIntakesSection from "@/components/home/UpcomingIntakesSection";
import NewsSection from "@/components/home/NewsSection";
import FAQSection from "@/components/home/FAQSection";
import CTABannerSection from "@/components/home/CTABannerSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import VideoModal from "@/components/home/VideoModal";
import { useState } from "react";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection onVideoOpen={() => setIsVideoOpen(true)} />
      <TrustBarSection />
      <HowItWorksSection />
      <FeaturedProgramsSection />
      {/* <FeaturedProgramsSection2 /> */}
      <DestinationHighlightsSection />
      <EmployerBenefitsSection />
      <SuccessStoriesSection />
      <AccreditationSection />
      <UpcomingIntakesSection />
      <NewsSection />
      <FAQSection />
      <TestimonialsSection />
      <CTABannerSection />
      <ContactFormSection />
      <FooterSection />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
};

export default Index;
