import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Download } from "lucide-react";

const AccreditationSection = () => {
  return (
    <motion.section 
      className="py-16 bg-muted/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Accreditation & Compliance
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Fully licensed and compliant with international labor standards
            </motion.p>
            <div className="space-y-4">
              {[
                "Government certified training programs",
                "International labor compliance", 
                "ISO 9001:2015 quality certification"
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7 + index * 0.1, 
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="inline-block mr-4"
              >
                <Button variant="outline">
                  View Full Accreditation
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <Button variant="ghost" data-analytics="download-certificate">
                  <Download className="h-4 w-4 mr-2" />
                  Download Certificate
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5e70cb07bf0b402af6386e53/b0a806eb-ce45-4ac3-a729-b698229d1866/ISO+9001+-+Quality+Certificate.png" 
              alt="CSTI Bureau Accreditation Certificate"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AccreditationSection;