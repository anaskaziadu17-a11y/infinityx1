import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import InfinitySymbol from "@/components/InfinitySymbol";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

const FooterSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="scale-75 -ml-3">
                <InfinitySymbol />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display gradient-text mb-2">
              InfinityX Hackathon
            </h3>
            <p className="text-muted-foreground font-body text-sm md:text-base">
              Code Beyond Limits
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold font-display text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold font-display text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@infinityxhackathon.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  <Mail className="w-4 h-4" />
                  info@infinityxhackathon.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  <Phone className="w-4 h-4" />
                  +91 XXXXXXXXXX
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground font-body">
            © 2026 InfinityX Hackathon. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
