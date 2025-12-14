import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <DifferentiationSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
