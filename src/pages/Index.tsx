import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/home/HeroSection";
import TrustBarSection from "@/components/home/TrustBarSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturedProgramsSection from "@/components/home/FeaturedProgramsSection";
import DestinationHighlightsSection from "@/components/home/DestinationHighlightsSection";
import EmployerBenefitsSection from "@/components/home/EmployerBenefitsSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import AccreditationSection from "@/components/home/AccreditationSection";
import UpcomingIntakesSection from "@/components/home/UpcomingIntakesSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import NewsSection from "@/components/home/NewsSection";
import FAQSection from "@/components/home/FAQSection";
import CTABannerSection from "@/components/home/CTABannerSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import VideoModal from "@/components/home/VideoModal";
import { useState } from "react";

const Index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection onVideoOpen={() => setIsVideoOpen(true)} />
      <TrustBarSection />
      <HowItWorksSection />
      <FeaturedProgramsSection />
      <DestinationHighlightsSection />
      <EmployerBenefitsSection />
      <SuccessStoriesSection />
      <AccreditationSection />
      <UpcomingIntakesSection />
      <ResourcesSection />
      <NewsSection />
      <FAQSection />
      <CTABannerSection />
      <ContactFormSection />
      <FooterSection />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
};

export default Index;
