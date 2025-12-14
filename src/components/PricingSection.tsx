import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No complex tiers. Choose what works for your scale.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 lg:p-10 transition-all duration-300 ${
                plan.featured
                  ? "bg-foreground text-background shadow-2xl shadow-foreground/10 scale-[1.02] lg:scale-105"
                  : "bg-background border border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-lg font-semibold mb-2 ${
                  plan.featured ? "text-background" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl lg:text-5xl font-semibold ${
                    plan.featured ? "text-background" : "text-foreground"
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${
                    plan.featured ? "text-neutral-400" : "text-muted-foreground"
                  }`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm ${
                  plan.featured ? "text-neutral-400" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.featured 
                        ? "bg-purple-rich" 
                        : "bg-purple-pale"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.featured ? "text-background" : "text-purple-rich"
                      }`} />
                    </div>
                    <span className={`text-sm ${
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
                className={`w-full ${
                  plan.featured 
                    ? "bg-background text-foreground hover:bg-neutral-100" 
                    : ""
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
