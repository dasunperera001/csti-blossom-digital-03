import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Strategic Business Consulting",
    "Human Resource Development",
    "Operations Excellence",
    "Financial Advisory",
    "Project Management",
    "Professional Training"
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Training Programs",
    "Client Success Stories",
    "Career Opportunities",
    "Contact Us"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <motion.footer 
      className="bg-primary text-primary-foreground"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">CSTI Bureau</h3>
              <p className="text-secondary text-sm font-medium">Consultancy & Training Institute</p>
            </motion.div>
            
            <motion.p 
              className="text-primary-foreground/80 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Sri Lanka's premier consultancy and training bureau, dedicated to empowering businesses 
              with innovative solutions and strategic insights for sustainable growth.
            </motion.p>

            {/* Contact Information */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>123 Business District,</p>
                  <p>Colombo 03, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">+94 11 234 5678</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">info@cstibureau.lk</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">www.cstibureau.lk</span>
                </div>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="text-lg font-semibold mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.6 + index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.8 + index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h4 className="text-lg font-semibold mb-6 text-secondary">Stay Connected</h4>
            
            <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest insights, training updates, and business tips.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-r-lg hover:bg-secondary-dark transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-medium mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div 
        className="border-primary-foreground/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-0">
          <div className="pt-8 pb-8 border-t border-primary-foreground/10">
            <div className="md:flex md:items-center md:justify-between">
              <div className="text-sm text-primary-foreground/60">
                <p>&copy; {currentYear} CSTI Bureau. All rights reserved.</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <div className="flex flex-wrap gap-6 text-sm">
                  <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                    Cookie Policy
                  </a>
                  <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default FooterSection;