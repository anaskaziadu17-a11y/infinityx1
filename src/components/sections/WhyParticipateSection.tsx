import { motion } from "framer-motion";
import { Globe, Handshake, BookOpen, Medal } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Real-world Problems",
    description: "Work on innovative challenges that matter and create meaningful impact.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Handshake,
    title: "Team Collaboration",
    description: "Build with a team and enhance collective creativity through synergy.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: BookOpen,
    title: "Learn & Grow",
    description: "Gain hands-on experience and receive mentorship from industry experts.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Medal,
    title: "Win Prizes",
    description: "Compete for exciting prizes, certificates & industry recognition.",
    color: "from-orange-500 to-amber-400",
  },
];

const WhyParticipateSection = () => {
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
          <span className="text-foreground">Why </span>
          <span className="gradient-text">Participate?</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Unlock incredible opportunities and take your skills to the next level
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card card-hover-lift neon-border p-5 md:p-6 text-center group cursor-pointer"
          >
            <div className={`inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br ${benefit.color} mb-4 md:mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
              <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
            </div>
            <h3 className="text-lg md:text-xl font-bold font-display mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyParticipateSection;
