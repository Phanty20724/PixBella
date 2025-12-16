import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
              Terms of Service
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using PixBella's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              PixBella provides an AI-powered platform for generating fashion imagery. Our services include 
              image generation, editing tools, API access, and related features as described on our website.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features, you must create an account. You are responsible for maintaining 
              the confidentiality of your account credentials and for all activities under your account.
            </p>
            <ul>
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You must be at least 18 years old to use our services</li>
              <li>You may not share your account credentials with others</li>
              <li>You must notify us immediately of any unauthorized account access</li>
            </ul>

            <h2>4. Subscription and Billing</h2>
            <p>
              Paid features are billed on a subscription basis. By subscribing, you authorize us to charge 
              your payment method on a recurring basis until you cancel.
            </p>
            <ul>
              <li>Prices are subject to change with 30 days notice</li>
              <li>Refunds are provided according to our refund policy</li>
              <li>You may cancel your subscription at any time</li>
              <li>Unused credits do not roll over between billing periods unless specified</li>
            </ul>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to use our services to:</p>
            <ul>
              <li>Generate illegal, harmful, or offensive content</li>
              <li>Infringe on intellectual property rights</li>
              <li>Attempt to reverse engineer our AI models</li>
              <li>Circumvent usage limits or security measures</li>
              <li>Resell access to our services without authorization</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              Images you generate using PixBella are yours to use commercially, subject to your subscription 
              tier. However, PixBella retains all rights to our platform, AI models, and underlying technology.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              PixBella is provided "as is" without warranties of any kind. We are not liable for any indirect, 
              incidental, or consequential damages arising from your use of our services.
            </p>

            <h2>8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account for violations of these terms. 
              Upon termination, your right to use our services ceases immediately.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our services after changes 
              constitutes acceptance of the new terms.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These terms are governed by the laws of Delaware, United States, without regard to conflict 
              of law principles.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at legal@pixbella.com.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
