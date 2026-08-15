'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { lang, dict, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: dict.nav.home, href: '#hero' },
    { label: dict.nav.about, href: '#about' },
    { label: dict.nav.artists, href: '#artists' },
    { label: dict.nav.exhibitions, href: '#exhibitions' },
    { label: dict.nav.artworks, href: '#artworks' },
    { label: dict.nav.journal, href: '#journal' },
    { label: dict.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F2EB]/90 backdrop-blur-md border-b border-[#111111]/10 py-4 shadow-xs'
          : 'bg-[#F5F2EB]/60 backdrop-blur-xs py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#hero" className="group flex flex-col">
          <span className="text-lg md:text-xl font-bold tracking-tight text-[#111111] group-hover:text-[#A30018] transition-colors">
            {lang === 'ar' ? 'جاليري حامد سعيد' : 'HAMID SAEED GALLERY'}
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#666666] font-medium">
            {lang === 'ar' ? 'البصرة — العراق' : 'Basra — Iraq'}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#111111]/80 hover:text-[#A30018] transition-colors relative py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#111111]/20 text-xs font-semibold text-[#111111] hover:bg-[#111111] hover:text-[#F5F2EB] transition-all cursor-pointer"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{dict.nav.switchLang}</span>
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#111111] hover:text-[#A30018] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F5F2EB] border-b border-[#111111]/10 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[#111111] hover:text-[#A30018] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
