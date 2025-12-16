import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const cookieCategories = [
  {
    category: "Essential",
    purpose: "Required for basic site functionality",
    examples: "Session management, security tokens, user authentication",
    duration: "Session to 1 year",
    canDisable: false
  },
  {
    category: "Functional",
    purpose: "Remember your preferences and settings",
    examples: "Language preferences, theme settings, saved configurations",
    duration: "1 month to 1 year",
    canDisable: true
  },
  {
    category: "Analytics",
    purpose: "Understand how visitors use our site",
    examples: "Page views, feature usage, error tracking",
    duration: "Up to 2 years",
    canDisable: true
  },
  {
    category: "Marketing",
    purpose: "Deliver relevant advertisements",
    examples: "Ad personalization, conversion tracking",
    duration: "Up to 2 years",
    canDisable: true
  }
];

const Cookies = () => {
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
              Legal
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6" style={{ letterSpacing: '-0.035em' }}>
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: December 16, 2025
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-neutral prose-lg mb-12">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help 
                websites remember your preferences and understand how you use the site. We use cookies 
                and similar technologies to provide, protect, and improve our services.
              </p>

              <h2>Types of Cookies We Use</h2>
              <p>
                We categorize cookies based on their purpose. The table below explains each category 
                and whether you can disable them.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 overflow-hidden mb-12">
              <Table>
                <TableHeader>
                  <TableRow className="bg-neutral-50">
                    <TableHead className="font-semibold">Category</TableHead>
                    <TableHead className="font-semibold">Purpose</TableHead>
                    <TableHead className="font-semibold">Examples</TableHead>
                    <TableHead className="font-semibold">Duration</TableHead>
                    <TableHead className="font-semibold">Optional</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cookieCategories.map((cookie) => (
                    <TableRow key={cookie.category}>
                      <TableCell className="font-medium">{cookie.category}</TableCell>
                      <TableCell>{cookie.purpose}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{cookie.examples}</TableCell>
                      <TableCell>{cookie.duration}</TableCell>
                      <TableCell>
                        {cookie.canDisable ? (
                          <span className="text-green-600">Yes</span>
                        ) : (
                          <span className="text-muted-foreground">No</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="prose prose-neutral prose-lg">
              <h2>Managing Your Cookie Preferences</h2>
              <p>
                You can control cookies through several methods:
              </p>
              <ul>
                <li>
                  <strong>Cookie Banner:</strong> When you first visit our site, you can accept or 
                  customize your cookie preferences using our consent banner.
                </li>
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies 
                  through their privacy settings.
                </li>
                <li>
                  <strong>Account Settings:</strong> Logged-in users can manage their preferences in 
                  their account settings.
                </li>
              </ul>

              <h2>Third-Party Cookies</h2>
              <p>
                Some cookies on our site are placed by third-party services we use, such as:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> For website analytics and usage insights</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
                <li><strong>Intercom:</strong> For customer support chat functionality</li>
              </ul>
              <p>
                These third parties have their own privacy policies governing their use of cookies.
              </p>

              <h2>Impact of Disabling Cookies</h2>
              <p>
                Disabling certain cookies may affect your experience:
              </p>
              <ul>
                <li>Essential cookies cannot be disabled — our site won't function without them</li>
                <li>Disabling functional cookies means your preferences won't be saved</li>
                <li>Disabling analytics cookies limits our ability to improve the platform</li>
                <li>Disabling marketing cookies may result in less relevant advertisements</li>
              </ul>

              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy as our practices or applicable laws change. 
                Check this page periodically for the latest information.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at privacy@pixbella.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Cookies;
