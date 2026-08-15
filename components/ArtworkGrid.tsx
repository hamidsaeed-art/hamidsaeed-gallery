'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { SectionHeading } from '@/components/SectionHeading';
import { MOCK_ARTWORKS, Artwork } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Brush, Ruler, Calendar as CalendarIcon, Tag } from 'lucide-react';

export const ArtworkGrid: React.FC = () => {
  const { lang, dict } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const categories = [
    { id: 'all', label: dict.artworks.all },
    { id: 'basra', label: dict.artworks.basraNature },
    { id: 'abstract', label: dict.artworks.abstract },
    { id: 'portrait', label: dict.artworks.portrait },
    { id: 'collection', label: dict.artworks.collection },
  ];

  const filteredArtworks =
    activeCategory === 'all'
      ? MOCK_ARTWORKS
      : MOCK_ARTWORKS.filter((item) => item.category === activeCategory);

  return (
    <section id="artworks" className="py-24 bg-[#EAE6DB]/40 border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag={dict.artworks.tag}
          title={dict.artworks.title}
          subtitle={dict.artworks.subtitle}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111111] text-[#F5F2EB] shadow-xs'
                  : 'bg-[#F5F2EB] text-[#666666] border border-[#111111]/10 hover:border-[#111111]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art, idx) => {
              const title = lang === 'ar' ? art.titleAr : art.titleEn;
              const medium = lang === 'ar' ? art.mediumAr : art.mediumEn;

              return (
                <motion.div
                  key={art.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-[#F5F2EB] border border-[#111111]/10 flex flex-col justify-between group hover:border-[#111111] transition-all shadow-xs overflow-hidden"
                >
                  {/* Canvas Placeholder Frame */}
                  <div
                    onClick={() => setSelectedArtwork(art)}
                    className="relative w-full aspect-[4/3] museum-canvas-placeholder p-6 flex flex-col justify-between cursor-pointer group-hover:bg-[#E2DDD0] transition-colors border-b border-[#111111]/10"
                  >
                    <div className="flex justify-between items-center text-[10px] font-mono text-[#666666]">
                      <span className="uppercase">CATALOG #{art.id}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A30018]"></span>
                    </div>

                    <div className="my-auto text-center p-4">
                      <p className="editorial-title text-xl text-[#111111] mb-1">
                        {title}
                      </p>
                      <span className="text-[10px] text-[#666666] uppercase tracking-wider block">
                        {art.imagePlaceholder}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#111111]/80 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F2EB] text-[#111111] text-xs font-semibold tracking-wide">
                        <Maximize2 className="w-3.5 h-3.5 text-[#A30018]" />
                        {dict.artworks.viewDetails}
                      </span>
                    </div>
                  </div>

                  {/* Artwork Information */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-semibold tracking-widest text-[#A30018] uppercase">
                        {medium}
                      </span>
                      <span className="text-xs font-mono text-[#666666]">{art.year}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedArtwork(art)}
                      className="editorial-title text-2xl text-[#111111] mb-2 cursor-pointer hover:text-[#A30018] transition-colors"
                    >
                      {title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-[#666666] pt-4 border-t border-[#111111]/10">
                      <span>Hamid Saeed</span>
                      <span className="font-mono">{art.dimensions}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Artwork Inspection Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#F5F2EB] border border-[#111111]/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-6 left-6 rtl:left-auto rtl:right-6 p-2 text-[#111111] hover:text-[#A30018] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6">
                {/* Visual Canvas Area */}
                <div className="md:col-span-6 w-full aspect-[4/3] museum-canvas-placeholder border border-[#111111]/20 p-8 flex flex-col justify-between text-center">
                  <span className="text-[10px] font-mono text-[#666666] uppercase">
                    CANVAS SPECIFICATION PREVIEW
                  </span>
                  <div className="my-auto">
                    <p className="editorial-title text-2xl text-[#111111]">
                      {lang === 'ar' ? selectedArtwork.titleAr : selectedArtwork.titleEn}
                    </p>
                    <p className="text-xs text-[#666666] mt-2">
                      Image placeholder ready for high-resolution photography
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666]">
                    DIMENSIONS: {selectedArtwork.dimensions}
                  </span>
                </div>

                {/* Metadata Column */}
                <div className="md:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#A30018] uppercase tracking-widest block mb-1">
                      ARTWORK SPECIFICATIONS
                    </span>
                    <h2 className="editorial-title text-3xl text-[#111111] mb-2">
                      {lang === 'ar' ? selectedArtwork.titleAr : selectedArtwork.titleEn}
                    </h2>
                    <p className="text-sm text-[#666666] font-medium">By Hamid Saeed</p>
                  </div>

                  <div className="space-y-3 py-4 border-y border-[#111111]/10 text-xs text-[#111111]">
                    <div className="flex items-center gap-3">
                      <Brush className="w-4 h-4 text-[#A30018]" />
                      <span>
                        <strong>Medium:</strong>{' '}
                        {lang === 'ar' ? selectedArtwork.mediumAr : selectedArtwork.mediumEn}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="w-4 h-4 text-[#A30018]" />
                      <span>
                        <strong>Dimensions:</strong> {selectedArtwork.dimensions}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-4 h-4 text-[#A30018]" />
                      <span>
                        <strong>Year Created:</strong> {selectedArtwork.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tag className="w-4 h-4 text-[#A30018]" />
                      <span>
                        <strong>Category:</strong> {selectedArtwork.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#666666] leading-relaxed font-light">
                    {lang === 'ar' ? selectedArtwork.descriptionAr : selectedArtwork.descriptionEn}
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href="#contact"
                      onClick={() => setSelectedArtwork(null)}
                      className="px-6 py-3 bg-[#111111] text-[#F5F2EB] text-xs font-semibold tracking-wide hover:bg-[#A30018] transition-colors"
                    >
                      {dict.artworks.modalInquire}
                    </a>
                    <button
                      onClick={() => setSelectedArtwork(null)}
                      className="px-6 py-3 border border-[#111111]/30 text-[#111111] text-xs font-semibold tracking-wide hover:bg-[#111111]/5 transition-colors cursor-pointer"
                    >
                      {dict.artworks.modalClose}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
