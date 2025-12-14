import { Clock, DollarSign, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Clock,
    title: "Weeks of coordination",
    description: "Traditional shoots require booking studios, models, photographers, and stylists.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: DollarSign,
    title: "Thousands per shoot",
    description: "A single catalog session can cost more than most products are worth.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Users,
    title: "Limited diversity",
    description: "Hiring models for every market and demographic is operationally painful.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: MapPin,
    title: "Location constraints",
    description: "Moving products across borders for shoots creates delays and complexity.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const ProblemSection = () => {
  return (
    <section id="product" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20 lg:mb-28"
        >
          <span className="text-sm font-medium text-purple-rich mb-4 block uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-8 leading-[1.1]">
            The reality of traditional photoshoots
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fashion photography was designed for an era of fewer SKUs and bigger budgets. 
            The industry has changed. The tooling has not.
          </p>
        </motion.div>

        {/* Bento-style problems grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`
                relative h-full p-8 lg:p-10 rounded-3xl 
                bg-background border border-border/50
                card-premium overflow-hidden
                ${index === 0 ? 'lg:col-span-1' : ''}
              `}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-pale to-purple-ghost flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-soft">
                    <problem.icon className="w-7 h-7 text-purple-rich" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* PixBella solution intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 lg:mt-32"
        >
          <div className="relative rounded-4xl bg-gradient-to-br from-purple-ghost via-background to-purple-pale/30 p-12 lg:p-20 border border-purple-light/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-rich/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-medium/5 rounded-full blur-3xl" />
            
            <div className="relative max-w-4xl mx-auto text-center">
              <p className="text-2xl lg:text-4xl text-foreground font-semibold leading-snug">
                PixBella compresses weeks into minutes and reduces costs by orders of magnitude.
              </p>
              <p className="text-xl lg:text-2xl text-muted-foreground mt-4">
                Consistent, sell-ready visuals at any scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;