import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const SuccessStoriesSection = () => {
  const successStories = [
    {
      name: "Ahmed Hassan",
      role: "Construction Supervisor - Israel",
      quote: "CSTI Bureau changed my life. Now I support my family and gained valuable experience.",
      employer: "Binyan Construction Ltd",
      image: "https://media.istockphoto.com/id/660150716/photo/young-businessman-with-beard-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=bmOLrjsgfJziLXsfquG87i_tvjD4GsPj41HAvzRcflQ="
    },
    {
      name: "Priya Sharma", 
      role: "Hotel Manager - UAE",
      quote: "The training was excellent and deployment was smooth. Highly recommend CSTI Bureau.",
      employer: "Emirates Hotel Group",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVQ9Pwsa_RzUP6wgp_BsEhhggmkSNKs6IfA&s"
    },
    {
      name: "Kamal Perera",
      role: "Agricultural Technician - Netherlands", 
      quote: "Professional training and great support throughout the entire process.",
      employer: "Dutch AgriTech BV",
      image: "https://media.istockphoto.com/id/646378724/photo/portrait-of-mid-adult-man-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=ve-ZgzDmVlotwF-z0hs4G5659jXVCuqErNdRk_SHpFI="
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
            Candidate Success Stories
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Real success stories from our candidates worldwide
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
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
                    className="flex items-center gap-4 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.img 
                      src={story.image} 
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.0 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.1 + index * 0.15 
                      }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-lg">{story.name}</CardTitle>
                      <CardDescription className="text-sm">{story.role}</CardDescription>
                    </motion.div>
                  </motion.div>
                  <motion.blockquote 
                    className="text-muted-foreground italic"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.2 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    "{story.quote}"
                  </motion.blockquote>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.4 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-muted-foreground">@ {story.employer}</span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" size="sm">
                        See full case study
                      </Button>
                    </motion.div>
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

export default SuccessStoriesSection;