import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Music, Clock, Users } from 'lucide-react';

const NightlifeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const events = [
    {
      day: "Monday",
      event: "Live Jazz Night",
      time: "8:00 PM - 12:00 AM"
    },
    {
      day: "Friday",
      event: "DJ Set & Dancing",
      time: "9:00 PM - 2:00 AM"
    },
    {
      day: "Saturday",
      event: "Acoustic Sessions",
      time: "7:00 PM - 11:00 PM"
    }
  ];

  return (
    <section ref={ref} id="nightlife" className="py-24 px-6 lg:px-8 bg-[#0B1B3C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C19F60] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C19F60] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1745052811242-86b6cff302c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMG5pZ2h0bGlmZSUyMGxvdW5nZXxlbnwxfHx8fDE3NTc4NjkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cocktail bar and nightlife"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3C]/60 to-transparent" />
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-8 right-8 bg-[#C19F60] text-[#0B1B3C] px-4 py-2 rounded-full font-bold"
              >
                Open Until 2AM
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#C19F60] mb-6">
                Nightlife Lounge
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '120px' } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-[#C19F60] mb-8"
              />
            </div>

            <p className="text-lg text-white/90 leading-relaxed">
              As the evening unfolds, Soraa transforms into a sophisticated lounge where craft cocktails, 
              premium spirits, and live entertainment create the perfect atmosphere for an unforgettable night.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              Our expert mixologists craft signature cocktails using artisanal ingredients, while our curated 
              music program features live jazz, acoustic sessions, and DJ sets throughout the week.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C19F60]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Music className="w-6 h-6 text-[#C19F60]" />
                </div>
                <h4 className="font-bold text-white mb-1">Live Music</h4>
                <p className="text-sm text-white/70">Weekly performances</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C19F60]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-[#C19F60]" />
                </div>
                <h4 className="font-bold text-white mb-1">Late Hours</h4>
                <p className="text-sm text-white/70">Open until 2AM</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#C19F60]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-[#C19F60]" />
                </div>
                <h4 className="font-bold text-white mb-1">Private Area</h4>
                <p className="text-sm text-white/70">VIP sections</p>
              </div>
            </div>

            {/* Weekly Events */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#C19F60] mb-4">Weekly Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.day}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex justify-between items-center border-b border-white/10 pb-2"
                  >
                    <div>
                      <div className="font-bold text-white">{event.day}</div>
                      <div className="text-[#C19F60]">{event.event}</div>
                    </div>
                    <div className="text-white/70 text-sm">{event.time}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button className="bg-[#C19F60] hover:bg-[#C19F60]/90 text-[#0B1B3C] px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
                Explore Our Drink Menu
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NightlifeSection;