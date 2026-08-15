'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { SectionHeading } from '@/components/SectionHeading';
import { MOCK_ARTISTS } from '@/lib/data';
import { motion } from 'framer-motion';
import { UserCheck } from 'lucide-react';

export const ArtistsSection: React.FC = () => {
  const { lang, dict } = useLanguage();

  return (
    <section id="artists" className="py-24 bg-[#EAE6DB]/40 border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag={dict.artists.tag}
          title={dict.artists.title}
          subtitle={dict.artists.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {MOCK_ARTISTS.map((artist, idx) => {
            const name = lang === 'ar' ? artist.nameAr : artist.nameEn;
            const role = lang === 'ar' ? artist.roleAr : artist.roleEn;
            const location = lang === 'ar' ? artist.locationAr : artist.locationEn;
            const bio = lang === 'ar' ? artist.bioAr : artist.bioEn;

            return (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F5F2EB] border border-[#111111]/10 p-6 flex flex-col justify-between hover:border-[#111111] transition-all group shadow-xs"
              >
                <div>
                  {/* Portrait Placeholder Frame */}
                  <div className="w-full aspect-[4/3] museum-canvas-placeholder mb-6 flex flex-col items-center justify-center p-4 border border-[#111111]/10 group-hover:border-[#A30018]/40 transition-colors">
                    <UserCheck className="w-8 h-8 text-[#666666] mb-2 group-hover:text-[#A30018] transition-colors" />
                    <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
                      {dict.artists.placeholderBadge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono tracking-widest text-[#A30018] uppercase block mb-1">
                    {location}
                  </span>

                  <h3 className="editorial-title text-2xl text-[#111111] mb-2 group-hover:text-[#A30018] transition-colors">
                    {name}
                  </h3>

                  <p className="text-xs font-semibold text-[#666666] mb-4">
                    {role}
                  </p>

                  <p className="text-xs text-[#666666] leading-relaxed font-light">
                    {bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#111111]/10 flex items-center justify-between text-xs text-[#666666]">
                  <span>ARTIST ROSTER</span>
                  <span className="font-mono">#0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
