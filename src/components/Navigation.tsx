import { Button } from "@/components/ui/button";
import pixbellaLogo from "@/assets/pixbella-logo.png";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={pixbellaLogo} 
              alt="PixBella" 
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <a 
              href="#product" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Product
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
