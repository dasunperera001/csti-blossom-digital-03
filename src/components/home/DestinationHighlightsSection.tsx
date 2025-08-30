import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const DestinationHighlightsSection = () => {
  const destinations = [
    {
      name: "Israel",
      flag: "🇮🇱",
      regulation: "Licensed under Israeli employment law",
      roles: ["Mason", "Agricultural Worker"],
      deploymentTime: "30-45 days",
      slug: "israel"
    },
    {
      name: "GCC Countries",
      flag: "🇦🇪",
      regulation: "Compliant with Gulf labor regulations",
      roles: ["Construction Worker", "Hotel Staff"],
      deploymentTime: "35-50 days",
      slug: "gcc"
    },
    {
      name: "Europe",
      flag: "🇪🇺",
      regulation: "EU work permit compliance",
      roles: ["Farm Worker", "Technical Specialist"],
      deploymentTime: "45-60 days", 
      slug: "europe"
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
            Destination Highlights
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Deploy candidates to leading international markets
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
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
                    <motion.span 
                      className="text-3xl"
                      initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.0 + index * 0.15,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {destination.flag}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.1 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-xl">{destination.name}</CardTitle>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.2 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <CardDescription className="text-sm">{destination.regulation}</CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.3 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="font-medium text-sm text-muted-foreground mb-1">Sample Roles:</p>
                      <p className="text-sm">{destination.roles.join(", ")}</p>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.4 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Avg deployment: {destination.deploymentTime}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.5 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" className="w-full">
                      View Destination
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

export default DestinationHighlightsSection;