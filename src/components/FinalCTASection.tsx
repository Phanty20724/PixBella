import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-6">
            Create better fashion visuals.
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join the brands replacing traditional photoshoots with intelligent image generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Generate Your First Image
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
