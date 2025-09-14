import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1743793055305-fda66f0a929d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50JTIwZGluaW5nfGVufDF8fHx8MTc1Nzg2OTIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Elegant restaurant interior",
      category: "Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwZ291cm1ldCUyMGZvb2QlMjBwbGF0aW5nfGVufDF8fHx8MTc1Nzg2OTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Gourmet food plating",
      category: "Food"
    },
    {
      src: "https://images.unsplash.com/photo-1745052811242-86b6cff302c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMG5pZ2h0bGlmZSUyMGxvdW5nZXxlbnwxfHx8fDE3NTc4NjkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cocktail bar atmosphere",
      category: "Bar"
    },
    {
      src: "https://images.unsplash.com/photo-1523221007758-aa51505fe180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3NlcyUyMGVsZWdhbnQlMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NTc4NjkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wine glasses on elegant table",
      category: "Ambiance"
    },
    {
      src: "https://images.unsplash.com/photo-1692758344348-dd94f4db1848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2hlZiUyMGNvb2tpbmclMjBraXRjaGVufGVufDF8fHx8MTc1Nzg0MzU5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Chef preparing cuisine",
      category: "Kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1571585835576-170807b5878e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBhbWJpYW5jZXxlbnwxfHx8fDE3NTc4NjkyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury restaurant ambiance",
      category: "Ambiance"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <>
      <section ref={ref} id="gallery" className="py-24 px-6 lg:px-8 bg-[#0B1B3C]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#C19F60] mb-6">
              Gallery
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '80px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-[#C19F60] mx-auto mb-8"
            />
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Take a visual journey through our elegant spaces, exquisite cuisine, and vibrant atmosphere.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0B1B3C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#C19F60] font-bold text-lg">{image.category}</div>
                    <div className="text-white text-sm mt-1">Click to view</div>
                  </div>
                </div>
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-[#C19F60] text-[#0B1B3C] px-3 py-1 rounded-full text-sm font-bold">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-[#C19F60] text-[#0B1B3C] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C19F60]/90 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#C19F60] text-[#0B1B3C] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C19F60]/90 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#C19F60] text-[#0B1B3C] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C19F60]/90 transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image */}
              <ImageWithFallback
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 bg-[#0B1B3C]/80 backdrop-blur-sm text-white p-4 rounded-lg">
                <div className="text-[#C19F60] font-bold">{galleryImages[selectedImage].category}</div>
                <div className="text-sm">{galleryImages[selectedImage].alt}</div>
                <div className="text-xs text-white/70 mt-1">
                  {selectedImage + 1} of {galleryImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;