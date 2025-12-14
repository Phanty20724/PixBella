import { Upload, User, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload your product",
    description: "A simple product image on any background. No studio setup required.",
  },
  {
    number: "02",
    icon: User,
    title: "Select a model",
    description: "Choose from our diverse library or upload reference images for consistency.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Generate imagery",
    description: "Receive studio-quality fashion visuals in minutes. Ready to sell.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 lg:py-40 relative overflow-hidden bg-foreground text-background">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-rich/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-medium/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20 lg:mb-28"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-light mb-6 px-4 py-2 rounded-full bg-purple-rich/20 border border-purple-light/20">
            <Sparkles className="w-4 h-4" />
            PixBella Studio
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-background mb-8 leading-[1.1]">
            Three steps.
            <span className="block text-neutral-400">No complexity.</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Our workflow is designed for operators, not photographers. 
            Upload, select, generate.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-8 lg:gap-6 mb-20 lg:mb-28"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-20 items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-purple-light" />
                  </div>
                </div>
              )}
              
              <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-neutral-800/50 border border-neutral-700/50 hover:border-purple-rich/30 transition-all duration-500 hover:bg-neutral-800/80">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-purple-rich/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Step number & icon */}
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-6xl lg:text-7xl font-semibold text-neutral-700 group-hover:text-neutral-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-rich to-purple-deep flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-background" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-background mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual representation - Premium glass design */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-4xl bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 p-10 lg:p-20 overflow-hidden border border-neutral-700/50">
            {/* Background mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--purple-rich)/0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--purple-medium)/0.1),transparent_50%)]" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
              {/* Input boxes - Glass morphic */}
              <div className="flex gap-6 lg:gap-10">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="w-36 h-48 lg:w-44 lg:h-56 rounded-3xl bg-neutral-700/30 border border-neutral-600/50 flex flex-col items-center justify-center gap-4 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-neutral-600/50 flex items-center justify-center">
                    <Upload className="w-7 h-7 text-neutral-300" />
                  </div>
                  <span className="text-sm text-neutral-400 font-medium">Product Image</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="w-36 h-48 lg:w-44 lg:h-56 rounded-3xl bg-neutral-700/30 border border-neutral-600/50 flex flex-col items-center justify-center gap-4 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-neutral-600/50 flex items-center justify-center">
                    <User className="w-7 h-7 text-neutral-300" />
                  </div>
                  <span className="text-sm text-neutral-400 font-medium">Model Reference</span>
                </motion.div>
              </div>

              {/* Arrow with glow */}
              <div className="flex items-center justify-center">
                <motion.div 
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-rich to-purple-deep flex items-center justify-center rotate-90 lg:rotate-0 shadow-glow"
                >
                  <ArrowRight className="w-8 h-8 text-background" />
                </motion.div>
              </div>

              {/* Output - Premium result card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative w-52 h-72 lg:w-64 lg:h-80 rounded-3xl bg-gradient-to-br from-purple-rich via-purple-deep to-neutral-900 flex items-center justify-center overflow-hidden shadow-2xl"
              >
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-purple-light/30" />
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-light/20 to-transparent rounded-3xl blur-xl opacity-50" />
                
                <div className="relative text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-background/10 backdrop-blur flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-light" />
                  </div>
                  <span className="text-lg font-medium text-background block mb-2">AI Generated</span>
                  <span className="text-sm text-purple-light/80">Studio-Quality Output</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;