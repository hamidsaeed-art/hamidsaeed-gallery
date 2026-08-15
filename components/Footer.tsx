'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export const Footer: React.FC = () => {
  const { lang, dict } = useLanguage();

  return (
    <footer className="bg-[#111111] text-[#F5F2EB] py-16 border-t border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex flex-col text-center md:text-start">
          <span className="text-xl font-bold editorial-title tracking-tight text-[#F5F2EB]">
            {lang === 'ar' ? 'جاليري حامد سعيد' : 'HAMID SAEED GALLERY'}
          </span>
          <span className="text-xs text-[#F5F2EB]/60 mt-1 font-light">
            {dict.footer.tagline}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F5F2EB]/70">
          <a href="#hero" className="hover:text-[#A30018] transition-colors">{dict.nav.home}</a>
          <a href="#about" className="hover:text-[#A30018] transition-colors">{dict.nav.about}</a>
          <a href="#artists" className="hover:text-[#A30018] transition-colors">{dict.nav.artists}</a>
          <a href="#exhibitions" className="hover:text-[#A30018] transition-colors">{dict.nav.exhibitions}</a>
          <a href="#artworks" className="hover:text-[#A30018] transition-colors">{dict.nav.artworks}</a>
          <a href="#contact" className="hover:text-[#A30018] transition-colors">{dict.nav.contact}</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#F5F2EB]/40 font-mono text-center md:text-end">
          <span>{dict.footer.copyright}</span>
        </div>

      </div>
    </footer>
  );
};
