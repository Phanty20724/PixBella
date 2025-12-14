import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              AI Fashion Technology
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-up opacity-0 delay-100">
            Studio-quality fashion imagery.
            <span className="block text-muted-foreground">Generated, not photographed.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-up opacity-0 delay-200">
            Replace traditional photoshoots with hyper-realistic AI-generated model images. 
            Faster, more accessible, built for commerce.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="xl">
              Generate Studio-Quality Images
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See the Workflow
            </Button>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 animate-fade-up opacity-0 delay-400">
            <p className="text-sm text-muted-foreground mb-4">
              Used by growing fashion brands
            </p>
            <div className="flex items-center gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">1,000+</span> images generated daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
