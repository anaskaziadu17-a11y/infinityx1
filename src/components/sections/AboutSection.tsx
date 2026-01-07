import { motion } from "framer-motion";
import { Users, IndianRupee, Clock, Lightbulb, Brain, Target, Sparkles } from "lucide-react";

const focusAreas = [
  { icon: Users, label: "Collaboration" },
  { icon: Lightbulb, label: "Creativity" },
  { icon: Brain, label: "Critical Thinking" },
  { icon: Sparkles, label: "Innovation" },
];

const keyDetails = [
  { icon: Users, label: "Team Size", value: "4 Members" },
  { icon: IndianRupee, label: "Registration Fee", value: "₹300 per person" },
  { icon: Clock, label: "Duration", value: "30 Hours" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          <span className="gradient-text">What is InfinityX</span>
          <span className="text-foreground"> Hackathon?</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden"
      >
        {/* Decorative Gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 font-body">
            InfinityX Hackathon is a <span className="text-primary font-semibold">30-hour offline hackathon</span> organized 
            to bring together students, developers, and innovators to solve real-world problems using technology. 
            The event focuses on pushing boundaries and creating impactful solutions.
          </p>

          {/* Focus Areas */}
          <div className="mb-10">
            <h3 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Focus Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <area.icon className="w-6 h-6 text-accent" />
                  <span className="text-sm font-medium text-foreground">{area.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Details */}
          <div>
            <h3 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Key Details
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {keyDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                    <detail.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="text-lg font-bold text-foreground">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
