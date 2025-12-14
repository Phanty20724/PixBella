import { Upload, User, Sparkles } from "lucide-react";

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

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <span className="text-sm font-medium text-primary mb-4 block">
            PixBella Studio
          </span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Three steps. No complexity.
          </h2>
          <p className="text-lg text-muted-foreground">
            Our workflow is designed for operators, not photographers. 
            Upload, select, generate.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="relative z-10">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl lg:text-6xl font-semibold text-purple-pale">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual representation */}
        <div className="mt-16 lg:mt-24">
          <div className="relative rounded-3xl bg-gradient-to-br from-purple-ghost via-secondary to-purple-pale p-8 lg:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--purple-light)/0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--purple-rich)/0.1),transparent_50%)]" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Input boxes */}
              <div className="flex gap-4 lg:gap-8">
                <div className="w-32 h-40 lg:w-40 lg:h-52 rounded-2xl bg-background border-2 border-dashed border-border flex flex-col items-center justify-center gap-2">
                  <Upload className="w-6 h-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Product</span>
                </div>
                <div className="w-32 h-40 lg:w-40 lg:h-52 rounded-2xl bg-background border-2 border-dashed border-border flex flex-col items-center justify-center gap-2">
                  <User className="w-6 h-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Model</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center rotate-90 lg:rotate-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Output */}
              <div className="w-48 h-64 lg:w-56 lg:h-72 rounded-2xl bg-gradient-to-br from-purple-rich to-purple-deep flex items-center justify-center shadow-2xl shadow-purple-rich/30">
                <div className="text-center">
                  <Sparkles className="w-10 h-10 text-primary-foreground mb-2 mx-auto" />
                  <span className="text-sm text-primary-foreground/80">Generated Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
