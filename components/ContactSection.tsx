'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { SectionHeading } from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { dict } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: 'Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', subject: 'Inquiry', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#EAE6DB]/40 border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          tag={dict.contact.tag}
          title={dict.contact.title}
          subtitle={dict.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Institutional Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#F5F2EB] border border-[#111111]/10 p-8 space-y-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EAE6DB] border border-[#111111]/10 text-[#A30018]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    {dict.contact.addressLabel}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {dict.contact.addressVal}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#111111]/10">
                <div className="p-3 bg-[#EAE6DB] border border-[#111111]/10 text-[#A30018]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    {dict.contact.phoneLabel}
                  </h4>
                  <p className="text-xs text-[#666666]">
                    {dict.contact.phoneVal}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#111111]/10">
                <div className="p-3 bg-[#EAE6DB] border border-[#111111]/10 text-[#A30018]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    {dict.contact.emailLabel}
                  </h4>
                  <p className="text-xs text-[#666666]">
                    {dict.contact.emailVal}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#111111]/10">
                <div className="p-3 bg-[#EAE6DB] border border-[#111111]/10 text-[#A30018]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    {dict.contact.hoursLabel}
                  </h4>
                  <p className="text-xs text-[#666666]">
                    {dict.contact.hoursVal}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Card Embed Placeholder */}
            <div className="bg-[#F5F2EB] border border-[#111111]/10 p-4 text-center">
              <span className="text-[10px] font-mono text-[#666666] uppercase tracking-widest block mb-2">
                GOOGLE MAPS LOCATION (BASRA)
              </span>
              <a
                href="https://maps.google.com/?q=Al-Abbasiya+Basra+Iraq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#A30018] hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open Directions in Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F5F2EB] border border-[#111111]/10 p-8 shadow-xs">
              <h3 className="editorial-title text-2xl text-[#111111] mb-6">
                Transmit Gallery Inquiry
              </h3>

              {submitted ? (
                <div className="p-6 bg-[#EAE6DB] border border-[#A30018]/30 text-[#111111] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A30018]" />
                  <span className="text-xs font-semibold">{dict.contact.successToast}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                      {dict.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={dict.contact.namePlaceholder}
                      className="w-full px-4 py-3 bg-[#EAE6DB]/60 border border-[#111111]/15 text-xs text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                      {dict.contact.subjectLabel}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#EAE6DB]/60 border border-[#111111]/15 text-xs text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    >
                      <option value="Inquiry">General Inquiry / Gallery Visit</option>
                      <option value="Acquisition">Artwork Acquisition Request</option>
                      <option value="Exhibition">Exhibition Proposal</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                      {dict.contact.messageLabel}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 bg-[#EAE6DB]/60 border border-[#111111]/15 text-xs text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-[#F5F2EB] text-xs font-bold uppercase tracking-widest hover:bg-[#A30018] transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{dict.contact.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
