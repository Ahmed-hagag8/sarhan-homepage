'use client'

import * as React from 'react'

export type Locale = 'en' | 'ar' | 'zh'

type Direction = 'ltr' | 'rtl'

interface TranslationKeys {
  nav: {
    languageLabel: string
    themeLabel: string
    themeLight: string
    themeDark: string
  }
  logo: {
    wordmark: string
    alt: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    featureShipping: string
    featureCustom: string
    featureReliability: string
  }
  about: {
    badge: string
    heading: string
    paragraph: string
    pillar1Title: string
    pillar1Desc: string
    pillar2Title: string
    pillar2Desc: string
    pillar3Title: string
    pillar3Desc: string
  }
  options: {
    heading: string
    subheading: string
    shipForYou: string
    shipForYouDesc: string
    customProduct: string
    customProductDesc: string
  }
  shipForm: {
    dialogTitle: string
    dialogDesc: string
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    originLabel: string
    originPlaceholder: string
    destLabel: string
    destPlaceholder: string
    shippingTypeLabel: string
    typeAir: string
    typeSea: string
    typeExpress: string
    detailsLabel: string
    detailsPlaceholder: string
    sendWhatsApp: string
    sendEmail: string
    close: string
    validationError: string
    orSendWith: string
  }
  productEgyFlax: {
    badge: string
    name: string
    tagline: string
    description: string
    spec1: string
    spec2: string
    spec3: string
    inquireWhatsApp: string
    inquireEmail: string
    close: string
    hoverTip: string
    exploreDetails: string
  }
  contactBar: {
    title: string
    subtitle: string
    whatsapp: string
    email: string
    call: string
    online: string
    copy: string
    copied: string
    directChat: string
    phoneValue: string
    emailValue: string
    whatsappValue: string
  }
  contact: {
    connectUs: string
    connectUsAria: string
    locationLabel: string
    locationAria: string
    phonePlaceholder: string
    locationPlaceholder: string
    whatsappLabel: string
    emailLabel: string
    callLabel: string
  }
  footer: {
    tagline: string
    servicesNav: string
    aboutNav: string
    contactNav: string
    locationNav: string
    rights: string
  }
}

