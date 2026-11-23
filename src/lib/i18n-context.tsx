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
  options: {
    shipForYou: string
    customProduct: string
  }
  about: {
    heading: string
    paragraph: string
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
    options: {
      shipForYou: 'Ship For You',
      customProduct: 'Custom Product',
    },
    about: {
      heading: 'About Us',
      paragraph:
        'We are a dedicated team delivering reliable shipping solutions and tailored custom products. Our focus is on clarity, quality, and long-term partnerships — helping your business move forward with confidence.',
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
    options: {
      shipForYou: 'نشحن لك',
      customProduct: 'منتج مخصص',
    },
    about: {
      heading: 'من نحن',
      paragraph:
        'نحن فريق متخصص نقدّم حلول شحن موثوقة ومنتجات مخصصة تناسب احتياجاتك. نركّز على الوضوح والجودة والشراكات طويلة الأمد — لنساعد عملك على التقدّم بثقة.',
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
    options: {
      shipForYou: '为您发货',
      customProduct: '定制产品',
    },
    about: {
      heading: '关于我们',
      paragraph:
        '我们是一支专业团队，提供可靠的航运解决方案和量身定制的产品。我们专注于清晰、品质与长期合作——助力您的业务自信前行。',
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
  // Start with English on the server; sync to stored value after mount.
  const [locale, setLocaleState] = React.useState<Locale>('en')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const stored = readStoredLocale()
    setLocaleState(stored)
    setMounted(true)
  }, [])

  const dir = translations[locale].dir

  // Keep <html lang> and <html dir> in sync with the active locale.
  React.useEffect(() => {
    if (!mounted) return
    const html = document.documentElement
    html.lang = locale
    html.dir = dir
  }, [locale, dir, mounted])

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLocale = React.useCallback(() => {
    setLocaleState((prev) => {
      const order: Locale[] = ['en', 'ar', 'zh']
      const idx = order.indexOf(prev)
      const next = order[(idx + 1) % order.length]
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      dir,
      t: translations[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, dir, setLocale, toggleLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = React.useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return ctx
}

export { translations }
