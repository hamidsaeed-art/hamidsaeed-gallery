'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Dictionary, dictionaries } from '@/lib/dictionary';

interface LanguageContextType {
  lang: Language;
  dict: Dictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic for Basra gallery

  useEffect(() => {
    // Update HTML dir and lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, dict: dictionaries[lang], toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
