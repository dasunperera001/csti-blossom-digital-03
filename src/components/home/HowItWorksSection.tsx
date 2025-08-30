import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, UserCheck, Shield, Settings, Download, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    { 
      icon: FileText, 
      title: "Submit Vacancy", 
      description: "Share your requirements and specifications",
      cta: "Download Employer Pack"
    },
    { 
      icon: UserCheck, 
      title: "Screening & Training", 
      description: "We select and train the best candidates",
      cta: "Download Employer Pack"
    },
    { 
      icon: Shield, 
      title: "Documentation & Compliance", 
      description: "Complete legal and regulatory paperwork",
      cta: "Download Employer Pack"
    },
    { 
      icon: Settings, 
      title: "Deployment & Follow-up", 
      description: "Smooth deployment with ongoing support",
      cta: "Download Employer Pack"
    }
  ];

  return (
    <motion.section 
      className="py-16 bg-background"
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
            How It Works for Employers
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Four simple steps to get certified candidates
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="text-center hover-lift h-full">
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
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
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
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.2 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="mb-4">{step.description}</CardDescription>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 1.4 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" size="sm" data-analytics="download-employer-pack">
                        <Download className="h-4 w-4 mr-2" />
                        {step.cta}
                      </Button>
                    </motion.div>
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
            <Button className="btn-hero" data-analytics="request-quota-click">
              Request Job Quota
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;