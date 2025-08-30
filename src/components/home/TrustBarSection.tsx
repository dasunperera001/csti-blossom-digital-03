import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const TrustBarSection = () => {
  return (
    <motion.section 
      className="py-6 bg-muted"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Shield className="h-5 w-5 text-primary" />
            </motion.div>
            <motion.span 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Licensed by Ministry of Labour — 
              <motion.a 
                href="/accreditation" 
                className="text-primary hover:underline ml-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                License No: ML/2024/12345
              </motion.a>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustBarSection;