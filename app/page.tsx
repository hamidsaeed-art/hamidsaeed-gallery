'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ArtistsSection } from '@/components/ArtistsSection';
import { ExhibitionsSection } from '@/components/ExhibitionsSection';
import { ArtworkGrid } from '@/components/ArtworkGrid';
import { JournalSection } from '@/components/JournalSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F2EB] text-[#111111] overflow-x-hidden selection:bg-[#A30018] selection:text-[#F5F2EB]">
      <Navbar />
      <Hero />
      <AboutSection />
      <ArtistsSection />
      <ExhibitionsSection />
      <ArtworkGrid />
      <JournalSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
