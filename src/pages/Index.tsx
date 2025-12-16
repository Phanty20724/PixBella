import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <LogoMarquee />
      <ProblemSection />
      <HowItWorksSection />
      <DifferentiationSection />
      <StatsSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
