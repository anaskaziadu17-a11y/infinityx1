import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Palette, Cpu, Heart } from "lucide-react";

const mainPrizes = [
  {
    position: "2nd",
    prize: "₹1,500",
    icon: Medal,
    extras: ["Medal", "Certificate"],
    gradient: "from-slate-400 to-slate-300",
    scale: "scale-95",
  },
  {
    position: "1st",
    prize: "₹2,500",
    icon: Trophy,
    extras: ["Trophy", "Certificate", "Mentorship Opportunity"],
    gradient: "from-amber-400 to-yellow-300",
    scale: "scale-100 md:scale-110",
    featured: true,
  },
  {
    position: "3rd",
    prize: "₹1,000",
    icon: Award,
    extras: ["Certificate"],
    gradient: "from-orange-600 to-orange-400",
    scale: "scale-90",
  },
];

const specialAwards = [
  { title: "Best Innovation", icon: Star },
  { title: "Best UI/UX Design", icon: Palette },
  { title: "Best Use of Technology", icon: Cpu },
  { title: "Most Social Impact", icon: Heart },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="section-container relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="section-title">
          <span className="text-foreground">Prizes & </span>
          <span className="gradient-text">Rewards</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Compete for exciting prizes and recognition
        </p>
      </motion.div>

      {/* Main Prizes */}
      <div className="flex flex-col md:flex-row items-stretch md:items-end justify-center gap-4 md:gap-6 mb-12 md:mb-16 relative z-10 px-4">
        {mainPrizes.map((prize, index) => (
          <motion.div
            key={prize.position}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`glass-card p-6 md:p-8 text-center md:${prize.scale} ${
              prize.featured ? "glow-combined order-first md:order-none" : ""
            } card-hover-lift w-full md:w-72`}
          >
            <div className={`inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-br ${prize.gradient} mb-3 md:mb-4`}>
              <prize.icon className="w-8 h-8 md:w-10 md:h-10 text-background" />
            </div>
            <div className="text-xs md:text-sm font-medium text-muted-foreground mb-1">
              {prize.position} Prize
            </div>
            <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-3 md:mb-4">
              {prize.prize}
            </div>
            <ul className="space-y-2">
              {prize.extras.map((extra) => (
                <li key={extra} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {extra}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Special Awards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h3 className="text-2xl font-bold font-display text-center mb-8 text-foreground">
          Special Category Awards
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {specialAwards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-4 text-center card-hover-lift"
            >
              <award.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">{award.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PrizesSection;
