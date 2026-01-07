import { motion } from "framer-motion";
import { Globe, Smartphone, Bot, Wifi, Rocket } from "lucide-react";

const domains = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Create responsive and impactful web solutions that shape the digital landscape.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Develop mobile applications that solve daily problems and enhance user experiences.",
    gradient: "from-green-600 to-green-400",
  },
  {
    icon: Bot,
    title: "AI / ML",
    description: "Build intelligent systems powered by data and machine learning algorithms.",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    icon: Wifi,
    title: "IoT & Smart Tech",
    description: "Innovate with connected devices, automation, and smart technology solutions.",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    icon: Rocket,
    title: "Open Innovation",
    description: "Bring your own unique idea to life. The sky's the limit!",
    gradient: "from-pink-600 to-pink-400",
  },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="section-container relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="section-title">
          <span className="text-foreground">Problem </span>
          <span className="gradient-text">Domains</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose your battleground and build something extraordinary
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`glass-card card-hover-lift p-5 md:p-6 group cursor-pointer ${
              index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className={`inline-flex p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${domain.gradient} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <domain.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </div>
            <h3 className="text-lg md:text-xl font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
              {domain.title}
            </h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-3 md:mb-4">
              {domain.description}
            </p>
            <button className="text-primary text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1 touch-manipulation py-1">
              View Problem Statement
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DomainsSection;
