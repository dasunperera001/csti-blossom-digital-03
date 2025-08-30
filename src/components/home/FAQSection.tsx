import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const employerFAQs = [
    {
      question: "How long does the recruitment process take?",
      answer: "Typically 4-8 weeks from vacancy submission to candidate deployment, depending on role complexity and documentation requirements."
    },
    {
      question: "What are the costs involved?",
      answer: "Transparent fee structure with no hidden costs. Includes training, documentation, and deployment support."
    },
    {
      question: "Do you provide replacement guarantees?",
      answer: "Yes, we offer free replacement within the first 90 days if a candidate doesn't meet expectations."
    }
  ];

  const candidateFAQs = [
    {
      question: "What training do you provide?",
      answer: "Comprehensive job-specific training, language classes, cultural orientation, and soft skills development."
    },
    {
      question: "How much does the training cost?",
      answer: "Many programs are government-subsidized. Contact us for specific program costs and financing options."
    },
    {
      question: "What support do you provide abroad?",
      answer: "24/7 support hotline, local representatives, regular check-ins, and assistance with workplace issues."
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-muted/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Find answers to common questions
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              For Employers
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible>
                {employerFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`employer-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              For Candidates
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible>
                {candidateFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`candidate-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;