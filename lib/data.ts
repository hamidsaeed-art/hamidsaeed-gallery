export interface Artwork {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'basra' | 'abstract' | 'portrait' | 'collection';
  mediumEn: string;
  mediumAr: string;
  dimensions: string;
  year: string;
  descriptionEn: string;
  descriptionAr: string;
  imagePlaceholder: string;
}

export interface Artist {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  locationEn: string;
  locationAr: string;
  bioEn: string;
  bioAr: string;
}

export interface Exhibition {
  id: string;
  status: 'current' | 'upcoming' | 'past';
  titleEn: string;
  titleAr: string;
  datesEn: string;
  datesAr: string;
  venueEn: string;
  venueAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface Article {
  id: string;
  date: string;
  authorEn: string;
  authorAr: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
}

export const MOCK_ARTWORKS: Artwork[] = [
  {
    id: '1',
    titleEn: 'Scent of Winter',
    titleAr: 'رائحة الشتاء',
    category: 'abstract',
    mediumEn: 'Oil on Canvas',
    mediumAr: 'ألوان زيتية على كانفاس',
    dimensions: '120 × 90 cm',
    year: '2021',
    descriptionEn: 'An expressionist study exploring winter light and atmospheric humidity in Southern Iraq.',
    descriptionAr: 'تجربة تعبيرية تتناول الضوء الشتوي والرطوبة الجوية في جنوب العراق.',
    imagePlaceholder: 'Artwork Canvas #1',
  },
  {
    id: '2',
    titleEn: 'Abu Al-Khaseeb Groves',
    titleAr: 'بساتين أبي الخصيب',
    category: 'basra',
    mediumEn: 'Oil & Mixed Media on Canvas',
    mediumAr: 'ألوان زيتية ومواد مختلفة',
    dimensions: '150 × 100 cm',
    year: '2022',
    descriptionEn: 'A visual tribute to the palm groves and waterways of Abu Al-Khaseeb in Basra.',
    descriptionAr: 'احتفاء بصري ببيئة النخيل والسواقي في قضاء أبي الخصيب بمحافظة البصرة.',
    imagePlaceholder: 'Artwork Canvas #2',
  },
  {
    id: '3',
    titleEn: 'Between Parentheses',
    titleAr: 'بين قوسين',
    category: 'abstract',
    mediumEn: 'Mixed Media & Gold Leaf',
    mediumAr: 'تقنيات مختلفة وورق ذهب',
    dimensions: '100 × 100 cm',
    year: '2020',
    descriptionEn: 'Textural exploration of human presence and symbolic boundaries in modern Iraq.',
    descriptionAr: 'معالجة ملمسية للوجود الإنساني والحدود الرمزية في العراق المعاصر.',
    imagePlaceholder: 'Artwork Canvas #3',
  },
  {
    id: '4',
    titleEn: 'Banks of Shatt al-Arab',
    titleAr: 'ضفاف شط العرب',
    category: 'basra',
    mediumEn: 'Oil on Linen',
    mediumAr: 'ألوان زيتية على كتاّن',
    dimensions: '110 × 85 cm',
    year: '2023',
    descriptionEn: 'Reflections of golden twilight across the majestic riverfront of Basra.',
    descriptionAr: 'انعكاسات الشفق الذهبي على مجرى شط العرب في مدينة البصرة.',
    imagePlaceholder: 'Artwork Canvas #4',
  },
  {
    id: '5',
    titleEn: 'Southern Features',
    titleAr: 'ملامح جنوبية',
    category: 'portrait',
    mediumEn: 'Oil on Canvas',
    mediumAr: 'ألوان زيتية على كانفاس',
    dimensions: '90 × 70 cm',
    year: '2022',
    descriptionEn: 'An emotional portrait capturing the wisdom and warmth of southern Iraqi elders.',
    descriptionAr: 'بورتريه تعبيري يختزل حكايات ودفء كبار السن في الجنوب العراقي.',
    imagePlaceholder: 'Artwork Canvas #5',
  },
  {
    id: '6',
    titleEn: 'Zero Gravity',
    titleAr: 'لا جاذبية',
    category: 'collection',
    mediumEn: 'Oil on Canvas',
    mediumAr: 'ألوان زيتية على كانفاس',
    dimensions: '140 × 100 cm',
    year: '2023',
    descriptionEn: 'Contemporary abstract study presented at the Amman international solo showcase.',
    descriptionAr: 'دراسة تجريدية معاصرة قدّمها الفنان في معرضه الفردي بالعاصمة الأردنية عمّان.',
    imagePlaceholder: 'Artwork Canvas #6',
  },
];

export const MOCK_ARTISTS: Artist[] = [
  {
    id: 'hamid-saeed',
    nameEn: 'Hamid Saeed',
    nameAr: 'حامد سعيد',
    roleEn: 'Founder & Fine Artist (MFA)',
    roleAr: 'فنان تشكيلي ومؤسس الجاليري',
    locationEn: 'Basra, Iraq',
    locationAr: 'البصرة، العراق',
    bioEn: 'Born in Abu Al-Khaseeb (1976), holding an MFA from Alexandria University. A leading figure in contemporary Iraqi visual arts.',
    bioAr: 'من مواليد أبي الخصيب (1976)، حاصل على ماجستير الفنون الجميلة من جامعة الإسكندرية. أحد قادة الحركة التشكيلية المعاصرة.',
  },
  {
    id: 'artist-placeholder-1',
    nameEn: 'Artist Name (Placeholder)',
    nameAr: 'اسم الفنان (مؤقت)',
    roleEn: 'Guest Visual Artist',
    roleAr: 'فنان تشكيلي ضيف',
    locationEn: 'Baghdad, Iraq',
    locationAr: 'بغداد، العراق',
    bioEn: 'Contemporary Iraqi artist participating in seasonal guest showcases at Hamid Saeed Gallery.',
    bioAr: 'فنان عراقي معاصر يستعرض أحدث أعماله ضمن معارض الجاليري الموسمية.',
  },
  {
    id: 'artist-placeholder-2',
    nameEn: 'Artist Name (Placeholder)',
    nameAr: 'اسم الفنان (مؤقت)',
    roleEn: 'Sculptor & Installation Artist',
    roleAr: 'نحّات وفنان تركيب بصرّي',
    locationEn: 'Basra, Iraq',
    locationAr: 'البصرة، العراق',
    bioEn: 'Exploring three-dimensional forms inspired by Mesopotamian heritage and Basra palm textures.',
    bioAr: 'تجربة في النحت والمجسمات التشكيلية المستلهمة من الحضارة البابلية ونخيل الجنوب.',
  },
];

export const MOCK_EXHIBITIONS: Exhibition[] = [
  {
    id: 'ex-1',
    status: 'current',
    titleEn: 'Zero Gravity — Contemporary Forms',
    titleAr: 'معرض: لا جاذبية — الأشكال المعاصرة',
    datesEn: 'Autumn 2023 – Present',
    datesAr: 'خريف 2023 – مستمر',
    venueEn: 'Hamid Saeed Gallery — Main Hall, Basra',
    venueAr: 'جاليري حامد سعيد — القاعة الرئيسية، البصرة',
    descriptionEn: 'A solo showcase exploring visual weightlessness and modern abstract compositions.',
    descriptionAr: 'معرض شخصي قدّم فيه الفنان رؤية تجريدية تتناول التحرر البصري وخفة الكتل.',
  },
  {
    id: 'ex-2',
    status: 'upcoming',
    titleEn: 'Voices from the South — Group Showcase',
    titleAr: 'معرض: أصوات من الجنوب — معرض جماعي',
    datesEn: 'Spring 2027 (Upcoming)',
    datesAr: 'ربيع 2027 (قريباً)',
    venueEn: 'Hamid Saeed Gallery, Basra',
    venueAr: 'جاليري حامد سعيد، البصرة',
    descriptionEn: 'A curated collective exhibition bringing together emerging and established southern Iraqi painters.',
    descriptionAr: 'معرض جماعي يحتضن نخبة من الفنانين الشباب والرواد من جنوب العراق.',
  },
  {
    id: 'ex-3',
    status: 'past',
    titleEn: 'Things Resembling Painting',
    titleAr: 'معرض: أشياء تشبه الرسم',
    datesEn: '2020',
    datesAr: '2020',
    venueEn: 'Basra Cultural Space',
    venueAr: 'المركز الثقافي بالبصرة',
    descriptionEn: 'Solo exhibition highlighting raw material experimentation and tactile surface textures.',
    descriptionAr: 'معرض شخصي ركّز على التجريب الخامي واستخدام وسائط متعددة تعكس الملمس.',
  },
  {
    id: 'ex-4',
    status: 'past',
    titleEn: 'Between Parentheses',
    titleAr: 'معرض: بين قوسين',
    datesEn: '2018',
    datesAr: '2018',
    venueEn: 'Gallery Main Space',
    venueAr: 'قاعة الجاليري الرئيسية',
    descriptionEn: 'Investigating human presence, memory, and spatial boundaries in Basra.',
    descriptionAr: 'دراسة بصرية تسبر العلاقة بين الإنسان والمحيط في الجنوب العراقي.',
  },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    date: 'August 2026',
    authorEn: 'Editorial Board',
    authorAr: 'هيئة التحرير',
    titleEn: 'The Palm Grove as Visual Metaphor in Southern Art',
    titleAr: 'النخلة كرمز بصرّي وتعبيري في الفن الجنوبي',
    excerptEn: 'An essay analyzing how Hamid Saeed reinterprets Abu Al-Khaseeb palm groves beyond romantic landscape.',
    excerptAr: 'قراءة نقدية تناقش استلهام الفنان حامد سعيد لبساتين أبي الخصيب وتوظيفها بأسلوب تجريدي معاصر.',
  },
  {
    id: 'art-2',
    date: 'June 2026',
    authorEn: 'Art Critic Review',
    authorAr: 'رأي ناقد فني',
    titleEn: 'Independent Galleries and the Resurgence of Basra Cultural Scene',
    titleAr: 'الجاليريات المستقلة وإعادة إحياء المشهد الثقافي في البصرة',
    excerptEn: 'How private art spaces in Al-Abbasiya are fostering new artistic generations in Southern Iraq.',
    excerptAr: 'كيف تساهم صالات العرض المستقلة في العباسية بإحياء الحراك التشكيلي في البصرة.',
  },
];
