import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Upload, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    country: "",
    rolesNeeded: "",
    candidateCount: "",
    startDate: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <motion.section 
      className="py-16 bg-background"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Request Job Quota
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Tell us about your hiring needs and we'll connect you with qualified candidates
            </motion.p>
            
            {formSubmitted ? (
              <Card className="p-8 text-center bg-green-50 border-green-200">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Request Submitted Successfully!</h3>
                <p className="text-green-700">We'll contact you within 24 hours to discuss your requirements.</p>
              </Card>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input 
                        id="companyName"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input 
                        id="contactName"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="israel">Israel</SelectItem>
                          <SelectItem value="uae">UAE</SelectItem>
                          <SelectItem value="netherlands">Netherlands</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="rolesNeeded">Role(s) Needed *</Label>
                    <Textarea 
                      id="rolesNeeded"
                      placeholder="Describe the positions you need to fill"
                      required
                      value={formData.rolesNeeded}
                      onChange={(e) => setFormData(prev => ({ ...prev, rolesNeeded: e.target.value }))}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="candidateCount">Number of Candidates *</Label>
                      <Input 
                        id="candidateCount"
                        type="number"
                        required
                        value={formData.candidateCount}
                        onChange={(e) => setFormData(prev => ({ ...prev, candidateCount: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Preferred Start Date</Label>
                      <Input 
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fileUpload">Additional Documents (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drop files here or click to upload job descriptions, requirements, etc.
                      </p>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full btn-hero" data-analytics="contact-form-submit">
                    Submit Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </form>
                </Card>
              </motion.div>
            )}
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-sm text-muted-foreground">
                      123 Business District, Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">+94 11 234 5678</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">employers@cstibureau.lk</p>
                    <p className="text-sm text-muted-foreground">24/7 support</p>
                  </div>
                </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Updated: Office Location now shows an embedded Google Map with modern responsive UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Office Location</h3>
              <div className="rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video w-full">
                  <iframe
                    title="CSTI Bureau Location"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4089025203994!2d80.0914322!3d6.3410538999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d0b745071614499%3A0x1ddd68848edee700!2sCSTI%20Bureau!5e0!3m2!1sen!2slk!4v1756548344213!5m2!1sen!2slk"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 bg-background flex items-center justify-between">
                  <div>
                    <p className="font-medium">CSTI Bureau</p>
                    <p className="text-sm text-muted-foreground">123 Business District, Colombo 03, Sri Lanka</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/SKA7NL1y8Y6LWKkH8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactFormSection;