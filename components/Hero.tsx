'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, dict } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#F5F2EB]">
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#EAE6DB] to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Header Text */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-[#A30018]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#666666]">
                {dict.hero.location}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-normal editorial-title text-[#111111] leading-[1.1] mb-6"
            >
              {lang === 'ar' ? (
                <>
                  جاليري <span className="italic text-[#111111]/80">حامد سعيد</span>
                </>
              ) : (
                <>
                  HAMID SAEED <span className="italic text-[#111111]/80">GALLERY</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#666666] font-light max-w-xl mb-10 leading-relaxed"
            >
              {dict.hero.subtitle} — {dict.hero.quote}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#artworks"
                className="px-8 py-4 bg-[#111111] text-[#F5F2EB] text-sm font-semibold tracking-wide hover:bg-[#A30018] transition-all duration-300 shadow-md"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-[#111111]/30 text-[#111111] text-sm font-semibold tracking-wide hover:border-[#111111] hover:bg-[#111111]/5 transition-all duration-300"
              >
                {dict.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Museum Exhibition Hero Frame Placeholder */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full aspect-[4/5] museum-canvas-placeholder p-8 flex flex-col justify-between shadow-2xl border border-[#111111]/15"
            >
              <div className="flex justify-between items-start">
                <span className="text-[11px] tracking-widest text-[#666666] uppercase font-mono">
                  ARCHIVAL CANVAS NO. 01
                </span>
                <span className="w-2 h-2 rounded-full bg-[#A30018]"></span>
              </div>

              <div className="my-auto text-center p-6 border border-[#111111]/10 bg-[#F5F2EB]/50 backdrop-blur-xs">
                <h3 className="editorial-title text-2xl text-[#111111] mb-2">
                  {lang === 'ar' ? 'معرض جنوبي معاصر' : 'Contemporary Southern Exhibition'}
                </h3>
                <p className="text-xs text-[#666666]">
                  {lang === 'ar'
                    ? 'إطار جاهز لاستبدال الصورة باللوحة الرئيسية'
                    : 'Curatorial Main Exhibition Artwork Placeholder'}
                </p>
              </div>

              <div className="flex justify-between items-end text-xs text-[#666666]">
                <span>BASRA — IRAQ</span>
                <span>EST. 2012</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center pt-8 border-t border-[#111111]/10 text-xs text-[#666666]">
        <span>CONTEMPORARY FINE ART INSTITUTION</span>
        <a href="#about" className="inline-flex items-center gap-2 hover:text-[#A30018] transition-colors">
          <span>{lang === 'ar' ? 'انتقل إلى الأسفل' : 'SCROLL DOWN'}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
