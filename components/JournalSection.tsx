'use client';

import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { SectionHeading } from '@/components/SectionHeading';
import { MOCK_ARTICLES } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const { lang, dict } = useLanguage();

  return (
    <section id="journal" className="py-24 bg-[#F5F2EB] border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag={dict.journal.tag}
          title={dict.journal.title}
          subtitle={dict.journal.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {MOCK_ARTICLES.map((article, idx) => {
            const title = lang === 'ar' ? article.titleAr : article.titleEn;
            const author = lang === 'ar' ? article.authorAr : article.authorEn;
            const excerpt = lang === 'ar' ? article.excerptAr : article.excerptEn;

            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#EAE6DB]/50 border border-[#111111]/10 p-8 flex flex-col justify-between hover:border-[#111111] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#666666] mb-4">
                    <span>{article.date}</span>
                    <span className="uppercase tracking-widest font-mono">{author}</span>
                  </div>

                  <h3 className="editorial-title text-2xl text-[#111111] mb-3 group-hover:text-[#A30018] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed font-light mb-6">
                    {excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#111111] group-hover:text-[#A30018] transition-colors">
                    {dict.journal.readArticle}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#666666] group-hover:text-[#A30018] transition-colors" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
