import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["3rd Floor, E4/105, Vandematram Square", "Arera Colony", "Bhopal, MP 462016" ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["9151515583, 9151515983", "Reservations & Inquiries"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@soraa-restaurant.com", "events@soraa-restaurant.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 5:00 PM - 11:00 PM", "Fri-Sat: 5:00 PM - 2:00 AM", "Sun: 5:00 PM - 10:00 PM"]
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/soraa_bhopal/" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <section ref={ref} id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#0B1B3C] to-[#08152A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#C19F60] mb-6">
            Contact Us
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#C19F60] mx-auto mb-8"
          />
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Get in touch for reservations, events, or any inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#C19F60] mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-[#C19F60]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#C19F60]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-white/80 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 h-64 flex items-center justify-center border border-[#C19F60]/20"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#C19F60] mx-auto mb-4" />
                <p className="text-white/80">Interactive Map</p>
                <p className="text-white/60 text-sm mt-2">3rd Floor, E4/105, Vandematram Square, Arera Colony</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-4"
            >
              <h4 className="font-bold text-[#C19F60]">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-[#C19F60]/20 rounded-full flex items-center justify-center hover:bg-[#C19F60] hover:text-[#0B1B3C] transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#C19F60]/20"
          >
            <h3 className="text-2xl font-bold text-[#C19F60] mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">First Name</label>
                  <Input 
                    type="text" 
                    className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Last Name</label>
                  <Input 
                    type="text" 
                    className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Email</label>
                <Input 
                  type="email" 
                  className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Phone</label>
                <Input 
                  type="tel" 
                  className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Subject</label>
                <Input 
                  type="text" 
                  className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <Textarea 
                  className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60] min-h-[120px]"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#C19F60] hover:bg-[#C19F60]/90 text-[#0B1B3C] py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16 pt-8 border-t border-[#C19F60]/20"
        >
          <div className="text-2xl font-bold text-[#C19F60] mb-2">SORAA</div>
          <p className="text-white/70">© 2024 Soraa Restaurant. All rights reserved.</p>
          <p className="text-white/60 text-sm mt-2">Dine With Us, Experience the Night</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;