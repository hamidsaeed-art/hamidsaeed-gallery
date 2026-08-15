'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { SectionHeading } from '@/components/SectionHeading';
import { MOCK_EXHIBITIONS } from '@/lib/data';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export const ExhibitionsSection: React.FC = () => {
  const { lang, dict } = useLanguage();

  const getStatusBadge = (status: 'current' | 'upcoming' | 'past') => {
    switch (status) {
      case 'current':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A30018] text-[#F5F2EB] text-[11px] font-semibold tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            {dict.exhibitions.current}
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#111111] text-[#F5F2EB] text-[11px] font-semibold tracking-wider uppercase">
            {dict.exhibitions.upcoming}
          </span>
        );
      case 'past':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#111111]/30 text-[#666666] text-[11px] font-semibold tracking-wider uppercase">
            {dict.exhibitions.past}
          </span>
        );
    }
  };

  return (
    <section id="exhibitions" className="py-24 bg-[#F5F2EB] border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag={dict.exhibitions.tag}
          title={dict.exhibitions.title}
          subtitle={dict.exhibitions.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {MOCK_EXHIBITIONS.map((ex, idx) => {
            const title = lang === 'ar' ? ex.titleAr : ex.titleEn;
            const dates = lang === 'ar' ? ex.datesAr : ex.datesEn;
            const venue = lang === 'ar' ? ex.venueAr : ex.venueEn;
            const desc = lang === 'ar' ? ex.descriptionAr : ex.descriptionEn;

            return (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#EAE6DB]/40 border border-[#111111]/10 p-8 flex flex-col justify-between hover:border-[#111111] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {getStatusBadge(ex.status)}
                    <span className="text-xs font-mono text-[#666666]">
                      EXHIBITION CATALOG #{ex.id}
                    </span>
                  </div>

                  {/* Exhibition Image Cover Placeholder */}
                  <div className="w-full aspect-[16/9] museum-canvas-placeholder mb-6 border border-[#111111]/10 flex flex-col items-center justify-center p-4">
                    <span className="text-xs font-mono text-[#666666] uppercase tracking-wider mb-1">
                      EXHIBITION COVER PLACEHOLDER
                    </span>
                    <span className="text-[10px] text-[#666666]/80">
                      Ready for exhibition photography
                    </span>
                  </div>

                  <h3 className="editorial-title text-2xl text-[#111111] mb-3 group-hover:text-[#A30018] transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed font-light mb-6">
                    {desc}
                  </p>
                </div>

                <div className="space-y-2 pt-6 border-t border-[#111111]/10 text-xs text-[#666666]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#A30018]" />
                    <span>{dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#A30018]" />
                    <span>{venue}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
