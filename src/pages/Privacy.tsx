import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
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
              Privacy Policy
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
            className="max-w-3xl mx-auto prose prose-neutral prose-lg"
          >
            <h2>Overview</h2>
            <p>
              At PixBella, we take your privacy seriously. This policy explains how we collect, use, 
              and protect your personal information when you use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, password, and billing information</li>
              <li><strong>Content:</strong> Images you upload and generate using our platform</li>
              <li><strong>Communications:</strong> Messages you send to our support team</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <ul>
              <li><strong>Usage Data:</strong> How you interact with our platform, features used, and preferences</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers</li>
              <li><strong>Log Data:</strong> IP address, access times, and pages viewed</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Process payments and manage your subscription</li>
              <li>Send important updates and marketing communications (with consent)</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed 
              to provide services. Generated images are retained according to your subscription tier:
            </p>
            <ul>
              <li>Free tier: 30 days</li>
              <li>Pro tier: 1 year</li>
              <li>Enterprise: Custom retention policies</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Cloud hosting, payment processing, and analytics partners</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
            </ul>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and download your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Object to certain processing activities</li>
            </ul>

            <h2>Security</h2>
            <p>
              We implement industry-standard security measures to protect your data, including encryption 
              in transit and at rest, regular security audits, and access controls.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place for such transfers.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 18. We do not knowingly collect information 
              from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy periodically. We will notify you of significant changes via email 
              or through our platform.
            </p>

            <h2>Contact Us</h2>
            <p>
              For privacy-related inquiries, please contact our Data Protection Officer at privacy@pixbella.com.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
