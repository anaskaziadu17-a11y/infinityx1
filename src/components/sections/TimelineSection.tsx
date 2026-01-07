import { motion } from "framer-motion";

const timeline = [
  { day: 1, time: "09:00 AM", event: "Registration & Check-in" },
  { day: 1, time: "10:00 AM", event: "Opening Ceremony" },
  { day: 1, time: "11:00 AM", event: "Hacking Begins" },
  { day: 1, time: "01:30 PM", event: "Lunch Break" },
  { day: 1, time: "06:00 PM", event: "Mentor Sessions" },
  { day: 1, time: "08:00 PM", event: "Dinner" },
  { day: 2, time: "08:00 AM", event: "Breakfast" },
  { day: 2, time: "12:00 PM", event: "Final Submissions" },
  { day: 2, time: "02:00 PM", event: "Presentations" },
  { day: 2, time: "05:00 PM", event: "Results & Closing Ceremony" },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          <span className="text-foreground">Event </span>
          <span className="gradient-text">Timeline</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Your complete schedule for the 30-hour hackathon journey
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Center Line - Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden md:block" />
        
        {/* Left Line - Mobile */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:hidden" />

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isNewDay = index === 0 || timeline[index - 1].day !== item.day;

          return (
            <div key={index}>
              {/* Day Separator */}
              {isNewDay && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-center md:justify-center mb-6 md:mb-8 pl-8 md:pl-0"
                >
                  <span className="px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-primary to-accent rounded-full text-foreground font-bold font-display text-sm md:text-lg">
                    Day {item.day}
                  </span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex items-center mb-6 md:mb-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row md:gap-8`}
              >
                {/* Mobile Dot */}
                <div className="flex md:hidden w-8 justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background shadow-[0_0_15px_hsl(217_91%_60%_/_0.5)]" />
                </div>

                {/* Content Card */}
                <div className={`flex-1 md:w-5/12 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass-card p-4 md:p-5 card-hover-lift inline-block w-full md:w-auto">
                    <span className="text-primary font-bold font-display text-sm md:text-lg">
                      {item.time}
                    </span>
                    <h3 className="text-foreground font-semibold mt-1 text-sm md:text-base">
                      {item.event}
                    </h3>
                  </div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_hsl(217_91%_60%_/_0.5)]" />
                </div>

                {/* Empty Space - Desktop */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
