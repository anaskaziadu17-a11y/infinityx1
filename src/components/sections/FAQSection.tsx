import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Students from any college or background are welcome to participate. Whether you're a beginner or an experienced developer, InfinityX Hackathon is for everyone!",
  },
  {
    question: "Do I need a team before registering?",
    answer: "No, you don't need a team before registering. You can register individually and form teams later, or we can help you find teammates during the team formation session.",
  },
  {
    question: "Is prior experience required?",
    answer: "No prior experience is required. Beginners are absolutely welcome! This is a great opportunity to learn, grow, and gain hands-on experience with guidance from mentors.",
  },
  {
    question: "Will mentors be available?",
    answer: "Yes, expert mentors from various tech domains will be available throughout the hackathon to guide participants, provide feedback, and help troubleshoot issues.",
  },
  {
    question: "What is the judging criteria?",
    answer: "Projects will be judged based on Innovation (creativity and uniqueness), Feasibility (technical implementation), Impact (potential real-world value), and Presentation (clarity and communication).",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          <span className="text-foreground">Frequently Asked </span>
          <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Got questions? We've got answers
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border-none px-6 data-[state=open]:glow-primary"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
