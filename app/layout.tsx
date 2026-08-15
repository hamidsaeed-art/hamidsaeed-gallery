import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Hamid Saeed Gallery — Contemporary Art in Basra",
  description: "Official website for Hamid Saeed Gallery (جاليري حامد سعيد), a fine-art institution in Basra, Iraq.",
  openGraph: {
    title: "Hamid Saeed Gallery — Contemporary Art in Basra",
    description: "A vital fine-art gallery documenting southern Iraqi aesthetics and contemporary visual art.",
    locale: "ar_IQ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="antialiased bg-[#F5F2EB] text-[#111111] selection:bg-[#A30018] selection:text-[#F5F2EB]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
