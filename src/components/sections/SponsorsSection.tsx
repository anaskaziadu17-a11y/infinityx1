import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

// Placeholder sponsor logos - replace with actual sponsors
const sponsors = [
  { name: "TechCorp", placeholder: "TC" },
  { name: "InnovateLab", placeholder: "IL" },
  { name: "DevStudio", placeholder: "DS" },
  { name: "CloudNine", placeholder: "CN" },
  { name: "DataFlow", placeholder: "DF" },
  { name: "CodeBase", placeholder: "CB" },
];

const SponsorsSection = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          <span className="text-foreground">Our </span>
          <span className="gradient-text">Sponsors</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Supported by organizations that believe in innovation and technology
        </p>
      </motion.div>

      {/* Sponsor Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 flex items-center justify-center aspect-square group cursor-pointer card-hover-lift"
          >
            {/* Placeholder - replace with actual logo images */}
            <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors group-hover:grayscale-0 grayscale">
              {sponsor.placeholder}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Become a Sponsor CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto glow-combined"
      >
        <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold font-display text-foreground mb-3">
          Become a Sponsor
        </h3>
        <p className="text-muted-foreground mb-6 font-body">
          Partner with InfinityX Hackathon and empower future innovators. 
          Get visibility among top tech talent and support the next generation of developers.
        </p>
        <Button variant="hero" size="lg">
          Partner With Us
        </Button>
      </motion.div>
    </section>
  );
};

export default SponsorsSection;
