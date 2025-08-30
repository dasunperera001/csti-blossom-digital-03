import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const UpcomingIntakesSection = () => {
  const upcomingIntakes = [
    { date: "Jan 15, 2025", course: "Construction Skills", status: "Open" },
    { date: "Feb 1, 2025", course: "Hospitality Training", status: "Open" },
    { date: "Feb 20, 2025", course: "Agricultural Skills", status: "Limited" }
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
            Upcoming Intakes & Events
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Register for upcoming training programs
          </motion.p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {upcomingIntakes.map((intake, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.15, 
                  ease: "easeOut" 
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="hover-lift">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8 + index * 0.15 
                        }}
                        viewport={{ once: true }}
                      >
                        <Calendar className="h-6 w-6 text-primary" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.9 + index * 0.15 
                        }}
                        viewport={{ once: true }}
                      >
                        <p className="font-semibold">{intake.course}</p>
                        <p className="text-sm text-muted-foreground">{intake.date}</p>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.0 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        intake.status === 'Open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {intake.status}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm">Register</Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingIntakesSection;