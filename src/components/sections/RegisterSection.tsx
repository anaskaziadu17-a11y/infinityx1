import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, ExternalLink } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-radial from-primary/20 via-accent/10 to-transparent rounded-full blur-[60px] md:blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium">Registration Open</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 md:mb-6 px-2">
          <span className="text-foreground">Ready to </span>
          <span className="gradient-text">Code Beyond Limits?</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-4 font-body">
          Secure your spot and be part of InfinityX Hackathon. 
          Join 200+ developers, innovators, and dreamers building the future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="hero"
            size="xl"
            className="group animate-pulse-glow"
            onClick={() => window.open("#", "_blank")}
          >
            <Rocket className="w-5 h-5" />
            Register Now
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Limited spots available • Registration closes soon
        </p>
      </motion.div>
    </section>
  );
};

export default RegisterSection;
