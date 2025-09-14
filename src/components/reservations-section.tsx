import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const ReservationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle reservation submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const timeSlots = [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const partySizes = [
    "1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", 
    "6 Guests", "7 Guests", "8 Guests", "Large Party (9+)"
  ];

  return (
    <section ref={ref} id="reservations" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#08152A] to-[#0B1B3C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C19F60] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C19F60] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#C19F60] mb-6">
            Make a Reservation
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#C19F60] mx-auto mb-8"
          />
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Book your table for an unforgettable dining experience. We recommend making reservations 
            at least 24 hours in advance.
          </p>
        </motion.div>

        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-[#C19F60]/20"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-[#C19F60]" />
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    required
                    className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Last Name</label>
                  <Input 
                    type="text" 
                    required
                    className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <Input 
                    type="email" 
                    required
                    className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    required
                    className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Reservation Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#C19F60]" />
                    Date
                  </label>
                  <Input 
                    type="date" 
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="bg-white/5 border-[#C19F60]/30 text-white placeholder:text-white/50 focus:border-[#C19F60]"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#C19F60]" />
                    Time
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-[#C19F60]/30 text-white focus:border-[#C19F60]">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0B1B3C] border-[#C19F60]/30">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="text-white hover:bg-[#C19F60]/20">
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-white mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-[#C19F60]" />
                    Party Size
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-[#C19F60]/30 text-white focus:border-[#C19F60]">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0B1B3C] border-[#C19F60]/30">
                      {partySizes.map((size) => (
                        <SelectItem key={size} value={size} className="text-white hover:bg-[#C19F60]/20">
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-white mb-2">Special Requests (Optional)</label>
                <textarea
                  className="w-full bg-white/5 border border-[#C19F60]/30 rounded-md px-3 py-2 text-white placeholder:text-white/50 focus:border-[#C19F60] focus:outline-none focus:ring-2 focus:ring-[#C19F60]/20 min-h-[100px]"
                  placeholder="Any dietary restrictions, special occasions, seating preferences..."
                />
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  required
                  className="mt-1 accent-[#C19F60]"
                />
                <label className="text-white/80 text-sm leading-relaxed">
                  I agree to the reservation terms and understand that cancellations must be made 
                  at least 2 hours in advance. Large parties may be subject to a service charge.
                </label>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#C19F60] hover:bg-[#C19F60]/90 text-[#0B1B3C] py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Confirm Reservation
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-[#C19F60] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#C19F60] mb-4">Reservation Confirmed!</h3>
              <p className="text-white/90 mb-6">
                Thank you for your reservation. You'll receive a confirmation email shortly.
              </p>
              <p className="text-white/70">
                We look forward to serving you at Soraa.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#C19F60]/20">
              <Calendar className="w-8 h-8 text-[#C19F60] mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Advance Booking</h4>
              <p className="text-white/70 text-sm">Reservations recommended 24 hours in advance</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#C19F60]/20">
              <Clock className="w-8 h-8 text-[#C19F60] mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Cancellation Policy</h4>
              <p className="text-white/70 text-sm">Free cancellation up to 2 hours before</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-[#C19F60]/20">
              <Users className="w-8 h-8 text-[#C19F60] mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Large Parties</h4>
              <p className="text-white/70 text-sm">Groups of 8+ please call for special arrangements</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationsSection;