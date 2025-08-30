import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Award } from "lucide-react";

const FeaturedProgramsSection = () => {
  const programs = [
    {
      category: "Construction",
      courses: ["Mason", "Carpenter"],
      duration: "3-6 months",
      certification: "Government Certified"
    },
    {
      category: "Hospitality", 
      courses: ["Hotel Staff", "Restaurant Service"],
      duration: "2-4 months",
      certification: "Industry Certified"
    },
    {
      category: "Agriculture",
      courses: ["Farm Worker", "Greenhouse Specialist"],
      duration: "2-3 months", 
      certification: "Skills Certified"
    },
    {
      category: "Technical",
      courses: ["Welder", "Electrician"],
      duration: "4-8 months",
      certification: "Trade Certified"
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
            Featured Training Programs
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Comprehensive training across key industries
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <CardTitle className="text-xl text-primary">{program.category}</CardTitle>
                  </motion.div>
                  <div className="space-y-1">
                    {program.courses.map((course, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 1.0 + index * 0.1 + idx * 0.1 
                        }}
                        viewport={{ once: true }}
                      >
                        <CardDescription className="font-medium">{course}</CardDescription>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <motion.div 
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.2 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      {program.duration}
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.3 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <Award className="h-4 w-4 mr-2" />
                      {program.certification}
                    </motion.div>
                  </div>
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
                    <Button variant="outline" size="sm" className="w-full">
                      View Programs
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

export default FeaturedProgramsSection;