const translations: Record<Locale, TranslationKeys & { dir: Direction; label: string }> = {
  en: {
    dir: 'ltr',
    label: 'English',
    nav: {
      languageLabel: 'Language',
      themeLabel: 'Theme',
      themeLight: 'Switch to light mode',
      themeDark: 'Switch to dark mode',
    },
    logo: {
      wordmark: 'SARHAN',
      alt: 'SARHAN Import & Export logo',
    },
    hero: {
      badge: 'International Trade & Logistics',
      title: 'SARHAN',
      subtitle: 'Import & Export Solutions',
      description:
        'Your trusted gateway for seamless international shipping and tailored custom product sourcing. Connecting worldwide manufacturers with precision, reliability, and speed.',
      featureShipping: 'Air & Sea Freight',
      featureCustom: 'Custom Sourcing',
      featureReliability: 'End-to-End Tracking',
    },
    about: {
      badge: 'Who We Are',
      heading: 'About Us',
      paragraph:
        'We are a dedicated team delivering reliable shipping solutions and tailored custom products. Our focus is on clarity, quality, and long-term partnerships — helping your business move forward with confidence.',
      pillar1Title: 'Global Network',
      pillar1Desc: 'Direct access to verified international manufacturers and ports.',
      pillar2Title: 'Custom Solutions',
      pillar2Desc: 'Tailored specifications crafted precisely to your market demands.',
      pillar3Title: 'Guaranteed Clarity',
      pillar3Desc: 'Transparent communication, reliable schedules, and zero surprises.',
    },
    options: {
      heading: 'Our Core Services',
      subheading: 'Choose a service to begin your request with our team',
      shipForYou: 'Ship For You',
      shipForYouDesc: 'Instant shipping quote via WhatsApp or Email',
      customProduct: 'Our Products',
      customProductDesc: 'Featured: FLAX & LINEN PRODUCTS — natural fibers & textiles',
    },
    shipForm: {
      dialogTitle: 'Request a Shipping Quote',
      dialogDesc: 'Fill in your cargo details and send directly to our logistics team via WhatsApp or Email.',
      nameLabel: 'Your Name / Company',
      namePlaceholder: 'e.g. John Doe / Global Corp',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: '+1 234 567 8900',
      originLabel: 'Origin (Departure)',
      originPlaceholder: 'e.g. Guangzhou Port, China',
      destLabel: 'Destination (Arrival)',
      destPlaceholder: 'e.g. Alexandria Port, Egypt',
      shippingTypeLabel: 'Shipping Mode',
      typeAir: 'Air Cargo (Fastest)',
      typeSea: 'Sea Freight (FCL / LCL)',
      typeExpress: 'Door-to-Door Courier',
      detailsLabel: 'Cargo Specifications / Notes',
      detailsPlaceholder: 'Weight (kg), volume (CBM), commodity type, or special requirements...',
      sendWhatsApp: 'Send via WhatsApp',
      sendEmail: 'Send via Email',
      close: 'Close',
      validationError: 'Please provide at least your name and cargo details to send the inquiry.',
      orSendWith: 'Or choose email dispatch',
    },
    productEgyFlax: {
      badge: 'Featured Export Product',
      name: 'FLAX & LINEN PRODUCTS',
      tagline: 'Premium Natural Egyptian Flax & Linen Products',
      description:
        'Sustainably cultivated in fertile Egyptian soil and processed to high international standards. High-tensile flax fibers, tow, raw flax, and spun yarn designed for luxury textiles and high-performance industrial applications.',
      spec1: '100% Organic Egyptian Flax',
      spec2: 'Superior Tensile Strength',
      spec3: 'ISO Export Quality Certified',
      inquireWhatsApp: 'Order Quote on WhatsApp',
      inquireEmail: 'Inquire via Email',
      close: 'Close',
      hoverTip: 'Hover to preview · Click for full product details',
      exploreDetails: 'Explore Product Specifications',
    },
    contactBar: {
      title: 'Direct Communication Hub',
      subtitle: 'Connect with our team instantly across your preferred channel',
      whatsapp: 'WhatsApp Chat',
      email: 'Email Inquiry',
      call: 'Phone Direct',
      online: 'Team Online',
      copy: 'Copy Number',
      copied: 'Copied!',
      directChat: 'Start Chat',
      phoneValue: '+1 555-000-0000',
      emailValue: 'hello@sarhan.example.com',
      whatsappValue: '+1 555-000-100',
    },
    contact: {
      connectUs: 'Connect Us',
      connectUsAria: 'Call us',
      locationLabel: 'Location',
      locationAria: 'View our location on the map',
      phonePlaceholder: 'Phone number will be added here.',
      locationPlaceholder: 'Location link will be added here.',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      callLabel: 'Call',
    },
    footer: {
      tagline: 'SARHAN — Global trade logistics & premium custom commodity sourcing.',
      servicesNav: 'Services',
      aboutNav: 'About Us',
      contactNav: 'Contact',
      locationNav: 'Location',
      rights: 'All rights reserved.',
    },
  },
  ar: {
    dir: 'rtl',
    label: 'العربية',
    nav: {
      languageLabel: 'اللغة',
      themeLabel: 'السمة',
      themeLight: 'التبديل إلى الوضع الفاتح',
      themeDark: 'التبديل إلى الوضع الداكن',
    },
    logo: {
      wordmark: 'SARHAN',
      alt: 'شعار شركة سرحان للاستيراد والتصدير',
    },
    hero: {
      badge: 'التجارة الدولية والخدمات اللوجستية',
      title: 'سرحان',
      subtitle: 'حلول الاستيراد والتصدير',
      description:
        'بوابتكم الموثوقة للشحن الدولي وتوريد المنتجات المخصصة. نربطكم بأبرز المصانع والأسواق العالمية بأعلى معايير الدقة والأمان والسرعة.',
      featureShipping: 'شحن بحري وجوي',
      featureCustom: 'تصنيع وتوريد مخصص',
      featureReliability: 'متابعة شاملة حتى الوصول',
    },
    about: {
      badge: 'من نحن',
      heading: 'عن الشركة',
      paragraph:
        'نحن فريق متخصص نقدّم حلول شحن موثوقة ومنتجات مخصصة تناسب احتياجاتك. نركّز على الوضوح والجودة والشراكات طويلة الأمد — لنساعد عملك على التقدّم بثقة.',
      pillar1Title: 'شبكة توريد عالمية',
      pillar1Desc: 'ربط مباشر بأفضل الموانئ والمصانع المعتمدة عالمياً.',
      pillar2Title: 'حلول مخصصة',
      pillar2Desc: 'تصنيع وتجهيز المنتجات وفق متطلبات مشروعك بدقة.',
      pillar3Title: 'شفافية وموثوقية',
      pillar3Desc: 'مواعيد دقيقة، تسليم مضمون، وتواصل دائم في كل مرحلة.',
    },
    options: {
      heading: 'خدماتنا ومنتجاتنا',
      subheading: 'اختر الخدمة لبدء طلبك وتواصل فوراً مع فريقنا',
      shipForYou: 'نشحن لك',
      shipForYouDesc: 'احصل على تسعير شحن فوري عبر واتساب أو البريد',
      customProduct: 'منتجاتنا',
      customProductDesc: 'المنتج الحصري: منتجات الكتان واللينين FLAX & LINEN PRODUCTS',
    },
    shipForm: {
      dialogTitle: 'طلب تسعير شحنة جديدة',
      dialogDesc: 'املأ بيانات الشحنة ليتم إرسالها مباشرة لفريق اللوجستيات عبر واتساب أو البريد الإلكتروني.',
      nameLabel: 'الاسم أو اسم الشركة',
      namePlaceholder: 'مثال: أحمد محمد / شركة التجارة العالمية',
      phoneLabel: 'رقم الهاتف أو الواتساب',
      phonePlaceholder: '+20 100 000 0000',
      originLabel: 'بلد أو مدينة الإرسال (من)',
      originPlaceholder: 'مثال: ميناء قوانغتشو، الصين',
      destLabel: 'بلد أو مدينة الوصول (إلى)',
      destPlaceholder: 'مثال: ميناء الإسكندرية، مصر',
      shippingTypeLabel: 'نوع الشحن المطلوب',
      typeAir: 'شحن جوي سريع',
      typeSea: 'شحن بحري (حاوية كاملة أو مجزأة)',
      typeExpress: 'شحن سريع من الباب للباب',
      detailsLabel: 'مواصفات وتفاصيل الشحنة',
      detailsPlaceholder: 'الوزن التقريبي (كجم)، الحجم (CBM)، نوع البضاعة، أو أي متطلبات خاصة...',
      sendWhatsApp: 'إرسال عبر واتساب',
      sendEmail: 'إرسال عبر البريد',
      close: 'إغلاق',
      validationError: 'يرجى كتابة الاسم وتفاصيل الشحنة على الأقل لإرسال الطلب.',
      orSendWith: 'أو أرسل عبر البريد الإلكتروني',
    },
    productEgyFlax: {
      badge: 'المنتج الحصري للتصدير',
      name: 'FLAX & LINEN PRODUCTS',
      tagline: 'أجود ألياف وخيوط الكتان واللينين المصري الفاخر',
      description:
        'كتان مصري طبيعي عالي النقاء مزروع في أجود الأراضي الزراعية ومجهز وفق أعلى مواصفات الجودة العالمية. ألياف قوية، مشاق، وخيوط غزل مخصصة لمصانع النسيج الفاخر والتطبيقات الصناعية الدقيقة.',
      spec1: 'كتان مصري طبيعي 100%',
      spec2: 'متانة وقوة شد فائقة',
      spec3: 'مطابق لمواصفات التصدير الدولية',
      inquireWhatsApp: 'طلب تسعير عبر واتساب',
      inquireEmail: 'طلب تسعير عبر البريد',
      close: 'إغلاق',
      hoverTip: 'مرر لمعاينة المنتج · اضغط للتفاصيل الكاملة',
      exploreDetails: 'استعراض مواصفات المنتج',
    },
    contactBar: {
      title: 'مركز التواصل المباشر',
      subtitle: 'تواصل مع فريقنا في أي وقت عبر القناة الأنسب لك',
      whatsapp: 'واتساب مباشر',
      email: 'البريد الإلكتروني',
      call: 'اتصال هاتفي',
      online: 'الفريق متاح الآن',
      copy: 'نسخ الرقم',
      copied: 'تم النسخ!',
      directChat: 'بدء المحادثة',
      phoneValue: '+1 555-000-0000',
      emailValue: 'hello@sarhan.example.com',
      whatsappValue: '+1 555-000-100',
    },
    contact: {
      connectUs: 'تواصل معنا',
      connectUsAria: 'اتصل بنا',
      locationLabel: 'الموقع',
      locationAria: 'اعرض موقعنا على الخريطة',
      phonePlaceholder: 'سيتم إضافة رقم الهاتف هنا.',
      locationPlaceholder: 'سيتم إضافة رابط الموقع هنا.',
      whatsappLabel: 'واتساب',
      emailLabel: 'البريد الإلكتروني',
      callLabel: 'اتصال',
    },
    footer: {
      tagline: 'سرحان — الشحن الدولي الموثوق وتوريد المنتجات المخصصة للأسواق العالمية.',
      servicesNav: 'خدماتنا',
      aboutNav: 'من نحن',
      contactNav: 'تواصل معنا',
      locationNav: 'موقعنا',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
  zh: {
    dir: 'ltr',
    label: '中文',
    nav: {
      languageLabel: '语言',
      themeLabel: '主题',
      themeLight: '切换到浅色模式',
      themeDark: '切换到深色模式',
    },
    logo: {
      wordmark: 'SARHAN',
      alt: 'SARHAN 进出口公司标志',
    },
    hero: {
      badge: '国际贸易与全球物流',
      title: 'SARHAN',
      subtitle: '专业进出口解决方案',
      description:
        '您在国际货运与定制产品制造领域的可靠合作伙伴。连接全球优质供应链，以精准、高效与信赖助力您的业务拓展。',
      featureShipping: '海陆空多元物流',
      featureCustom: '专属产品定制',
      featureReliability: '全程可追溯保障',
    },
    about: {
      badge: '了解我们',
      heading: '关于我们',
      paragraph:
        '我们是一支专业团队，提供可靠的航运解决方案和量身定制的产品。我们专注于清晰、品质与长期合作——助力您的业务自信前行。',
      pillar1Title: '全球合作网络',
      pillar1Desc: '直连国际主要港口及认证制造基地。',
      pillar2Title: '定制化解决方案',
      pillar2Desc: '严格按照您的业务需求定制产品规格与交付。',
      pillar3Title: '透明可靠交付',
      pillar3Desc: '清晰流程、准时交付与全程专业沟通。',
    },
    options: {
      heading: '核心服务与主营产品',
      subheading: '选择服务或产品，与我们的专家团队即刻对接',
      shipForYou: '为您发货',
      shipForYouDesc: '通过 WhatsApp 或电子邮件获取即时报价',
      customProduct: '特色产品',
      customProductDesc: '主营推荐：FLAX & LINEN PRODUCTS 纯天然亚麻与高档亚麻制品',
    },
    shipForm: {
      dialogTitle: '获取航运即时报价',
      dialogDesc: '填写货物运输信息，直接通过 WhatsApp 或邮件发送给我们的国际物流团队。',
      nameLabel: '您的姓名 / 公司名称',
      namePlaceholder: '例如：李明 / 国际经贸有限公司',
      phoneLabel: '联系电话 / WhatsApp',
      phonePlaceholder: '+86 138 0000 0000',
      originLabel: '起运地（从）',
      originPlaceholder: '例如：中国广州港 / 深圳港',
      destLabel: '目的地（到）',
      destPlaceholder: '例如：埃及亚历山大港',
      shippingTypeLabel: '货运运输方式',
      typeAir: '国际空运（快速直达）',
      typeSea: '海运整箱/拼箱（FCL/LCL）',
      typeExpress: '门到门国际快递',
      detailsLabel: '货物详情与具体说明',
      detailsPlaceholder: '预估重量（kg）、体积（CBM）、品类说明或特殊温控要求...',
      sendWhatsApp: '通过 WhatsApp 发送',
      sendEmail: '通过电子邮件发送',
      close: '关闭',
      validationError: '请至少填写您的姓名和货物详情以发送询价。',
      orSendWith: '或选择邮件快速咨询',
    },
    productEgyFlax: {
      badge: '出口核心主打产品',
      name: 'FLAX & LINEN PRODUCTS',
      tagline: '特级埃及天然亚麻与高档亚麻制品',
      description:
        '源自埃及尼罗河流域优质土壤培育，遵循国际高级别纺织出口标准加工。具备出众的高抗拉强度、透气性及柔韧度，专为全球高档纺织面料与工业复合制造供应。',
      spec1: '100% 埃及原产纯天然亚麻',
      spec2: '顶级物理抗拉与韧性指标',
      spec3: '国际 ISO 出口检测标准认证',
      inquireWhatsApp: '通过 WhatsApp 询价',
      inquireEmail: '通过邮件快速咨询',
      close: '关闭',
      hoverTip: '悬停预览产品 · 点击查看完整详情',
      exploreDetails: '查看产品详细技术指标',
    },
    contactBar: {
      title: '即时沟通中心',
      subtitle: '选择您最便捷的联系方式，与我们即刻建立连接',
      whatsapp: 'WhatsApp 在线咨询',
      email: '商务邮件咨询',
      call: '直接电话沟通',
      online: '客服在线响应中',
      copy: '复制号码',
      copied: '已复制！',
      directChat: '立即发起沟通',
      phoneValue: '+1 555-000-0000',
      emailValue: 'hello@sarhan.example.com',
      whatsappValue: '+1 555-000-100',
    },
    contact: {
      connectUs: '联系我们',
      connectUsAria: '致电我们',
      locationLabel: '位置',
      locationAria: '在地图上查看我们的位置',
      phonePlaceholder: '电话号码将在此处显示。',
      locationPlaceholder: '位置链接将在此处显示。',
      whatsappLabel: 'WhatsApp',
      emailLabel: '电子邮件',
      callLabel: '电话',
    },
    footer: {
      tagline: 'SARHAN — 全球物流运输与高品质大宗定制产品出口首选伙伴。',
      servicesNav: '服务',
      aboutNav: '关于我们',
      contactNav: '联系方式',
      locationNav: '地图定位',
      rights: '保留所有权利。',
    },
  },
}

interface I18nContextValue {
  locale: Locale
  dir: Direction
  t: TranslationKeys
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'company-locale'

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'ar' || stored === 'en' || stored === 'zh') return stored
  } catch {
    /* ignore */
  }
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>('en')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const stored = readStoredLocale()
    setLocaleState(stored)
    setMounted(true)
  }, [])

  const setLocale = React.useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale)
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      const dir = translations[nextLocale].dir
      document.documentElement.setAttribute('lang', nextLocale)
      document.documentElement.setAttribute('dir', dir)
    }
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    const currentDir = translations[locale].dir
    document.documentElement.setAttribute('lang', locale)
    document.documentElement.setAttribute('dir', currentDir)
  }, [locale, mounted])

  const toggleLocale = React.useCallback(() => {
    const next: Locale = locale === 'en' ? 'ar' : locale === 'ar' ? 'zh' : 'en'
    setLocale(next)
  }, [locale, setLocale])

  const value = React.useMemo<I18nContextValue>(() => {
    const current = translations[locale]
    return {
      locale,
      dir: current.dir,
      t: current,
      setLocale,
      toggleLocale,
    }
  }, [locale, setLocale, toggleLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return ctx
}
