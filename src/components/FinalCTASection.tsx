import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-deep via-purple-rich to-purple-medium" />
      
      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(270_60%_70%_/_0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(270_50%_60%_/_0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(270_40%_80%_/_0.2),transparent_70%)]" />
      </div>
      
      {/* Animated orbs */}
      <motion.div 
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-light/20 blur-3xl"
      />
      <motion.div 
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-medium/20 blur-3xl"
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm mb-10"
          >
            <Sparkles className="w-5 h-5 text-purple-light" />
            <span className="text-sm font-medium text-background/90">Join 500+ brands using PixBella</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-background mb-8 leading-[1.05]">
            Create better
            <span className="block text-gradient-light">fashion visuals.</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-background/70 mb-14 max-w-2xl mx-auto leading-relaxed">
            Join the brands replacing traditional photoshoots with intelligent image generation.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button 
              size="xl" 
              className="bg-background text-foreground hover:bg-background/90 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)] transition-all duration-300 group h-16 px-10 text-lg font-medium"
            >
              Generate Your First Image
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          {/* Trust text */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-sm text-background/50"
          >
            No credit card required. Start generating in under 2 minutes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;