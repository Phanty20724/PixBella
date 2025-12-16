import { Button } from "@/components/ui/button";
import pixbellaLogo from "@/assets/pixbella-logo.png";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { name: "Studio", href: "/studio" },
    { name: "How It Works", href: isHomePage ? "#how-it-works" : "/#how-it-works" },
    { name: "Pricing", href: isHomePage ? "#pricing" : "/#pricing" },
    { name: "Docs", href: "/docs" },
  ];

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
          <Link to="/" className="flex items-center gap-2 relative hover:scale-105 transition-transform duration-300">
            <motion.img 
              src={pixbellaLogo} 
              alt="PixBella" 
              className="h-20 lg:h-24 w-auto"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center gap-4">
                {item.href.startsWith("#") || item.href.includes("/#") ? (
                  <a 
                    href={item.href} 
                    className="relative text-sm font-medium transition-colors duration-300 group"
                    style={{ color: '#acadb0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#a855f7'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#acadb0'}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className="relative text-sm font-medium transition-colors duration-300 group"
                    style={{ color: location.pathname === item.href ? '#a855f7' : '#acadb0' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#a855f7'}
                    onMouseLeave={(e) => e.currentTarget.style.color = location.pathname === item.href ? '#a855f7' : '#acadb0'}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                )}
                {index < navItems.length - 1 && <span style={{ color: '#acadb0' }}>|</span>}
              </div>
            ))}
          </div>

          <Link to="/studio">
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-lg px-6 font-medium"
            >
              Get Started
            </Button>
          </Link>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Navigation;
