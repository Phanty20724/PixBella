import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "for 7 days",
    description: "Experience PixBella with no commitment.",
    features: [
      "10 image generations",
      "Standard resolution",
      "Basic model library",
      "Email support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For growing brands with consistent needs.",
    features: [
      "100 image generations",
      "High resolution output",
      "Full model library",
      "Priority support",
      "Commercial license",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Pro",
    price: "$199",
    period: "/month",
    description: "For teams scaling their visual production.",
    features: [
      "Unlimited generations",
      "Maximum resolution",
      "Custom model uploads",
      "API access",
      "Dedicated support",
      "Team collaboration",
    ],
    cta: "Contact Sales",
    featured: false,
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <span className="text-sm font-medium text-purple-rich mb-4 block uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mb-8">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees. No complex tiers. Choose what works for your scale.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative group ${plan.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Glow effect for featured */}
              {plan.featured && (
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-light/30 via-purple-rich/20 to-purple-medium/30 rounded-4xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              )}
              
              <div
                className={`relative h-full rounded-3xl p-10 lg:p-12 transition-all duration-500 ${
                  plan.featured
                    ? "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-background border border-purple-rich/30 shadow-2xl"
                    : "bg-background border border-border hover:border-purple-light/30 card-premium"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-rich to-purple-medium text-background text-sm font-medium rounded-full shadow-glow">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-10">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    plan.featured ? "text-background" : "text-foreground"
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-5xl lg:text-6xl font-semibold ${
                      plan.featured ? "text-background" : "text-foreground"
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${
                      plan.featured ? "text-neutral-400" : "text-muted-foreground"
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-base ${
                    plan.featured ? "text-neutral-400" : "text-muted-foreground"
                  }`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured 
                          ? "bg-purple-rich/80" 
                          : "bg-purple-pale"
                      }`}>
                        <Check className={`w-4 h-4 ${
                          plan.featured ? "text-background" : "text-purple-rich"
                        }`} />
                      </div>
                      <span className={`${
                        plan.featured ? "text-neutral-300" : "text-muted-foreground"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.featured ? "hero" : "outline"}
                  size="lg"
                  className={`w-full h-14 text-base font-medium ${
                    plan.featured 
                      ? "bg-background text-foreground hover:bg-neutral-100 shadow-elevated" 
                      : "hover:border-purple-rich/50 hover:bg-purple-ghost"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;