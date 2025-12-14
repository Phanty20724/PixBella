import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-rich/5 via-transparent to-transparent" />
      </div>

      {/* Floating orbs for depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-rich/10 blur-3xl"
        />
        <motion.div 
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-purple-medium/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-medium text-purple-rich mb-8 px-4 py-2 rounded-full bg-purple-pale/50 border border-purple-light/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-rich opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-rich"></span>
              </span>
              AI Fashion Technology
            </span>
          </motion.div>

          {/* Headline - Massive & Editorial */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-foreground leading-[0.95] mb-8"
          >
            Studio-quality
            <br />
            fashion imagery.
            <span className="block mt-2 text-gradient">Generated, not photographed.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            Replace traditional photoshoots with hyper-realistic AI-generated model images. 
            Faster, more accessible, built for commerce.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Generate Studio-Quality Images
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              See the Workflow
            </Button>
          </motion.div>

          {/* Trust indicator - Premium styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
              Trusted by growing fashion brands
            </p>
            <div className="flex items-center gap-10">
              {/* Premium brand placeholder logos */}
              <div className="flex items-center gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="h-8 w-20 rounded bg-gradient-to-r from-muted/80 to-muted/40 flex items-center justify-center"
                  >
                    <div className="h-4 w-12 rounded bg-muted-foreground/20" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-semibold text-foreground">1,000+</span>
                <span className="text-sm text-muted-foreground">images<br/>generated daily</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-semibold text-foreground">50+</span>
                <span className="text-sm text-muted-foreground">brands<br/>using PixBella</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-muted-foreground/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;