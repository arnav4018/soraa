import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Utensils, Star, Clock } from 'lucide-react';

const DiningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const dishes = [
    {
      name: "Wagyu Beef Tenderloin",
      description: "Premium Japanese wagyu with truffle sauce and seasonal vegetables",
      price: "$85",
      image: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwZ291cm1ldCUyMGZvb2QlMjBwbGF0aW5nfGVufDF8fHx8MTc1Nzg2OTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Pan-Seared Sea Bass",
      description: "Fresh Atlantic sea bass with lemon butter and herb risotto",
      price: "$48",
      image: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwZ291cm1ldCUyMGZvb2QlMjBwbGF0aW5nfGVufDF8fHx8MTc1Nzg2OTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Duck Confit",
      description: "Slow-cooked duck leg with cherry reduction and wild rice",
      price: "$52",
      image: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwZ291cm1ldCUyMGZvb2QlMjBwbGF0aW5nfGVufDF8fHx8MTc1Nzg2OTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="dining" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#0B1B3C] to-[#0A1630]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#C19F60] mb-6">
            Dining Experience
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '120px' } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#C19F60] mx-auto mb-8"
          />
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Indulge in our carefully curated menu featuring world-class cuisine prepared by renowned chefs 
            using the finest ingredients from around the globe.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#C19F60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8 text-[#C19F60]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fine Dining</h3>
            <p className="text-white/70">Exquisite cuisine crafted with precision and artistry</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#C19F60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-[#C19F60]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Award Winning</h3>
            <p className="text-white/70">Michelin-starred chefs creating memorable experiences</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#C19F60]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#C19F60]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fresh Daily</h3>
            <p className="text-white/70">Ingredients sourced daily for optimal flavor and quality</p>
          </div>
        </motion.div>

        {/* Signature Dishes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#C19F60] text-[#0B1B3C] px-3 py-1 rounded-full font-bold">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#C19F60] mb-2">{dish.name}</h3>
                <p className="text-white/80 mb-4">{dish.description}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C19F60] fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Button
            onClick={scrollToMenu}
            className="bg-[#C19F60] hover:bg-[#C19F60]/90 text-[#0B1B3C] px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            View Our Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningSection;