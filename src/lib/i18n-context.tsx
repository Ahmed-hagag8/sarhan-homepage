'use client'

import * as React from 'react'

export type Locale = 'en' | 'ar'

type Direction = 'ltr' | 'rtl'

interface TranslationKeys {
  nav: {
    languageLabel: string
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
    locationAria: string
    phonePlaceholder: string
    locationPlaceholder: string
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
      themeLight: 'Switch to light mode',
      themeDark: 'Switch to dark mode',
    },
    logo: {
      wordmark: 'COMPANY',
      alt: 'Company logo',
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
      locationAria: 'View our location on the map',
      phonePlaceholder: 'Phone number will be added here.',
      locationPlaceholder: 'Location link will be added here.',
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
      themeLight: 'التبديل إلى الوضع الفاتح',
      themeDark: 'التبديل إلى الوضع الداكن',
    },
    logo: {
      wordmark: 'COMPANY',
      alt: 'شعار الشركة',
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
      locationAria: 'اعرض موقعنا على الخريطة',
      phonePlaceholder: 'سيتم إضافة رقم الهاتف هنا.',
      locationPlaceholder: 'سيتم إضافة رابط الموقع هنا.',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
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
    if (stored === 'ar' || stored === 'en') return stored
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
      const next: Locale = prev === 'en' ? 'ar' : 'en'
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
