import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "New Partnership with European Agricultural Consortium",
      date: "Dec 15, 2024",
      excerpt: "Expanding opportunities for agricultural workers in 5 EU countries...",
      image: "https://www.pv-magazine.com/wp-content/uploads/2024/05/glint-project-2-1200x900.jpg"
    },
    {
      title: "Record Placement Numbers in Q4 2024",
      date: "Dec 10, 2024", 
      excerpt: "Over 500 candidates successfully deployed across partner countries...",
      image: "https://pbs.twimg.com/media/DboIP3JWAAAOIyQ.jpg"
    },
    {
      title: "New Training Facility Opens in Colombo",
      date: "Dec 5, 2024",
      excerpt: "State-of-the-art facility to accommodate growing demand...",
      image: "https://mgt.sjp.ac.lk/bec/wp-content/uploads/2017/09/1-Featured-Image.jpg"
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
            Latest News & Announcements
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Stay updated with our latest developments
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
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
                <motion.div 
                  className="aspect-video overflow-hidden rounded-t-lg"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.15 
                  }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <CardHeader>
                  <motion.div 
                    className="text-sm text-muted-foreground mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.0 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    {article.date}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.1 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.2 + index * 0.15 
                    }}
                    viewport={{ once: true }}
                  >
                    <CardDescription className="mb-4">{article.excerpt}</CardDescription>
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
                    <Button variant="ghost" size="sm">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-2" />
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

export default NewsSection;