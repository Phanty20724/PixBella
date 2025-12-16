import { Button } from "@/components/ui/button";
import pixbellaLogo from "@/assets/pixbella-logo.png";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-6"
    >
      <div className="flex justify-center">
        <motion.nav 
          className="px-6 py-0 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-border/20 shadow-soft flex items-center gap-3"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 relative hover:scale-105 transition-transform duration-300">
            <motion.img 
              src={pixbellaLogo} 
              alt="PixBella" 
              className="h-20 lg:h-24 w-auto"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {["Studio", "How It Works", "Pricing", "Docs"].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="relative text-sm font-medium hover:text-primary transition-colors duration-300 group"
                  style={{ color: '#acadb0' }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
                {index < 3 && <span style={{ color: '#acadb0' }}>|</span>}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            variant="default" 
            size="sm" 
            className="rounded-full px-6 font-medium"
          >
            Get Started
          </Button>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Navigation;