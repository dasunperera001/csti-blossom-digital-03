import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Settings, UserCheck, HeadphonesIcon, CheckCircle, ArrowRight } from "lucide-react";

const EmployerBenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Compliance & Legal",
      points: ["Full regulatory compliance", "Legal documentation", "Work permit support"]
    },
    {
      icon: Settings,
      title: "Tailored Training", 
      points: ["Job-specific skills", "Language training", "Cultural orientation"]
    },
    {
      icon: UserCheck,
      title: "Robust Screening",
      points: ["Background checks", "Skills assessment", "Medical clearance"]
    },
    {
      icon: HeadphonesIcon,
      title: "Aftercare & Replacement",
      points: ["24/7 support", "Performance monitoring", "Free replacements"]
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
            Employer Benefits & Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Complete support from recruitment to deployment
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.1, 
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + index * 0.1, 
                        ease: "easeOut" 
                      }}
                      viewport={{ once: true }}
                    >
                      <Icon className="h-8 w-8 text-primary mb-2" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.0 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {benefit.points.map((point, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center text-sm"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 1.2 + index * 0.1 + idx * 0.1 
                          }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button className="btn-hero">
              Become a Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmployerBenefitsSection;