export type Language = 'en' | 'ar';

export interface Dictionary {
  nav: {
    home: string;
    artists: string;
    exhibitions: string;
    artworks: string;
    journal: string;
    about: string;
    contact: string;
    switchLang: string;
  };
  hero: {
    subtitle: string;
    location: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quote: string;
  };
  about: {
    tag: string;
    title: string;
    lead: string;
    p1: string;
    p2: string;
    locationTitle: string;
    locationDesc: string;
    placeholderNote: string;
  };
  artists: {
    tag: string;
    title: string;
    subtitle: string;
    placeholderBadge: string;
  };
  exhibitions: {
    tag: string;
    title: string;
    subtitle: string;
    current: string;
    upcoming: string;
    past: string;
  };
  artworks: {
    tag: string;
    title: string;
    subtitle: string;
    all: string;
    basraNature: string;
    abstract: string;
    portrait: string;
    collection: string;
    viewDetails: string;
    placeholderTitle: string;
    placeholderHint: string;
    modalInquire: string;
    modalClose: string;
  };
  journal: {
    tag: string;
    title: string;
    subtitle: string;
    readArticle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    phoneVal: string;
    emailLabel: string;
    emailVal: string;
    hoursLabel: string;
    hoursVal: string;
    nameLabel: string;
    namePlaceholder: string;
    subjectLabel: string;
    messageLabel: string;
    submitBtn: string;
    successToast: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      artists: 'Artists',
      exhibitions: 'Exhibitions',
      artworks: 'Artworks',
      journal: 'Journal',
      about: 'About',
      contact: 'Contact',
      switchLang: 'العربية',
    },
    hero: {
      subtitle: 'Contemporary Fine Art Institution',
      location: 'Basra — Iraq',
      ctaPrimary: 'Explore the Gallery',
      ctaSecondary: 'Visit Gallery Space',
      quote: 'A vital cultural hub documenting southern Iraqi aesthetics through contemporary visual arts.',
    },
    about: {
      tag: 'INSTITUTION & IDENTITY',
      title: 'About Hamid Saeed Gallery',
      lead: 'Hamid Saeed Gallery is an independent contemporary fine-art space located in central Basra, Iraq.',
      p1: 'Founded by artist Hamid Saeed (MFA, Alexandria University), the gallery serves as a dynamic sanctuary for visual dialogue, bringing together contemporary southern Iraqi artists, exhibitions, and cultural programming.',
      p2: 'The gallery explores environmental memory, palm grove symbolism, human emotion, and abstract light inspired by Abu Al-Khaseeb and the Shatt al-Arab landscape.',
      locationTitle: 'Gallery Space in Basra',
      locationDesc: 'Al-Abbasiya District (Near Al-Farahidi Cultural Street), Basra, Iraq.',
      placeholderNote: 'Detailed archival history and verified institutional milestones will be updated periodically.',
    },
    artists: {
      tag: 'CURATED TALENT',
      title: 'Represented Artists',
      subtitle: 'Showcasing contemporary visual artists from Basra and across Iraq.',
      placeholderBadge: 'Artist Roster Placeholder',
    },
    exhibitions: {
      tag: 'CURATORIAL PROGRAMMING',
      title: 'Exhibitions Archive',
      subtitle: 'A chronological catalog of past, present, and upcoming fine-art showcases.',
      current: 'Current Exhibition',
      upcoming: 'Upcoming Showcase',
      past: 'Past Exhibitions',
    },
    artworks: {
      tag: 'PERMANENT & CURATED COLLECTION',
      title: 'Artworks & Catalog',
      subtitle: 'Selected fine-art works and contemporary visual studies. Images ready for replacement.',
      all: 'All Works',
      basraNature: 'Basra Nature',
      abstract: 'Abstract & Expressionist',
      portrait: 'Portraits & Figures',
      collection: 'Gallery Collection',
      viewDetails: 'View Artwork Specs',
      placeholderTitle: 'Artwork Canvas Placeholder',
      placeholderHint: 'Click to inspect metadata & placement specs',
      modalInquire: 'Inquire for Acquisition',
      modalClose: 'Close Window',
    },
    journal: {
      tag: 'GALLERY CHRONICLES',
      title: 'Journal & Essays',
      subtitle: 'Critical essays, gallery news, and cultural discourses from the Basra art scene.',
      readArticle: 'Read Essay',
    },
    contact: {
      tag: 'VISIT & INQUIRIES',
      title: 'Connect with the Gallery',
      subtitle: 'We welcome art collectors, curators, and visitors to our venue in Basra.',
      addressLabel: 'Gallery Address',
      addressVal: 'Al-Abbasiya District (Behind Planning Dept / Near Al-Farahidi St), Basra, Iraq',
      phoneLabel: 'Telephone / WhatsApp',
      phoneVal: 'Details available upon inquiry',
      emailLabel: 'Email Contact',
      emailVal: 'info@hamidsaeedgallery.com (Placeholder)',
      hoursLabel: 'Visiting Hours',
      hoursVal: 'Daily: 4:00 PM – 9:00 PM (Local Time)',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'Enter your name',
      subjectLabel: 'Inquiry Subject',
      messageLabel: 'Message Details',
      submitBtn: 'Transmit Message',
      successToast: 'Thank you. Your message has been sent to the gallery team.',
    },
    footer: {
      tagline: 'Hamid Saeed Gallery — Contemporary Art in Basra, Iraq.',
      copyright: 'All Rights Reserved © 2026 Hamid Saeed Gallery.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      artists: 'الفنانون',
      exhibitions: 'المعارض',
      artworks: 'الأعمال',
      journal: 'دفتر الجاليري',
      about: 'عن الجاليري',
      contact: 'تواصل',
      switchLang: 'English',
    },
    hero: {
      subtitle: 'صرح تشكيلي ومعرض فني معاصر',
      location: 'البصرة — العراق',
      ctaPrimary: 'استكشف الجاليري',
      ctaSecondary: 'مقر الجاليري بالبصرة',
      quote: 'مساحة ثُقافية مستقلة تُوثق جماليات الجنوب العراقي برؤية تشكيلية معاصرة.',
    },
    about: {
      tag: 'الهوية والصرح الثقافي',
      title: 'عن جاليري حامد سعيد',
      lead: 'جاليري حامد سعيد هو فضاء فني تشكيلي مستقل يقع في قلب مدينة البصرة بالعراق.',
      p1: 'أسسه الفنان التشكيلي حامد سعيد (حاصل على ماجستير الفنون الجميلة من جامعة الإسكندرية) ليكون منبراً حياً للحوار البصري واحتضان التجارب الفنية للشعراء والفنانين والشباب.',
      p2: 'تستلهم التجارب المعروضة مفردات البيئة الجنوبيّة؛ من بساتين أبي الخصيب ونخيلها وشط العرب، إلى التعبيرات الإنسانية والتجريد الرمزي المعاصر.',
      locationTitle: 'مقر الكاليري في البصرة',
      locationDesc: 'منطقة العباسية (خلف دائرة التخطيط / قرب شارع الفراهيدي للثقافة والكتاب)، البصرة، العراق.',
      placeholderNote: 'يتم تحديث الأرشيف والسجل التاريخي باستمرار مع اعتماد البيانات الموثقة.',
    },
    artists: {
      tag: 'نخبة التشكيل',
      title: 'الفنانون المشاركون',
      subtitle: 'تجارب تشكيلية معاصرة من البصرة ومختلف المحافظات العراقية.',
      placeholderBadge: 'سجل الفنانين الشاغر',
    },
    exhibitions: {
      tag: 'البرنامج القيادي والفني',
      title: 'أرشيف المعارض',
      subtitle: 'سجل شامل للمعارض الشخصية والجماعية والورش الثقافية.',
      current: 'المعرض الحالي',
      upcoming: 'المعرض القادم',
      past: 'المعارض السابقة',
    },
    artworks: {
      tag: 'المقتنيات والمجموعة الفنية',
      title: 'الأعمال والكتالوج الفني',
      subtitle: 'مجموعة مختارة من اللوحات والدراسات البصرية. جاهزة لاستبدال الصور لاحقاً.',
      all: 'جميع الأعمال',
      basraNature: 'طبيعة البصرة',
      abstract: 'تجريدي وتعبيري',
      portrait: 'بورتريه وإنسان',
      collection: 'مقتنيات الكاليري',
      viewDetails: 'معاينة تفاصيل اللوحة',
      placeholderTitle: 'خانة اللوحة الشاغرة',
      placeholderHint: 'اضغط لمعاينة البيانات الفنية والقياسات',
      modalInquire: 'طلب اقتناء العمل',
      modalClose: 'إغلاق النافذة',
    },
    journal: {
      tag: 'مدونات الكاليري',
      title: 'دفتر الجاليري والمقالات',
      subtitle: 'قراءات نقدية، أخبار المعارض، وحوارات ثُقافية من المشهد الفني البصري.',
      readArticle: 'قراءة المقال',
    },
    contact: {
      tag: 'الاتصال والزيارة',
      title: 'تواصل مع الكاليري',
      subtitle: 'نرحب بمقتني اللوحات، النقاد، والزوار في صالة العرض بالبصرة.',
      addressLabel: 'عنوان الجاليري',
      addressVal: 'البصرة - منطقة العباسية (خلف دائرة التخطيط / قرب شارع الفراهيدي)',
      phoneLabel: 'الهاتف والواتساب',
      phoneVal: 'متاح عند الاستفسار',
      emailLabel: 'البريد الإلكتروني',
      emailVal: 'info@hamidsaeedgallery.com (مؤقت)',
      hoursLabel: 'ساعات الاستقبال',
      hoursVal: 'يومياً: من 4:00 مساءً حتى 9:00 مساءً (توقيت البصرة)',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'أدخل اسمك الكريم',
      subjectLabel: 'سبب التواصل',
      messageLabel: 'تفاصيل الرسالة',
      submitBtn: 'إرسال الرسالة',
      successToast: 'شكراً لك، تم تسليم رسالتك لفريق الجاليري بنجاح.',
    },
    footer: {
      tagline: 'جاليري حامد سعيد — الفن التشكيلي المعاصر في البصرة، العراق.',
      copyright: 'جميع الحقوق محفوظة &copy; 2026 جاليري حامد سعيد.',
    },
  },
};
