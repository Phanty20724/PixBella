import pixbellaLogo from "@/assets/pixbella-logo.png";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#pricing" },
    { name: "API", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img 
              src={pixbellaLogo} 
              alt="PixBella" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
              AI-powered fashion imagery for modern commerce. 
              Studio quality, without the studio.
            </p>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-neutral-300">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-neutral-300">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-neutral-300">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-700">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} PixBella. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
