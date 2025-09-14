import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 bg-[#0B1B3C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#C19F60] mb-6"
              >
                Our Story
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100px' } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-[#C19F60] mb-8"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/90 leading-relaxed"
            >
              At Soraa, we believe that dining is more than just a meal—it's an experience that awakens all your senses. 
              Our culinary journey began with a simple vision: to create a space where exceptional cuisine meets the vibrant 
              energy of nightlife.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-white/90 leading-relaxed"
            >
              Each dish is crafted with precision and passion by our world-class chefs, using only the finest ingredients 
              sourced from local artisans and international suppliers. As the sun sets, our restaurant transforms into an 
              elegant lounge where sophisticated cocktails and live entertainment create the perfect ambiance for an 
              unforgettable night.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C19F60] mb-2">15+</div>
                <div className="text-white/70">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C19F60] mb-2">50+</div>
                <div className="text-white/70">Signature Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C19F60] mb-2">200+</div>
                <div className="text-white/70">Premium Wines</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692758344348-dd94f4db1848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc1Nzg0MzU5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef preparing gourmet cuisine"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3C]/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute -bottom-8 -left-8 bg-[#C19F60] p-6 rounded-lg shadow-xl"
            >
              <div className="text-[#0B1B3C]">
                <div className="text-2xl font-bold mb-1">Bhopal's First</div>
                <div className="text-sm">Luxury Restaurant</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;