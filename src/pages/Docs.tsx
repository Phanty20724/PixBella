import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Book, Code, Zap, Settings, HelpCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const guides = [
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get up and running with PixBella in under 5 minutes.",
    link: "#quick-start"
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation for developers.",
    link: "#api"
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize PixBella to match your workflow.",
    link: "#config"
  },
  {
    icon: Book,
    title: "Tutorials",
    description: "Step-by-step guides for common use cases.",
    link: "#tutorials"
  }
];

const faqs = [
  {
    question: "What image formats does PixBella support?",
    answer: "PixBella supports all major image formats including PNG, JPEG, WebP, and TIFF. Output images are available in PNG (lossless) or JPEG (optimized for web) at resolutions up to 4K."
  },
  {
    question: "How do I integrate PixBella with my e-commerce platform?",
    answer: "We offer native integrations with Shopify, WooCommerce, Magento, and BigCommerce. For custom platforms, use our REST API or JavaScript SDK for seamless integration."
  },
  {
    question: "What are the rate limits for the API?",
    answer: "Rate limits depend on your plan. Free tier allows 10 requests/minute, Pro allows 100 requests/minute, and Enterprise has custom limits. See our pricing page for details."
  },
  {
    question: "Can I use PixBella for commercial purposes?",
    answer: "Yes! All paid plans include full commercial usage rights. Images generated with PixBella can be used for marketing, advertising, e-commerce, and any commercial purpose."
  },
  {
    question: "How do I handle errors in the API?",
    answer: "Our API returns standard HTTP status codes. 2xx for success, 4xx for client errors, and 5xx for server errors. Each error response includes a detailed message and error code for debugging."
  }
];

const Docs = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-background" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              Documentation
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6" style={{ letterSpacing: '-0.035em' }}>
              Learn PixBella
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Everything you need to integrate and master PixBella. From quick starts to advanced API usage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <motion.a
                key={guide.title}
                href={guide.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-neutral-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <guide.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  {guide.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-muted-foreground">{guide.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="quick-start" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-foreground mb-8" style={{ letterSpacing: '-0.035em' }}>
              Quick Start Guide
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="font-semibold text-foreground mb-3">1. Get your API key</h3>
                <p className="text-muted-foreground mb-4">Sign up for a PixBella account and navigate to Settings → API Keys to generate your key.</p>
                <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  export PIXBELLA_API_KEY="your_api_key_here"
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="font-semibold text-foreground mb-3">2. Install the SDK</h3>
                <p className="text-muted-foreground mb-4">Install our official SDK using your preferred package manager.</p>
                <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  npm install @pixbella/sdk
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h3 className="font-semibold text-foreground mb-3">3. Generate your first image</h3>
                <p className="text-muted-foreground mb-4">Use the SDK to generate a fashion image with just a few lines of code.</p>
                <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                  <pre>{`import { PixBella } from '@pixbella/sdk';

const client = new PixBella(process.env.PIXBELLA_API_KEY);

const image = await client.generate({
  product: 'path/to/product.jpg',
  style: 'editorial',
  background: 'studio-white'
});`}</pre>
                </div>
              </div>
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
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-semibold text-foreground" style={{ letterSpacing: '-0.035em' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-neutral-50 rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Docs;
