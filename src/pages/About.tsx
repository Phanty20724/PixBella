import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI, constantly exploring new ways to revolutionize fashion imagery."
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "Every feature we build starts with understanding our customers' needs. Your success is our success."
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description: "We believe you shouldn't have to choose. Our technology delivers both — studio quality at unprecedented speed."
  },
  {
    icon: Users,
    title: "Inclusive by Design",
    description: "Fashion is for everyone. Our AI represents diverse body types, ethnicities, and styles authentically."
  }
];

const milestones = [
  { year: "2022", title: "Founded", description: "PixBella was born from a simple idea: make professional fashion photography accessible to all." },
  { year: "2023", title: "Launch", description: "Released our first public product to overwhelming response from the fashion community." },
  { year: "2024", title: "Scale", description: "Reached 10,000+ brands using PixBella, processing millions of images monthly." },
  { year: "2025", title: "Global", description: "Expanded to serve fashion brands in over 50 countries worldwide." }
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-background" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6" style={{ letterSpacing: '-0.035em' }}>
              Reimagining fashion
              <span className="block text-gradient">photography.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We're building the future of fashion imagery — where stunning visuals are accessible to every brand, 
              regardless of budget or resources.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6" style={{ letterSpacing: '-0.035em' }}>
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional fashion photography is expensive, time-consuming, and often inaccessible to emerging brands. 
                We saw an opportunity to change that.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                PixBella uses cutting-edge AI to generate hyper-realistic fashion imagery that rivals 
                professional photoshoots — at a fraction of the cost and time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is simple: democratize fashion photography and help every brand tell their story 
                through beautiful visuals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-12 text-center"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-5xl font-bold text-purple-600 mb-2">10K+</div>
                  <div className="text-muted-foreground">Brands Trust Us</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-600 mb-2">5M+</div>
                  <div className="text-muted-foreground">Images Generated</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" style={{ letterSpacing: '-0.035em' }}>
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" style={{ letterSpacing: '-0.035em' }}>
              Our Journey
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-20">
                  <div className="text-2xl font-bold text-purple-600">{milestone.year}</div>
                </div>
                <div className="flex-1 pb-12 border-l-2 border-purple-200 pl-8 relative">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-600" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
