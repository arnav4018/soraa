import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const menuSections = {
    appetizers: [
      { name: "Oysters Rockefeller", description: "Fresh oysters with spinach, herbs, and hollandaise", price: "$18" },
      { name: "Tuna Tartare", description: "Yellowfin tuna with avocado, cucumber, and sesame", price: "$22" },
      { name: "Foie Gras", description: "Pan-seared foie gras with brioche and cherry compote", price: "$28" },
      { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil oil", price: "$16" }
    ],
    mains: [
      { name: "Wagyu Beef Tenderloin", description: "Premium Japanese wagyu with truffle sauce and seasonal vegetables", price: "$85" },
      { name: "Lobster Thermidor", description: "Maine lobster with brandy cream sauce and gruyere", price: "$58" },
      { name: "Duck Confit", description: "Slow-cooked duck leg with cherry reduction and wild rice", price: "$52" },
      { name: "Pan-Seared Sea Bass", description: "Fresh Atlantic sea bass with lemon butter and herb risotto", price: "$48" },
      { name: "Rack of Lamb", description: "New Zealand lamb with rosemary jus and roasted vegetables", price: "$62" },
      { name: "Vegetarian Tasting", description: "Seasonal vegetables with quinoa and tahini dressing", price: "$38" }
    ],
    desserts: [
      { name: "Chocolate Soufflé", description: "Dark chocolate soufflé with vanilla bean ice cream", price: "$14" },
      { name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar", price: "$12" },
      { name: "Tiramisu", description: "Traditional Italian dessert with espresso and mascarpone", price: "$13" },
      { name: "Lemon Tart", description: "Meyer lemon curd with graham cracker crust", price: "$11" }
    ],
    cocktails: [
      { name: "Soraa Signature", description: "Premium gin, elderflower, cucumber, and champagne", price: "$18" },
      { name: "Golden Hour", description: "Aged whiskey, honey, lemon, and rosemary", price: "$16" },
      { name: "Midnight in Paris", description: "Cognac, blackberry, thyme, and sparkling wine", price: "$20" },
      { name: "Smoke & Mirrors", description: "Mezcal, yellow chartreuse, lime, and agave", price: "$17" },
      { name: "Royal Treatment", description: "Champagne, elderflower, and gold leaf", price: "$25" },
      { name: "Old Fashioned", description: "Bourbon, demerara sugar, and orange bitters", price: "$15" }
    ]
  };

  return (
    <section ref={ref} id="menu" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-[#0A1630] to-[#0B1B3C]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#C19F60] mb-6">
            Our Menu
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#C19F60] mx-auto mb-8"
          />
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted selection of dishes and beverages, 
            each prepared with the finest ingredients and utmost attention to detail.
          </p>
        </motion.div>

        {/* Menu Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-sm mb-12">
              <TabsTrigger 
                value="appetizers" 
                className="data-[state=active]:bg-[#C19F60] data-[state=active]:text-[#0B1B3C] text-white/70"
              >
                Appetizers
              </TabsTrigger>
              <TabsTrigger 
                value="mains" 
                className="data-[state=active]:bg-[#C19F60] data-[state=active]:text-[#0B1B3C] text-white/70"
              >
                Main Courses
              </TabsTrigger>
              <TabsTrigger 
                value="desserts" 
                className="data-[state=active]:bg-[#C19F60] data-[state=active]:text-[#0B1B3C] text-white/70"
              >
                Desserts
              </TabsTrigger>
              <TabsTrigger 
                value="cocktails" 
                className="data-[state=active]:bg-[#C19F60] data-[state=active]:text-[#0B1B3C] text-white/70"
              >
                Cocktails
              </TabsTrigger>
            </TabsList>

            {Object.entries(menuSections).map(([section, items]) => (
              <TabsContent key={section} value={section} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 border border-[#C19F60]/20"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-[#C19F60]">{item.name}</h3>
                        <span className="text-lg font-bold text-white">{item.price}</span>
                      </div>
                      <p className="text-white/80 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Download Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6">Want to take our menu with you?</p>
          <Button className="bg-[#C19F60] hover:bg-[#C19F60]/90 text-[#0B1B3C] px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
            Download PDF Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;