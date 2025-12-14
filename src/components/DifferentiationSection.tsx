import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  "Understands clothing structure and fit",
  "Respects natural fabric drape and movement",
  "Built specifically for product commerce",
  "Optimized for diverse global markets",
  "Consistent output quality at scale",
  "No creative interpretation—just accuracy",
];

const genericProblems = [
  "Treats clothing like any other object",
  "Ignores fit, drape, and fashion nuances",
  "Made for creativity, not commerce",
  "Generic outputs that don't sell",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const DifferentiationSection = () => {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-purple-rich mb-4 block uppercase tracking-wider">
              Why PixBella
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-8 leading-[1.1]">
              Generic AI tools don't understand
              <span className="text-gradient"> fashion.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Most image generators treat clothing like any other object. 
              They don't understand fit, drape, or the nuances that make fashion photography sell.
            </p>
            
            {/* Generic AI problems */}
            <div className="p-8 rounded-3xl bg-destructive/5 border border-destructive/10 mb-8">
              <h4 className="text-sm font-semibold text-destructive/80 mb-6 uppercase tracking-wider">
                Generic AI Problems
              </h4>
              <ul className="space-y-4">
                {genericProblems.map((problem) => (
                  <li key={problem} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive/60" />
                    </div>
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-xl text-foreground font-medium leading-relaxed">
              PixBella is trained for commerce, not creativity. 
              <span className="text-muted-foreground"> Every output is designed to convert browsers into buyers.</span>
            </p>
          </motion.div>

          {/* Right content - Features with premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="sticky top-32">
              <div className="relative p-10 lg:p-14 rounded-4xl bg-gradient-to-br from-purple-ghost via-background to-purple-pale/30 border border-purple-light/20 overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-rich/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-medium/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-rich/10 border border-purple-rich/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-purple-rich animate-pulse" />
                    <span className="text-sm font-medium text-purple-rich">Built Different</span>
                  </div>
                  
                  <motion.ul 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    {differentiators.map((item) => (
                      <motion.li 
                        key={item} 
                        variants={itemVariants}
                        className="flex items-start gap-5 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-rich to-purple-deep flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                          <Check className="w-5 h-5 text-background" />
                        </div>
                        <span className="text-lg text-foreground font-medium leading-relaxed pt-0.5">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;