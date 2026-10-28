export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type Treatment = {
  id: string;
  name: string;
  detail: string;
  duration: string;
  priceFrom: number;
};

export type Content = {
  dir: "rtl" | "ltr";
  meta: { title: string; description: string };
  brand: string;
  nav: { treatments: string; clinic: string; doctors: string; faq: string; book: string };
  switchLabel: string;
  menu: string;
  close: string;
  hero: {
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    photoAlt: string;
    facts: { value: string; label: string }[];
    hoursTitle: string;
    openNow: string;
    closedNow: string;
    hours: { days: string; time: string }[];
    address: string;
  };
  treatments: {
    title: string;
    lead: string;
    from: string;
    currency: string;
    note: string;
    items: Treatment[];
  };
  visit: {
    title: string;
    steps: { title: string; detail: string }[];
  };
  clinic: {
    title: string;
    lead: string;
    photos: { key: "treatmentRoom" | "brightRoom" | "xrayReview"; alt: string; caption: string }[];
    points: string[];
  };
  doctors: {
    title: string;
    lead: string;
    items: { name: string; photo: "sara" | "ali" | "noor"; role: string; detail: string; since: string }[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  book: {
    title: string;
    lead: string;
    name: string;
    phone: string;
    phoneHint: string;
    treatment: string;
    treatmentPlaceholder: string;
    time: string;
    morning: string;
    evening: string;
    note: string;
    submit: string;
    errors: { name: string; phone: string; treatment: string };
    doneTitle: string;
    doneBody: string;
    again: string;
  };
  footer: {
    tagline: string;
    visitTitle: string;
    contactTitle: string;
    address: string;
    phone: string;
    whatsapp: string;
    concept: string;
    credit: string;
    photos: string;
  };
};

export const PHONE_DISPLAY = "+964 770 000 0000";
export const PHONE_LINK = "tel:+9647700000000";

const ar: Content = {
  dir: "rtl",
  meta: {
    title: "عيادة لومينا لطب الأسنان — الكرادة، بغداد",
    description:
      "علاج أسنان هادئ وواضح السعر في الكرادة. فحص وتنظيف، زراعة، تقويم شفاف، وطب أسنان الأطفال. احجز موعدك بسهولة.",
  },
  brand: "لومينا",
  nav: { treatments: "العلاجات", clinic: "العيادة", doctors: "الأطباء", faq: "أسئلة شائعة", book: "احجز موعد" },
  switchLabel: "English",
  menu: "القائمة",
  close: "إغلاق",
  hero: {
    title: "علاج أسنان هادئ، وسعر تعرفه قبل أن نبدأ",
    lead: "عيادة لومينا في الكرادة تشرح لك خطة العلاج وكلفتها كاملة قبل أي إجراء. بدون مفاجآت، وبدون استعجال.",
    primary: "احجز موعد",
    secondary: "اتصل بنا",
    photoAlt: "طبيب أسنان يفحص مريضة على كرسي العلاج",
    facts: [
      { value: "سعر مكتوب", label: "قبل أي علاج" },
      { value: "٣ اختصاصات", label: "تحت سقف واحد" },
      { value: "مواعيد طارئة", label: "في نفس اليوم" },
    ],
    hoursTitle: "أوقات الدوام",
    openNow: "مفتوح الآن",
    closedNow: "مغلق الآن",
    hours: [
      { days: "السبت – الخميس", time: "١٠ صباحاً – ٩ مساءً" },
      { days: "الجمعة", time: "مغلق" },
    ],
    address: "شارع ٦٢، الكرادة، بغداد",
  },
  treatments: {
    title: "العلاجات والأسعار",
    lead: "أسعار تبدأ من، بالدينار العراقي. السعر النهائي يُحدَّد بعد الفحص ويُكتب لك قبل البدء.",
    from: "يبدأ من",
    currency: "د.ع",
    note: "الأشعة السينية مشمولة مع أول فحص.",
    items: [
      { id: "checkup", name: "فحص وتنظيف", detail: "فحص شامل، أشعة، وتنظيف جير وتلميع.", duration: "٤٥ دقيقة", priceFrom: 25000 },
      { id: "filling", name: "حشوة تجميلية", detail: "حشوات بلون السن تدوم وتبدو طبيعية.", duration: "٣٠–٦٠ دقيقة", priceFrom: 35000 },
      { id: "root-canal", name: "علاج عصب", detail: "علاج العصب بجلسة أو جلستين مع تخدير موضعي كامل.", duration: "٦٠–٩٠ دقيقة", priceFrom: 120000 },
      { id: "implant", name: "زراعة الأسنان", detail: "زرعة مع تاج، بخطة مكتوبة من الفحص للتركيب.", duration: "٢–٤ أشهر", priceFrom: 750000 },
      { id: "aligners", name: "تقويم شفاف", detail: "قوالب شفافة شبه مخفية، مع متابعة شهرية.", duration: "٦–١٨ شهر", priceFrom: 1500000 },
      { id: "whitening", name: "تبييض الأسنان", detail: "تبييض في العيادة بجلسة واحدة، مع حماية للثة.", duration: "٩٠ دقيقة", priceFrom: 150000 },
      { id: "kids", name: "أسنان الأطفال", detail: "زيارات قصيرة ولطيفة، وقاية وحشوات وفلورايد.", duration: "٣٠ دقيقة", priceFrom: 20000 },
    ],
  },
  visit: {
    title: "كيف تجري زيارتك",
    steps: [
      { title: "احجز", detail: "عبر النموذج أو بالهاتف. نتصل بك لتأكيد الموعد خلال ساعات الدوام." },
      { title: "فحص وأشعة", detail: "الطبيب يفحص ويشرح لك ما يراه على الشاشة، بلغة واضحة." },
      { title: "خطة وسعر مكتوب", detail: "تستلم خطة العلاج وكلفتها كاملة. القرار لك، بدون ضغط." },
      { title: "العلاج والمتابعة", detail: "نبدأ عندما تكون جاهزاً، ونتابع معك بعد كل جلسة." },
    ],
  },
  clinic: {
    title: "داخل العيادة",
    lead: "مساحة هادئة ونظيفة، صُمّمت حتى تشعر بالراحة من لحظة دخولك.",
    photos: [
      { key: "treatmentRoom", alt: "غرفة علاج حديثة مع كرسي أسنان وإضاءة طبيعية", caption: "غرف علاج مجهّزة بأشعة رقمية عند كل كرسي" },
      { key: "brightRoom", alt: "كرسي علاج أبيض بجانب نافذة واسعة", caption: "غرف مضيئة وهادئة، بعيداً عن الزحام" },
      { key: "xrayReview", alt: "طبيب يراجع صور الأشعة على لوحة إضاءة", caption: "كل خطة تبدأ بأشعتك، مشروحة أمامك" },
    ],
    points: ["أدوات معقّمة ومغلّفة لكل مريض", "أشعة رقمية بإشعاع أقل", "طابق أرضي يسهل الوصول إليه"],
  },
  doctors: {
    title: "الأطباء",
    lead: "ثلاثة اختصاصات تحت سقف واحد، فلا تحتاج للتنقل بين العيادات.",
    items: [
      { name: "د. سارة الهاشمي", photo: "sara", role: "تقويم الأسنان", detail: "تقويم شفاف وتقليدي للكبار والمراهقين.", since: "١٢ سنة خبرة" },
      { name: "د. علي كاظم", photo: "ali", role: "زراعة وجراحة الفم", detail: "زراعة الأسنان، القلع الجراحي، وترميم الفك.", since: "١٥ سنة خبرة" },
      { name: "د. نور جابر", photo: "noor", role: "طب أسنان الأطفال", detail: "زيارات هادئة تبني ثقة الطفل بطبيب الأسنان.", since: "٩ سنوات خبرة" },
    ],
  },
  faq: {
    title: "أسئلة شائعة",
    items: [
      { q: "هل أعرف السعر قبل العلاج؟", a: "نعم. بعد الفحص تستلم خطة مكتوبة بكلفة كل خطوة، ولا نبدأ إلا بموافقتك." },
      { q: "هل العلاج مؤلم؟", a: "نستخدم تخديراً موضعياً لكل إجراء قد يسبب ألماً، ونتوقف متى ما طلبت." },
      { q: "هل يمكن الدفع بالأقساط؟", a: "للزراعة والتقويم يمكن تقسيم الكلفة على مراحل العلاج. نتفق على ذلك في الخطة المكتوبة." },
      { q: "من أي عمر تستقبلون الأطفال؟", a: "من أول سن يظهر. ننصح بأول زيارة قبل عمر السنتين." },
      { q: "ماذا أفعل في حالة طارئة؟", a: "اتصل بنا مباشرة خلال الدوام، ونحجز لك أقرب موعد في نفس اليوم إن أمكن." },
    ],
  },
  book: {
    title: "احجز موعدك",
    lead: "اترك اسمك ورقمك ونتصل بك لتأكيد الوقت المناسب.",
    name: "الاسم الكامل",
    phone: "رقم الهاتف",
    phoneHint: "مثال: 07701234567",
    treatment: "نوع العلاج",
    treatmentPlaceholder: "اختر العلاج",
    time: "الوقت المفضّل",
    morning: "صباحاً",
    evening: "مساءً",
    note: "ملاحظات (اختياري)",
    submit: "أرسل طلب الحجز",
    errors: {
      name: "اكتب اسمك حتى نعرف كيف نناديك.",
      phone: "اكتب رقماً عراقياً من ١١ رقماً يبدأ بـ 07.",
      treatment: "اختر نوع العلاج.",
    },
    doneTitle: "تم استلام طلب الحجز",
    doneBody: "في عيادة حقيقية، يتصل بك الاستقبال لتأكيد الموعد. هذا موقع تجريبي، لذا لم يُرسَل أي شيء.",
    again: "حجز موعد آخر",
  },
  footer: {
    tagline: "طب أسنان هادئ وواضح السعر في قلب الكرادة.",
    visitTitle: "زُرنا",
    contactTitle: "تواصل معنا",
    address: "شارع ٦٢، الكرادة، بغداد",
    phone: PHONE_DISPLAY,
    whatsapp: "واتساب",
    concept: "لومينا عيادة خيالية. هذا الموقع مشروع تصميم وتطوير تجريبي.",
    credit: "تصميم وتطوير مصطفى شاكر",
    photos: "الصور من Unsplash",
  },
};

const en: Content = {
  dir: "ltr",
  meta: {
    title: "Lumina Dental — Karrada, Baghdad",
    description:
      "Calm dental care with prices you know upfront. Checkups, implants, clear aligners, and children's dentistry in Karrada, Baghdad.",
  },
  brand: "Lumina",
  nav: { treatments: "Treatments", clinic: "The clinic", doctors: "Doctors", faq: "FAQ", book: "Book a visit" },
  switchLabel: "العربية",
  menu: "Menu",
  close: "Close",
  hero: {
    title: "Calm dental care, with the price agreed before we start",
    lead: "Lumina in Karrada walks you through your treatment plan and its full cost before any procedure. No surprises, no rush.",
    primary: "Book a visit",
    secondary: "Call us",
    photoAlt: "A dentist examining a patient in the treatment chair",
    facts: [
      { value: "Written price", label: "before any treatment" },
      { value: "3 specialties", label: "under one roof" },
      { value: "Emergency slots", label: "the same day" },
    ],
    hoursTitle: "Opening hours",
    openNow: "Open now",
    closedNow: "Closed now",
    hours: [
      { days: "Saturday – Thursday", time: "10 am – 9 pm" },
      { days: "Friday", time: "Closed" },
    ],
    address: "62nd Street, Karrada, Baghdad",
  },
  treatments: {
    title: "Treatments and prices",
    lead: "Starting prices in Iraqi dinar. Your final price is set after the exam and written down before we begin.",
    from: "From",
    currency: "IQD",
    note: "X-rays are included with your first exam.",
    items: [
      { id: "checkup", name: "Checkup and cleaning", detail: "Full exam, X-rays, scaling, and polish.", duration: "45 min", priceFrom: 25000 },
      { id: "filling", name: "Tooth-colored filling", detail: "Durable fillings that match your natural teeth.", duration: "30–60 min", priceFrom: 35000 },
      { id: "root-canal", name: "Root canal", detail: "One or two visits, with full local anesthesia.", duration: "60–90 min", priceFrom: 120000 },
      { id: "implant", name: "Dental implant", detail: "Implant and crown, with a written plan from exam to fitting.", duration: "2–4 months", priceFrom: 750000 },
      { id: "aligners", name: "Clear aligners", detail: "Near-invisible aligners with monthly check-ins.", duration: "6–18 months", priceFrom: 1500000 },
      { id: "whitening", name: "Teeth whitening", detail: "Single in-clinic session, with gum protection.", duration: "90 min", priceFrom: 150000 },
      { id: "kids", name: "Children's dentistry", detail: "Short, gentle visits: prevention, fillings, fluoride.", duration: "30 min", priceFrom: 20000 },
    ],
  },
  visit: {
    title: "How your visit works",
    steps: [
      { title: "Book", detail: "Use the form or call. We'll ring you to confirm during opening hours." },
      { title: "Exam and X-rays", detail: "Your dentist shows you what they see on screen, in plain language." },
      { title: "Written plan and price", detail: "You get the full plan and its cost in writing. The decision is yours." },
      { title: "Treatment and follow-up", detail: "We start when you're ready, and check in after every session." },
    ],
  },
  clinic: {
    title: "Inside the clinic",
    lead: "A quiet, spotless space, designed so you feel at ease from the moment you walk in.",
    photos: [
      { key: "treatmentRoom", alt: "A modern treatment room with a dental chair and natural light", caption: "Treatment rooms with digital X-ray at every chair" },
      { key: "brightRoom", alt: "A white treatment chair beside a large window", caption: "Bright, quiet rooms, away from crowded corridors" },
      { key: "xrayReview", alt: "A dentist reviewing X-ray images on a light box", caption: "Every plan starts with your X-rays, explained to you" },
    ],
    points: ["Sterilized, sealed instruments for every patient", "Digital X-rays with lower radiation", "Step-free, ground-floor access"],
  },
  doctors: {
    title: "Doctors",
    lead: "Three specialties under one roof, so you don't have to move between clinics.",
    items: [
      { name: "Dr. Sara Al-Hashimi", photo: "sara", role: "Orthodontics", detail: "Clear and traditional braces for adults and teens.", since: "12 years in practice" },
      { name: "Dr. Ali Kadhim", photo: "ali", role: "Implants and oral surgery", detail: "Implants, surgical extractions, and jaw restoration.", since: "15 years in practice" },
      { name: "Dr. Noor Jaber", photo: "noor", role: "Children's dentistry", detail: "Calm visits that build a child's trust in the dentist.", since: "9 years in practice" },
    ],
  },
  faq: {
    title: "Common questions",
    items: [
      { q: "Will I know the price before treatment?", a: "Yes. After the exam you get a written plan with the cost of each step, and we only start with your approval." },
      { q: "Does it hurt?", a: "We use local anesthesia for anything that could be painful, and we stop whenever you ask." },
      { q: "Can I pay in installments?", a: "For implants and aligners, the cost can be split across treatment stages. We agree on this in your written plan." },
      { q: "From what age do you see children?", a: "From the first tooth. We recommend a first visit before age two." },
      { q: "What should I do in an emergency?", a: "Call us during opening hours and we'll find you the earliest same-day slot we can." },
    ],
  },
  book: {
    title: "Book a visit",
    lead: "Leave your name and number, and we'll call you to confirm a time that suits you.",
    name: "Full name",
    phone: "Phone number",
    phoneHint: "e.g. 07701234567",
    treatment: "Treatment",
    treatmentPlaceholder: "Choose a treatment",
    time: "Preferred time",
    morning: "Morning",
    evening: "Evening",
    note: "Notes (optional)",
    submit: "Send booking request",
    errors: {
      name: "Enter your name so we know who to ask for.",
      phone: "Enter an 11-digit Iraqi number starting with 07.",
      treatment: "Choose a treatment.",
    },
    doneTitle: "Booking request received",
    doneBody: "At a real clinic, the front desk would now call you to confirm. This is a concept site, so nothing was sent.",
    again: "Book another visit",
  },
  footer: {
    tagline: "Calm, clearly priced dentistry in the heart of Karrada.",
    visitTitle: "Visit",
    contactTitle: "Contact",
    address: "62nd Street, Karrada, Baghdad",
    phone: PHONE_DISPLAY,
    whatsapp: "WhatsApp",
    concept: "Lumina is a fictional clinic. This site is a design and development concept.",
    credit: "Designed and built by Mustafa Shakir",
    photos: "Photos from Unsplash",
  },
};

export const content: Record<Locale, Content> = { ar, en };

export function formatPrice(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-IQ" : "en-US").format(value);
}
