import { motion } from "framer-motion";
import { Clock, Users, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "Runtime",
    description: "30 Hours of Continuous Coding",
    gradient: "from-primary to-electric-light",
  },
  {
    icon: Users,
    title: "Team Sync",
    description: "Collaborate with a team of up to 4 members",
    gradient: "from-accent to-neon-light",
  },
  {
    icon: Trophy,
    title: "Rewards.exe",
    description: "Win exciting prizes & certificates",
    gradient: "from-primary to-accent",
  },
];

const HighlightsSection = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title gradient-text">Event Highlights</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to know about the hackathon experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card card-hover-lift neon-border p-6 md:p-8 text-center group cursor-pointer"
          >
            <div className={`inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display mb-2 md:mb-3 text-foreground">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-body">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
