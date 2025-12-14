import { Clock, DollarSign, Users, MapPin } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Weeks of coordination",
    description: "Traditional shoots require booking studios, models, photographers, and stylists.",
  },
  {
    icon: DollarSign,
    title: "Thousands per shoot",
    description: "A single catalog session can cost more than most products are worth.",
  },
  {
    icon: Users,
    title: "Limited diversity",
    description: "Hiring models for every market and demographic is operationally painful.",
  },
  {
    icon: MapPin,
    title: "Location constraints",
    description: "Moving products across borders for shoots creates delays and complexity.",
  },
];

const ProblemSection = () => {
  return (
    <section id="product" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            The reality of traditional photoshoots
          </h2>
          <p className="text-lg text-muted-foreground">
            Fashion photography was designed for an era of fewer SKUs and bigger budgets. 
            The industry has changed. The tooling has not.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="group"
            >
              <div className="flex flex-col h-full p-6 lg:p-8 bg-background rounded-2xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-pale flex items-center justify-center mb-6 group-hover:bg-purple-light/30 transition-colors">
                  <problem.icon className="w-6 h-6 text-purple-rich" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PixBella solution intro */}
        <div className="mt-16 lg:mt-24 max-w-3xl mx-auto text-center">
          <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed">
            PixBella compresses weeks into minutes and reduces costs by orders of magnitude. 
            <span className="text-muted-foreground"> Consistent, sell-ready visuals at any scale.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
