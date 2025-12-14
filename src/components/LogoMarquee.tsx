import { motion } from "framer-motion";

const brands = [
  "LUXE COLLECTIVE",
  "MODERN THREAD",
  "ARIA FASHION",
  "VELVET ATELIER",
  "NOVA STYLE",
  "URBAN EDGE",
  "SILK ROAD",
  "MODA PRIMA",
];

const LogoMarquee = () => {
  return (
    <section className="py-16 lg:py-20 border-y border-border/50 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by innovative fashion brands
        </p>
      </div>
      
      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling content */}
        <motion.div 
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Double the brands for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 px-8"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-lg font-bold text-muted-foreground/50">
                  {brand.charAt(0)}
                </span>
              </div>
              <span className="text-lg font-semibold text-muted-foreground/60 tracking-tight">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;