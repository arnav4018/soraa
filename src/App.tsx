import React from 'react';
import Navigation from './components/navigation';
import HeroSection from './components/hero-section';
import AboutSection from './components/about-section';
import DiningSection from './components/dining-section';
import NightlifeSection from './components/nightlife-section';
import MenuSection from './components/menu-section';
import GallerySection from './components/gallery-section';
import ReservationsSection from './components/reservations-section';
import ContactSection from './components/contact-section';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1B3C] text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DiningSection />
      <NightlifeSection />
      <MenuSection />
      <GallerySection />
      <ReservationsSection />
      <ContactSection />
    </div>
  );
}