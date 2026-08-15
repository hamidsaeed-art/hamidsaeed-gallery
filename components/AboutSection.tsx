'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { SectionHeading } from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import { Building2, Info, GraduationCap, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { dict } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#F5F2EB] border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag={dict.about.tag}
          title={dict.about.title}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-xl md:text-2xl text-[#111111] font-light editorial-title leading-relaxed">
              {dict.about.lead}
            </p>

            <p className="text-base text-[#666666] leading-relaxed font-light">
              {dict.about.p1}
            </p>

            <p className="text-base text-[#666666] leading-relaxed font-light">
              {dict.about.p2}
            </p>

            {/* Structured Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-[#EAE6DB]/60 border border-[#111111]/10 flex flex-col justify-between">
                <GraduationCap className="w-6 h-6 text-[#A30018] mb-4" />
                <h4 className="text-sm font-bold text-[#111111] mb-1">Hamid Saeed (MFA)</h4>
                <p className="text-xs text-[#666666]">
                  Master of Fine Arts graduate from Alexandria University, specializing in contemporary southern expressionism.
                </p>
              </div>

              <div className="p-6 bg-[#EAE6DB]/60 border border-[#111111]/10 flex flex-col justify-between">
                <Building2 className="w-6 h-6 text-[#A30018] mb-4" />
                <h4 className="text-sm font-bold text-[#111111] mb-1">{dict.about.locationTitle}</h4>
                <p className="text-xs text-[#666666]">
                  {dict.about.locationDesc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Institutional Note & Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-8 bg-[#111111] text-[#F5F2EB] border border-[#111111] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F5F2EB]/20">
                <span className="text-xs font-mono tracking-widest text-[#F5F2EB]/60 uppercase">
                  INSTITUTIONAL NOTICE
                </span>
                <Info className="w-4 h-4 text-[#A30018]" />
              </div>

              <h3 className="editorial-title text-2xl leading-snug">
                Preserving Southern Cultural Heritage in Basra
              </h3>

              <p className="text-xs text-[#F5F2EB]/80 leading-relaxed font-light">
                {dict.about.placeholderNote}
              </p>

              <a
                href="https://maps.app.goo.gl/548Sy5QcCBfNWvqa8"
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 border-t border-[#F5F2EB]/20 flex items-center gap-3 text-xs text-[#F5F2EB]/80 hover:text-[#A30018] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#A30018]" />
                <span>Al-Abbasiya District, Basra, Iraq (View on Google Maps)</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
