import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import pixbellaLogo from "@/assets/pixbella-logo.png";
import { motion } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass border-b border-border/30 shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 relative z-10 hover:scale-105 transition-transform duration-300">
            <motion.img 
              src={pixbellaLogo} 
              alt="PixBella" 
              className="h-10 lg:h-14 w-auto"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {["Product", "How It Works", "Pricing"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="shadow-soft hover:shadow-medium transition-shadow">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;