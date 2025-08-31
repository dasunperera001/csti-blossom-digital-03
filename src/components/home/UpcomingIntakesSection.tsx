import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, CheckCircle, AlertCircle, ArrowRight, Award } from "lucide-react";

const UpcomingIntakesSection = () => {
  const upcomingIntakes = [
    { 
      date: "Jan 15, 2025", 
      course: "Construction Skills Training", 
      status: "Open",
      category: "Construction",
      duration: "3 months",
      location: "Galle Training Center",
      spotsTotal: 50,
      spotsAvailable: 32,
      applicationDeadline: "Jan 10, 2025",
      skills: ["Mason", "Carpenter", "Steel Fixer"],
      certification: "Gov. Certified",
      // gradient: "from-orange-500/20 to-red-500/20"
      gradient: "from-yellow-500/10 to-yellow-500/5"
    },
    { 
      date: "Feb 1, 2025", 
      course: "Hospitality Excellence Program", 
      status: "Open",
      category: "Hospitality",
      duration: "2 months",
      location: "Galle Training Center",
      spotsTotal: 40,
      spotsAvailable: 28,
      applicationDeadline: "Jan 25, 2025",
      skills: ["Hotel Service", "Restaurant Operations", "Guest Relations"],
      certification: "Industry Certified",
      // gradient: "from-blue-500/20 to-cyan-500/20"
      gradient: "from-yellow-500/10 to-yellow-500/5"
    },
    { 
      date: "Feb 20, 2025", 
      course: "Modern Agriculture Program", 
      status: "Limited",
      category: "Agriculture",
      duration: "2.5 months",
      location: "Hambanthota Agicultural Center",
      spotsTotal: 30,
      spotsAvailable: 5,
      applicationDeadline: "Feb 15, 2025",
      skills: ["Greenhouse Technology", "Organic Farming", "Irrigation Systems"],
      certification: "Skills Certified",
      // gradient: "from-green-500/20 to-emerald-500/20"
      gradient: "from-yellow-500/10 to-yellow-500/5"
    },
    { 
      date: "Mar 5, 2025", 
      course: "Technical Excellence Track", 
      status: "Open",
      category: "Technical",
      duration: "4 months",
      location: "Galle Technical Institute",
      spotsTotal: 35,
      spotsAvailable: 22,
      applicationDeadline: "Feb 28, 2025",
      skills: ["Welding", "Electrical Systems", "Plumbing"],
      certification: "Trade Certified",
      // gradient: "from-purple-500/20 to-indigo-500/20"
      gradient: "from-yellow-500/10 to-yellow-500/5"
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
            Upcoming Training Intakes
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Secure your spot in our upcoming certification programs
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {upcomingIntakes.map((intake, index) => (
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
                {/* Header with Gradient Background */}
                <div className={`relative p-6 pb-2 border-b border-gray-200 bg-gradient-to-r ${intake.gradient}`}>
                {/* <div className={`relative p-6 pb-2 border-b border-gray-200 bg-gradient-to-r`}> */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.8 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{intake.date}</span>
                      </div>
                      <CardTitle className="text-xl mb-1">{intake.course}</CardTitle>
                      {/* <p className="text-sm text-muted-foreground">{intake.category} Program</p> */}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.9 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <span className={`px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1 ${
                        intake.status === 'Open' 
                          ? 'bg-green-500/20 text-green-700 border border-green-200' 
                          : 'bg-yellow-500/20 text-yellow-700 border border-yellow-200'
                      }`}>
                        {intake.status === 'Open' ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                        {intake.status}
                      </span>
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Program Details */}
                  <div className="space-y-4 mb-6">
                    <motion.div 
                      className="grid grid-cols-2 gap-4 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.0 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{intake.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-secondary" />
                        <span className="text-muted-foreground">Cert:</span>
                        <span className="font-medium text-xs">{intake.certification}</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.1 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{intake.location}</span>
                    </motion.div>

                    {/* Availability Progress */}
                    {/* <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.2 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-secondary" />
                          <span className="text-muted-foreground">Available Spots</span>
                        </div>
                        <span className="font-medium text-primary">
                          {intake.spotsAvailable}/{intake.spotsTotal}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div 
                          className={`h-2 rounded-full ${
                            intake.spotsAvailable / intake.spotsTotal > 0.5 
                              ? 'bg-green-500' 
                              : intake.spotsAvailable / intake.spotsTotal > 0.2 
                                ? 'bg-yellow-500' 
                                : 'bg-red-500'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(intake.spotsAvailable / intake.spotsTotal) * 100}%` }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 1.3 + index * 0.1 
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div> */}

                    {/* Skills List */}
                    {/* <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.4 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-muted-foreground mb-2">Skills Covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {intake.skills.map((skill, idx) => (
                          <motion.span 
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 1.5 + index * 0.1 + idx * 0.05 
                            }}
                            viewport={{ once: true }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div> */}

                    {/* Application Deadline */}
                    {/* <motion.div 
                      className="p-3 bg-muted/50 rounded-lg border"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.6 + index * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs text-muted-foreground">Application Deadline</p>
                      <p className="text-sm font-medium text-destructive">{intake.applicationDeadline}</p>
                    </motion.div> */}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.7 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      // className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                      className="w-full bg-background text-foreground border border-muted hover:bg-primary/90 hover:text-primary-foreground group/btn"
                      size="lg"
                      disabled={intake.status === 'Limited' && intake.spotsAvailable < 5}
                    >
                      <span>
                        {intake.status === 'Limited' && intake.spotsAvailable < 5 
                          ? 'Almost Full - Apply Now' 
                          : 'Apply for Program'
                        }
                      </span>
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
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button className="btn-hero" size="lg">
              View All Training Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            viewport={{ once: true }}
          >
            Can't find what you're looking for? <span className="text-primary font-medium cursor-pointer hover:underline">Contact our admissions team</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UpcomingIntakesSection;