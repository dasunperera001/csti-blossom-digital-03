import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const CTABannerSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary"></div> */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-8" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to hire certified candidates?
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Get access to our pool of trained, certified candidates ready for deployment
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.2 }}>
              <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold px-12 py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
                Request Job Quota
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02, y: -2 }} transition={{ duration: 0.2 }}>
              <Button 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary font-semibold px-12 py-6 rounded-lg hover:bg-primary-foreground hover:text-primary-light transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                {/* <Phone className="mr-2 h-5 w-5" /> */}
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[
              { icon: Phone, title: "Call Us Today", subtitle: "Get immediate assistance", contact: "+94 11 234 5678" },
              { icon: Mail, title: "Email Us", subtitle: "Professional support", contact: "info@cstibureau.lk" },
              { icon: MessageCircle, title: "Live Chat", subtitle: "Instant responses", contact: "Available 24/7" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80 mb-2">{item.subtitle}</p>
                <p className="text-secondary font-bold text-lg">{item.contact}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABannerSection;