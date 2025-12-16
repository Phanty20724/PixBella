import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Wand2, Layers, Zap, Palette, Camera, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Generation",
    description: "Create stunning fashion imagery with our advanced AI models trained on millions of professional photos."
  },
  {
    icon: Layers,
    title: "Multiple Styles",
    description: "Choose from dozens of visual styles, from editorial to commercial, lifestyle to studio."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Generate high-resolution images in seconds, not hours. Perfect for fast-paced fashion cycles."
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Apply your brand guidelines automatically. Colors, mood, and aesthetic — all customizable."
  },
  {
    icon: Camera,
    title: "Studio Quality",
    description: "Output rivaling professional photoshoots. 4K resolution, perfect lighting, flawless composition."
  },
  {
    icon: Sparkles,
    title: "Smart Editing",
    description: "Fine-tune every detail with AI-assisted editing tools. Adjust poses, backgrounds, and more."
  }
];

const Studio = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              PixBella Studio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6" style={{ letterSpacing: '-0.035em' }}>
              Your AI-powered
              <span className="block text-gradient">fashion studio.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Create stunning, studio-quality fashion imagery in minutes. No photoshoots, no models, no hassle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Launch Studio
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Watch Demo
              </Button>
            </div>
          </motion.div>
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
              Everything you need to create
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for modern fashion brands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-neutral-50 hover:bg-purple-50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
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
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to stunning fashion imagery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Upload your product", description: "Simply upload your clothing item or accessory. Our AI handles the rest." },
              { step: "02", title: "Choose your style", description: "Select from our library of styles, poses, and backgrounds to match your brand." },
              { step: "03", title: "Generate & download", description: "Get studio-quality images in seconds. Ready for your website or campaigns." }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-purple-200 mb-6">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Studio;
