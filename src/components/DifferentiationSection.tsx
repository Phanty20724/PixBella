import { Check } from "lucide-react";

const differentiators = [
  "Understands clothing structure and fit",
  "Respects natural fabric drape and movement",
  "Built specifically for product commerce",
  "Optimized for diverse global markets",
  "Consistent output quality at scale",
  "No creative interpretation—just accuracy",
];

const DifferentiationSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Generic AI tools don't understand fashion.
            </h2>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Most image generators treat clothing like any other object. 
              They don't understand fit, drape, or the nuances that make fashion photography sell.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              PixBella is trained for commerce, not creativity. 
              Every output is designed to convert browsers into buyers.
            </p>
          </div>

          {/* Right content - Features */}
          <div className="bg-neutral-800/50 rounded-3xl p-8 lg:p-12 border border-neutral-700/50">
            <h3 className="text-xl font-semibold mb-8 text-background">
              Built different
            </h3>
            <ul className="space-y-5">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-purple-rich flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-background" />
                  </div>
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
