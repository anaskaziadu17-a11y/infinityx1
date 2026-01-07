import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import CountdownSection from "@/components/sections/CountdownSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyParticipateSection from "@/components/sections/WhyParticipateSection";
import DomainsSection from "@/components/sections/DomainsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PrizesSection from "@/components/sections/PrizesSection";
import FAQSection from "@/components/sections/FAQSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import RegisterSection from "@/components/sections/RegisterSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <CountdownSection />
      <AboutSection />
      <WhyParticipateSection />
      <DomainsSection />
      <TimelineSection />
      <PrizesSection />
      <FAQSection />
      <SponsorsSection />
      <RegisterSection />
      <FooterSection />
    </main>
  );
};

export default Index;
