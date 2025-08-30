import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Employer Pack",
      description: "Complete guide for hiring international candidates",
      size: "2.5 MB",
      type: "PDF"
    },
    {
      title: "Sample Employment Contract",
      description: "Template contracts for different sectors",
      size: "1.8 MB", 
      type: "PDF"
    },
    {
      title: "Candidate Profiles Template",
      description: "Standard format for candidate information",
      size: "800 KB",
      type: "PDF"
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
            Resources & Downloads
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Essential documents for employers and candidates
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + index * 0.15, 
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
                    className="flex items-center gap-3 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.9 + index * 0.15, 
                        ease: "easeOut" 
                      }}
                      viewport={{ once: true }}
                    >
                      <FileText className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.0 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <CardDescription>{resource.description}</CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex items-center justify-between mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.2 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-muted-foreground">{resource.type} • {resource.size}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.4 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full" data-analytics={`download-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ResourcesSection;