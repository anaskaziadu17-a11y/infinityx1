import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import InfinitySymbol from "@/components/InfinitySymbol";
import ParticleBackground from "@/components/ParticleBackground";
import { ArrowDown, Rocket } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ParticleBackground />
      
      {/* Gradient Orbs - Hidden on mobile to prevent overflow */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-float" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 bg-accent/20 rounded-full blur-[60px] md:blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-6"
        >
          <InfinitySymbol />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4 md:mb-6 animate-float leading-tight"
        >
          <span className="gradient-text">InfinityX</span>
          <br />
          <span className="text-foreground text-glow-primary">Hackathon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-2 font-body leading-relaxed"
        >
          Join us for an innovative <span className="text-primary font-semibold">30-hour offline hackathon</span> where creativity meets technology.
          Build groundbreaking solutions, collaborate with top minds, and compete for exciting prizes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() => scrollToSection("register")}
            className="group"
          >
            <Rocket className="w-5 h-5 group-hover:animate-pulse" />
            Register Now
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            onClick={() => scrollToSection("about")}
            className="group"
          >
            Explore
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
