import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, Award, Users, ArrowRight } from "lucide-react";

const FeaturedProgramsSection = () => {
  const programs = [
    {
      category: "Construction",
      courses: ["Mason", "Carpenter"],
      duration: "3-6 months",
      certification: "Gov. Certified",
      image: "https://lh3.googleusercontent.com/p/AF1QipM1Sy3wHBNuJlYRfmgeFqirPss5S9gl3ohZbcap=s680-w680-h510-rw",
      description: "Build your future with hands-on construction skills",
      enrolledCount: "1,200+",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      category: "Hospitality", 
      courses: ["Hotel Staff", "Restaurant Service"],
      duration: "2-4 months",
      certification: "Industry Certified",
      image: "https://cambriaschool.com/wp-content/uploads/2022/11/Hotel-Management-1.jpeg",
      description: "Excel in hospitality with world-class service training",
      enrolledCount: "850+",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      category: "Agriculture",
      courses: ["Farm Worker", "Greenhouse Specialist"],
      duration: "2-3 months", 
      certification: "Skills Certified",
      image: "https://www.greenviewcollege.co.za/wp-content/uploads/2022/08/Agricultural-Colleges-in-Johannesburg-768x513.jpg",
      description: "Grow your career in modern agricultural practices",
      enrolledCount: "650+",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: "Technical",
      courses: ["Welder", "Electrician"],
      duration: "4-8 months",
      certification: "Trade Certified",
      image: "https://germantec.lk/wp-content/uploads/2024/06/Electrician-Automobile-1-scaled.jpg",
      description: "Master technical skills for high-demand careers",
      enrolledCount: "980+",
      gradient: "from-purple-500/20 to-indigo-500/20"
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
              className="group"
            >
              <Card className="hover-lift h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image Header */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={program.image}
                    alt={program.category}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-80`}></div>
                  
                  {/* Enrolled Count Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 flex items-center gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.9 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <Users className="h-3 w-3" />
                    {program.enrolledCount}
                  </motion.div>
                  
                  {/* Category Title Overlay */}
                  <motion.div
                    className="absolute bottom-4 left-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {program.category}
                    </h3>
                  </motion.div>
                </div>

                <CardHeader className="pb-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.0 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <CardDescription className="text-sm text-muted-foreground mb-2">
                      {program.description}
                    </CardDescription>
                  </motion.div>
                  
                  {/* Course List */}
                  <div className="space-y-1">
                    {program.courses.map((course, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-sm font-medium text-primary"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 1.1 + index * 0.1 + idx * 0.1 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mt-4 mb-4">
                    <motion.div 
                      className="flex items-center justify-between text-sm text-muted-foreground rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.2 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-secondary" />
                        <span className="font-medium">Duration</span>
                      </div>
                      <span className="text-foreground font-semibold">{program.duration}</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center justify-between text-sm text-muted-foreground rounded-lg"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.3 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-secondary" />
                        <span className="font-medium">Certification</span>
                      </div>
                      <span className="text-foreground font-semibold text-xs">{program.certification}</span>
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-background hover:bg-primary/90 text-foreground hover:text-background border border-muted group/btn"
                      size="sm"
                    >
                      <span>View Program</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          {/* <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-secondary hover:text-white transition-colors duration-300"
          > */}
          <Button className="btn-hero">
            Explore All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProgramsSection;