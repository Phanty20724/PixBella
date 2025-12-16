import pixbellaLogo from "@/assets/pixbella-logo.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

const Footer = () => {
  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.3),transparent_50%)]" />
        
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-purple-300/15 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-28 lg:py-36 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to transform your imagery?
            </h2>
            <p className="text-purple-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of brands who are creating stunning 
              <br className="hidden md:block" />
              fashion visuals in minutes.
            </p>
            <Button 
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-10 py-6 text-base font-semibold shadow-xl shadow-purple-900/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/40 hover:scale-105"
            >
              Start for free
            </Button>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120L1440 120L1440 60C1440 60 1280 0 720 0C160 0 0 60 0 60L0 120Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      <footer className="bg-white relative pt-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src={pixbellaLogo} 
                    alt="PixBella" 
                    className="h-9 w-auto"
                  />
                </div>
                <p className="text-neutral-600 max-w-sm leading-relaxed mb-8 text-[15px]">
                  PixBella empowers brands to transform fashion imagery into stunning, 
                  studio-quality visuals — making product showcasing easier than ever.
                </p>
                
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-purple-100 hover:text-purple-600 flex items-center justify-center transition-all duration-200 group"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-4 h-4 text-neutral-600 group-hover:text-purple-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-purple-100 hover:text-purple-600 flex items-center justify-center transition-all duration-200 group"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 text-neutral-600 group-hover:text-purple-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-purple-100 hover:text-purple-600 flex items-center justify-center transition-all duration-200 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 text-neutral-600 group-hover:text-purple-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-purple-100 hover:text-purple-600 flex items-center justify-center transition-all duration-200 group"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4 text-neutral-600 group-hover:text-purple-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 lg:pl-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h4 className="text-sm font-semibold text-neutral-900 mb-5 uppercase tracking-wider">Product</h4>
                    <ul className="space-y-4">
                      {footerLinks.product.map((link) => (
                        <li key={link.name}>
                          <a 
                            href={link.href}
                            className="text-[15px] text-neutral-500 hover:text-purple-600 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <h4 className="text-sm font-semibold text-neutral-900 mb-5 uppercase tracking-wider">Resources</h4>
                    <ul className="space-y-4">
                      {footerLinks.resources.map((link) => (
                        <li key={link.name}>
                          <a 
                            href={link.href}
                            className="text-[15px] text-neutral-500 hover:text-purple-600 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-sm font-semibold text-neutral-900 mb-5 uppercase tracking-wider">Company</h4>
                    <ul className="space-y-4">
                      {footerLinks.company.map((link) => (
                        <li key={link.name}>
                          <a 
                            href={link.href}
                            className="text-[15px] text-neutral-500 hover:text-purple-600 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-6 border-t border-neutral-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-neutral-400">
                &copy; {new Date().getFullYear()} PixBella. All rights reserved.
              </p>
              <div className="flex items-center gap-8">
                <a href="#" className="text-sm text-neutral-400 hover:text-purple-600 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-neutral-400 hover:text-purple-600 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-neutral-400 hover:text-purple-600 transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-white pb-8">
          <div className="text-[14vw] md:text-[12vw] font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-50 tracking-tighter text-center leading-none select-none pointer-events-none" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.03)' }}>
            PixBella
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
