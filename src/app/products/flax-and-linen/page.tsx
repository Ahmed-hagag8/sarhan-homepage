'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Package,
  Layers,
  Sparkles,
  Eye,
  Mail,
  User,
  Phone,
  MapPin,
  FileText,
  X,
  CheckCircle2,
  ShieldCheck,
  Award,
  Feather,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSelector } from '@/components/language-selector'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'
import {
  CATALOG_PRODUCTS,
  CATALOG_UI,
  FLAX_ABOUT,
  FLAX_PROCESS,
  type CatalogProduct,
} from './product-data'

const EMAIL_BASE = 'hello@sarhan.example.com'

export default function ProductFlaxAndLinenPage() {
  const { locale, dir } = useI18n()
  const [selectedProductForShip, setSelectedProductForShip] = React.useState<CatalogProduct | null>(null)
  const [selectedProductForPreview, setSelectedProductForPreview] = React.useState<CatalogProduct | null>(null)

  // Shipping form state
  const [buyerName, setBuyerName] = React.useState('')
  const [buyerEmail, setBuyerEmail] = React.useState('')
  const [buyerPhone, setBuyerPhone] = React.useState('')
  const [quantity, setQuantity] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [formError, setFormError] = React.useState('')
  const [submittedSuccess, setSubmittedSuccess] = React.useState(false)

  const ui = React.useMemo(() => {
    return {
      collectionTitle: CATALOG_UI.collectionTitle[locale] ?? CATALOG_UI.collectionTitle.en,
      collectionSubtitle: CATALOG_UI.collectionSubtitle[locale] ?? CATALOG_UI.collectionSubtitle.en,
      backToHome: CATALOG_UI.backToHome[locale] ?? CATALOG_UI.backToHome.en,
      descriptionLabel: CATALOG_UI.descriptionLabel[locale] ?? CATALOG_UI.descriptionLabel.en,
      specificationsLabel: CATALOG_UI.specificationsLabel[locale] ?? CATALOG_UI.specificationsLabel.en,
      applicationsLabel: CATALOG_UI.applicationsLabel[locale] ?? CATALOG_UI.applicationsLabel.en,
      companyName: CATALOG_UI.companyName[locale] ?? CATALOG_UI.companyName.en,
      companyTagline: CATALOG_UI.companyTagline[locale] ?? CATALOG_UI.companyTagline.en,
      egyptOrigin: CATALOG_UI.egyptOrigin[locale] ?? CATALOG_UI.egyptOrigin.en,
      packagingBales: CATALOG_UI.packagingBales[locale] ?? CATALOG_UI.packagingBales.en,
      shipProduct: CATALOG_UI.shipProduct[locale] ?? CATALOG_UI.shipProduct.en,
      shipNow: CATALOG_UI.shipNow[locale] ?? CATALOG_UI.shipNow.en,
      shipModalTitle: CATALOG_UI.shipModalTitle[locale] ?? CATALOG_UI.shipModalTitle.en,
      shipModalDesc: CATALOG_UI.shipModalDesc[locale] ?? CATALOG_UI.shipModalDesc.en,
      productLabel: CATALOG_UI.productLabel[locale] ?? CATALOG_UI.productLabel.en,
      buyerNameLabel: CATALOG_UI.buyerNameLabel[locale] ?? CATALOG_UI.buyerNameLabel.en,
      buyerNamePlaceholder: CATALOG_UI.buyerNamePlaceholder[locale] ?? CATALOG_UI.buyerNamePlaceholder.en,
      buyerEmailLabel: CATALOG_UI.buyerEmailLabel[locale] ?? CATALOG_UI.buyerEmailLabel.en,
      buyerEmailPlaceholder: CATALOG_UI.buyerEmailPlaceholder[locale] ?? CATALOG_UI.buyerEmailPlaceholder.en,
      buyerPhoneLabel: CATALOG_UI.buyerPhoneLabel[locale] ?? CATALOG_UI.buyerPhoneLabel.en,
      buyerPhonePlaceholder: CATALOG_UI.buyerPhonePlaceholder[locale] ?? CATALOG_UI.buyerPhonePlaceholder.en,
      quantityLabel: CATALOG_UI.quantityLabel[locale] ?? CATALOG_UI.quantityLabel.en,
      quantityPlaceholder: CATALOG_UI.quantityPlaceholder[locale] ?? CATALOG_UI.quantityPlaceholder.en,
      destinationLabel: CATALOG_UI.destinationLabel[locale] ?? CATALOG_UI.destinationLabel.en,
      destinationPlaceholder: CATALOG_UI.destinationPlaceholder[locale] ?? CATALOG_UI.destinationPlaceholder.en,
      notesLabel: CATALOG_UI.notesLabel[locale] ?? CATALOG_UI.notesLabel.en,
      notesPlaceholder: CATALOG_UI.notesPlaceholder[locale] ?? CATALOG_UI.notesPlaceholder.en,
      submitBtn: CATALOG_UI.submitBtn[locale] ?? CATALOG_UI.submitBtn.en,
      validationError: CATALOG_UI.validationError[locale] ?? CATALOG_UI.validationError.en,
      atelierPill: CATALOG_UI.atelierPill[locale] ?? CATALOG_UI.atelierPill.en,
      isoCompliance: CATALOG_UI.isoCompliance[locale] ?? CATALOG_UI.isoCompliance.en,
      categoryFlaxAndLinen: CATALOG_UI.categoryFlaxAndLinen[locale] ?? CATALOG_UI.categoryFlaxAndLinen.en,
      stepPrefix: CATALOG_UI.stepPrefix[locale] ?? CATALOG_UI.stepPrefix.en,
      stagePrefix: CATALOG_UI.stagePrefix[locale] ?? CATALOG_UI.stagePrefix.en,
      requestSuccess: CATALOG_UI.requestSuccess[locale] ?? CATALOG_UI.requestSuccess.en,
      topBtn: CATALOG_UI.topBtn[locale] ?? CATALOG_UI.topBtn.en,
      rightsReserved: CATALOG_UI.rightsReserved[locale] ?? CATALOG_UI.rightsReserved.en,
      subFooterText: CATALOG_UI.subFooterText[locale] ?? CATALOG_UI.subFooterText.en,
      viewInCatalog: CATALOG_UI.viewInCatalog[locale] ?? CATALOG_UI.viewInCatalog.en,
      previewBtn: locale === 'ar' ? 'معاينة' : locale === 'fr' ? 'Aperçu' : locale === 'zh' ? '预览' : 'Preview',
      previewHeading: locale === 'ar' ? 'معاينة المنتج والشهادات' : locale === 'fr' ? 'Aperçu du Produit' : locale === 'zh' ? '产品高清预览' : 'Product Preview',
      closeBtn: locale === 'ar' ? 'إغلاق' : locale === 'fr' ? 'Fermer' : locale === 'zh' ? '关闭' : 'Close',
    }
  }, [locale])

  const aboutData = React.useMemo(() => {
    return {
      badge: FLAX_ABOUT.badge[locale] ?? FLAX_ABOUT.badge.en,
      heading: FLAX_ABOUT.heading[locale] ?? FLAX_ABOUT.heading.en,
      description: FLAX_ABOUT.description[locale] ?? FLAX_ABOUT.description.en,
      stats: FLAX_ABOUT.stats.map((s) => ({
        value: s.value,
        label: s.label[locale] ?? s.label.en,
      })),
    }
  }, [locale])

  const processData = React.useMemo(() => {
    return {
      badge: FLAX_PROCESS.badge[locale] ?? FLAX_PROCESS.badge.en,
      title: FLAX_PROCESS.title[locale] ?? FLAX_PROCESS.title.en,
      subtitle: FLAX_PROCESS.subtitle[locale] ?? FLAX_PROCESS.subtitle.en,
      steps: FLAX_PROCESS.steps.map((st) => ({
        number: st.number,
        title: st.title[locale] ?? st.title.en,
        desc: st.desc[locale] ?? st.desc.en,
      })),
    }
  }, [locale])

  // Lock body scroll when either modal is open
  React.useEffect(() => {
    if (selectedProductForShip || selectedProductForPreview) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmittedSuccess(false)
      setFormError('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProductForShip, selectedProductForPreview])

  const handleOpenShipModal = (product: CatalogProduct) => {
    setSelectedProductForPreview(null)
    setSelectedProductForShip(product)
    setFormError('')
    setSubmittedSuccess(false)
  }

  const handleCloseShipModal = () => {
    setSelectedProductForShip(null)
  }

  const handleSubmitShipQuote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!buyerName.trim() || !buyerEmail.trim()) {
      setFormError(ui.validationError)
      return
    }

    const prodName = selectedProductForShip
      ? (locale === 'en' ? selectedProductForShip.name : (selectedProductForShip.translatedName[locale] ?? selectedProductForShip.name))
      : (locale === 'ar' ? 'ألياف الكتان واللينن' : locale === 'fr' ? 'Fibres de lin et lin' : locale === 'zh' ? '亚麻与亚麻纤维' : 'Flax Commodity')

    // Localized headers and field labels for email inquiry
    const emailHeaders = {
      en: {
        subject: `Shipping & Quotation Request: ${prodName} — ${buyerName.trim()}`,
        title: 'SARHAN FOR IMPORT & EXPORT — OFFICIAL COMMODITY SHIPPING REQUEST',
        product: 'Product / Cargo',
        client: 'Customer / Company',
        email: 'Business Email',
        phone: 'Phone / WeChat',
        quantity: 'Required Quantity',
        dest: 'Destination Port / Country',
        specsHeader: 'Specifications & Cargo Notes:',
        defaultNotes: 'Please send standard export specifications, bale packing, and CIF/FOB quote.',
        footer: 'Sent via SARHAN Products Portal',
      },
      ar: {
        subject: `طلب عرض أسعار وشحن: ${prodName} — ${buyerName.trim()}`,
        title: 'سرحان للاستيراد والتصدير — طلب رسمي لشحن وتوريد بضائع الكتان',
        product: 'المنتج / البضاعة',
        client: 'اسم العميل / الشركة',
        email: 'البريد الإلكتروني للعمل',
        phone: 'الهاتف / وسيلة التواصل',
        quantity: 'الكمية المطلوبة',
        dest: 'ميناء / دولة الوصول',
        specsHeader: 'المواصفات وملاحظات الشحنة:',
        defaultNotes: 'يرجى تزويدنا بالمواصفات التصديرية القياسية، تفاصيل تعبئة البالات، وعرض أسعار CIF / FOB.',
        footer: 'تم الإرسال عبر بوابة منتجات الكتان الرسمية — سرحان للاستيراد والتصدير',
      },
      fr: {
        subject: `Demande de Devis et Expédition : ${prodName} — ${buyerName.trim()}`,
        title: 'SARHAN IMPORT & EXPORT — DEMANDE OFFICIELLE D\'EXPÉDITION',
        product: 'Produit / Marchandise',
        client: 'Client / Société',
        email: 'Email professionnel',
        phone: 'Téléphone / WhatsApp',
        quantity: 'Quantité demandée',
        dest: 'Port / Pays de destination',
        specsHeader: 'Spécifications et notes de cargaison :',
        defaultNotes: 'Veuillez nous envoyer les spécifications standard d\'exportation, l\'emballage en balles et le devis CIF/FOB.',
        footer: 'Envoyé via le portail officiel SARHAN',
      },
      zh: {
        subject: `运输及采购报价申请：${prodName} — ${buyerName.trim()}`,
        title: 'SARHAN 进出口 — 亚麻大宗商品官方运输报价申请',
        product: '产品 / 货物',
        client: '客户 / 公司名称',
        email: '商务邮箱',
        phone: '电话 / 微信',
        quantity: '所需采购量',
        dest: '目的港 / 目的国家',
        specsHeader: '规格要求与货物备注：',
        defaultNotes: '请提供标准出口规格标准、打包规格及 CIF / FOB 报价。',
        footer: '通过 SARHAN 亚麻产品官方门户发送',
      },
    }

    const tBody = emailHeaders[locale] ?? emailHeaders.en

    const emailBody = [
      tBody.title,
      '==================================================================',
      `${tBody.product}: ${prodName}`,
      `${tBody.client}: ${buyerName.trim()}`,
      `${tBody.email}: ${buyerEmail.trim()}`,
      buyerPhone.trim() ? `${tBody.phone}: ${buyerPhone.trim()}` : '',
      quantity.trim() ? `${tBody.quantity}: ${quantity.trim()}` : '',
      destination.trim() ? `${tBody.dest}: ${destination.trim()}` : '',
      '',
      tBody.specsHeader,
      notes.trim() || tBody.defaultNotes,
      '',
      '==================================================================',
      tBody.footer,
    ]
      .filter(Boolean)
      .join('\n')

    const mailtoUrl = `mailto:${EMAIL_BASE}?subject=${encodeURIComponent(tBody.subject)}&body=${encodeURIComponent(emailBody)}`

    // Open user's email client
    window.location.href = mailtoUrl
    setSubmittedSuccess(true)
    setTimeout(() => {
      handleCloseShipModal()
    }, 1800)
  }

  return (
    <div
      dir={dir}
      className="flax-wood-persona fw-linen-pattern min-h-screen flex flex-col bg-[var(--fw-canvas)] text-[var(--fw-text-main)] transition-colors duration-500 antialiased selection:bg-[var(--fw-flax-gold)] selection:text-[#1a120c] relative"
    >
      {/* Soft Ambient Golden Sunbeam Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[min(1100px,100vw)] h-[550px] rounded-full bg-gradient-to-b from-[var(--fw-flax-gold)]/15 via-[var(--fw-wood-teak)]/8 to-transparent blur-3xl z-0"
      />

      {/* ============================================================ */}
      {/* 1. TOP UTILITY NAVIGATION (Flax & Woods Persona)             */}
      {/* ============================================================ */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--fw-wood-border)] bg-[var(--fw-canvas)]/90 backdrop-blur-md transition-colors">
        <nav
          aria-label="Utility"
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3.5 md:px-8"
        >
          {/* Top Left: Theme toggle + Back to home link */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] px-3 py-1.5 text-xs font-semibold text-[var(--fw-text-main)] hover:border-[var(--fw-flax-gold)] hover:text-[var(--fw-flax-gold)] transition-all group"
            >
              <ArrowLeft className="h-3.5 w-3.5 rtl:-scale-x-100 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
              <span className="hidden sm:inline">{ui.backToHome}</span>
            </Link>
          </div>

          {/* Center: Brand Identity with New Logo (Transparent) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <img
              src="/sarhan-logo.png"
              alt="SARHAN Logo"
              className="h-9 w-9 sm:h-11 sm:w-11 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col text-start">
              <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[var(--fw-text-main)] group-hover:text-[var(--fw-flax-gold)] transition-colors uppercase leading-none">
                SARHAN
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[var(--fw-text-soft)] group-hover:text-[var(--fw-flax-gold)] transition-colors mt-0.5">
                IMPORT & EXPORT
              </span>
            </div>
          </Link>

          {/* Top Right: Language selector */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
          </div>
        </nav>
      </header>

      {/* ============================================================ */}
      {/* 2. CATALOG HERO HEADER (Flax & Woods Aesthetics)             */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-b border-[var(--fw-wood-border)] py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[var(--fw-surface-subtle)]/40 via-transparent to-transparent">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 md:px-8 z-10">
          {/* Natural Fiber Atelier Pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full fw-linen-pill px-3 py-1.5 sm:px-4 text-[11px] font-bold uppercase tracking-widest shadow-xs">
            <Feather className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate max-w-[260px] sm:max-w-none">{ui.atelierPill}</span>
          </div>

          {/* Regal Headline */}
          <h1 className="fw-headline font-serif text-2xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-center leading-tight">
            {ui.collectionTitle}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-[var(--fw-text-muted)] font-normal px-1">
            {ui.collectionSubtitle}
          </p>

          {/* Guarantee Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 text-xs font-semibold text-[var(--fw-text-main)]">
            <div className="flex items-center gap-2 rounded-full border border-[var(--fw-wood-border)] bg-[var(--fw-card-glass)] px-3 sm:px-4 py-2 shadow-xs backdrop-blur-xs">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[var(--fw-flax-gold)]" />
              <span className="text-[11px] sm:text-xs">{ui.egyptOrigin}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[var(--fw-wood-border)] bg-[var(--fw-card-glass)] px-3 sm:px-4 py-2 shadow-xs backdrop-blur-xs">
              <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[var(--fw-flax-gold)]" />
              <span className="text-[11px] sm:text-xs">{ui.packagingBales}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[var(--fw-wood-border)] bg-[var(--fw-card-glass)] px-3 sm:px-4 py-2 shadow-xs backdrop-blur-xs">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[var(--fw-flax-gold)]" />
              <span className="text-[11px] sm:text-xs">{ui.isoCompliance}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ABOUT SECTION (Flax & Woods Persona)                      */}
      {/* ============================================================ */}
      <section className="relative mx-auto w-full max-w-5xl px-4 pt-10 pb-6 sm:px-6 sm:pt-12 md:px-8 z-10">
        <div className="fw-card card-slide-in relative overflow-hidden rounded-3xl p-5 sm:p-9 md:p-12 text-center">
          {/* Ambient accent glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[var(--fw-flax-gold)]/10 blur-3xl rtl:-left-24 rtl:right-auto"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full fw-linen-pill px-4 py-1.5 shadow-xs">
              <Feather className="h-3.5 w-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-widest">
                {aboutData.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--fw-text-main)]">
              {aboutData.heading}
            </h2>

            {/* Paragraph */}
            <p className="mt-3 sm:mt-3.5 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[var(--fw-text-muted)] font-normal">
              {aboutData.description}
            </p>

            {/* 3 Key Stat Chips */}
            <div className="mt-6 sm:mt-7 grid w-full grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {aboutData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[var(--fw-surface-subtle)] border border-[var(--fw-wood-border)] shadow-xs text-center transition-all duration-300 hover:border-[var(--fw-flax-gold)] hover:-translate-y-0.5"
                >
                  <span className="font-serif text-xl sm:text-2xl font-black text-[var(--fw-flax-gold)]">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 text-xs font-semibold text-[var(--fw-text-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. STACKED CARDS ON SCROLL: TACTILE LINEN & WOOD TIERS       */}
      {/* ============================================================ */}
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-10 md:px-8 z-10">
        <div className="relative flex flex-col space-y-5 sm:space-y-10 md:space-y-14 pb-16 sm:pb-24">
          {CATALOG_PRODUCTS.map((product, index) => {
            const descriptionText = product.description[locale] ?? product.description.en
            const specs = product.specifications[locale] ?? product.specifications.en
            const apps = product.applications[locale] ?? product.applications.en
            const translatedTitle = product.translatedName[locale] ?? product.name

            // Mobile header ~52px, desktop header ~88px. Add index*6px per card for the cascade peek.
            const mobileTop = `calc(3.5rem + ${index * 6}px)`
            const desktopTop = `calc(5.5rem + ${index * 8}px)`
            const zIndexValue = index + 10

            return (
              <div
                key={product.id}
                id={product.id}
                style={{ zIndex: zIndexValue }}
                className={cn(
                  'w-full sticky',
                  // The top value is set via a CSS variable trick via inline style is not reactive to breakpoints,
                  // so we apply two className overrides and let CSS handle it.
                )}
                // Use data attributes to let CSS pick the right offset
                data-mobile-top={mobileTop}
                data-desktop-top={desktopTop}
              >
                {/* Inline style sets top for desktop; CSS media query overrides for mobile */}
                <style>{`
                  #${product.id} { top: ${desktopTop}; }
                  @media (max-width: 767px) { #${product.id} { top: ${mobileTop}; } }
                `}</style>

                <article
                  className={cn(
                    'fw-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-9 overflow-hidden',
                    'transition-all duration-500 ease-out'
                  )}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
                    {/* Left Column: Photo */}
                    <div className="md:col-span-5 flex flex-col items-center">
                      <div
                        onClick={() => setSelectedProductForPreview(product)}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[var(--fw-surface-subtle)] border border-[var(--fw-wood-border)] group cursor-pointer shadow-md"
                        title={ui.previewBtn}
                      >
                        <Image
                          src={product.photo}
                          alt={translatedTitle}
                          fill
                          sizes="(max-width: 768px) 100vw, 420px"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                          priority={index < 2}
                        />

                        {/* Overlay — always slightly visible on mobile (gradient), full on hover */}
                        <div className="fw-photo-overlay absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black/45 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="fw-photo-overlay-btn inline-flex items-center gap-2 rounded-full fw-wood-btn px-4 py-2 text-xs font-semibold text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                            <Eye className="h-4 w-4" />
                            <span>{ui.previewBtn}</span>
                          </div>
                        </div>

                        {/* Always-visible bottom gradient bar on mobile (shows "tap to preview") */}
                        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2 md:hidden pointer-events-none">
                          <span className="text-white text-[10px] font-semibold uppercase tracking-widest opacity-80 flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {ui.previewBtn}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Localized Content */}
                    <div className="md:col-span-7 flex flex-col justify-between text-start">
                      <div>
                        {/* Category Label */}
                        <div className="inline-block">
                          <span className="fw-linen-pill text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            {ui.categoryFlaxAndLinen}
                          </span>
                        </div>

                        {/* Title */}
                        <h2
                          onClick={() => setSelectedProductForPreview(product)}
                          className="mt-2 font-serif text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--fw-text-main)] leading-snug cursor-pointer hover:text-[var(--fw-flax-gold)] transition-colors"
                        >
                          {translatedTitle}
                        </h2>

                        {/* Description */}
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[var(--fw-text-muted)] font-normal">
                          {descriptionText}
                        </p>

                        {/* Specs & Applications */}
                        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 border-t border-[var(--fw-wood-border)] pt-3 text-xs">
                          <div className="flex items-start gap-2 text-[var(--fw-text-main)] font-medium">
                            <Layers className="h-4 w-4 shrink-0 mt-0.5 text-[var(--fw-flax-gold)]" />
                            <span>{specs.join(' · ')}</span>
                          </div>

                          <div className="flex items-start gap-2 text-[var(--fw-text-muted)] font-medium">
                            <Sparkles className="h-4 w-4 shrink-0 mt-0.5 text-[var(--fw-flax-gold)]" />
                            <span>{apps.join(' · ')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[var(--fw-wood-border)] flex flex-row items-center gap-2 sm:gap-3">
                        {/* Ship Button */}
                        <button
                          type="button"
                          onClick={() => handleOpenShipModal(product)}
                          className="fw-wood-btn group relative flex-1 inline-flex items-center justify-between gap-2 rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-3 sm:px-5 font-bold text-xs sm:text-sm"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            <span>{ui.shipProduct}</span>
                          </div>

                          <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/20 dark:bg-black/25 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 rtl:-scale-x-100" />
                          </div>
                        </button>

                        {/* Preview Button */}
                        <button
                          type="button"
                          onClick={() => setSelectedProductForPreview(product)}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl sm:rounded-2xl border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] px-3 sm:px-4 py-2.5 sm:py-3 text-xs font-semibold text-[var(--fw-text-main)] hover:border-[var(--fw-flax-gold)] hover:text-[var(--fw-flax-gold)] transition-colors active:scale-95"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">{ui.previewBtn}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </main>

      {/* ============================================================ */}
      {/* 5. PROCESS PIPELINE: From straw to shipment (Five steps)     */}
      {/* ============================================================ */}
      <section className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-20 md:px-8 md:py-24 border-t border-[var(--fw-wood-border)] z-10">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 md:mb-16">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full fw-linen-pill px-4 py-1.5 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-widest">
              {processData.badge}
            </span>
          </div>
          <h2 className="fw-headline font-serif text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
            {processData.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-[var(--fw-text-muted)] max-w-xl px-2">
            {processData.subtitle}
          </p>
        </div>

        {/* 5 Connected Step Cards */}
        <div className="relative">
          {/* Connecting wood ribbon line on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block pointer-events-none absolute top-10 inset-x-12 h-0.5 fw-wood-ribbon z-0"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 relative z-10">
            {processData.steps.map((step, idx) => (
              <div
                key={step.number}
                className="fw-card card-hover-lift rounded-2xl p-4 sm:p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Step number badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-[var(--fw-surface-subtle)] text-[var(--fw-flax-gold)] border border-[var(--fw-flax-border)] font-mono font-black text-sm sm:text-base shadow-xs">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--fw-text-soft)]">
                      {ui.stepPrefix} {idx + 1}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--fw-text-main)] mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[var(--fw-text-muted)] font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom indicator tag */}
                <div className="mt-4 sm:mt-5 pt-3 border-t border-[var(--fw-wood-border)] flex items-center justify-between text-[11px] text-[var(--fw-flax-gold)] font-semibold">
                  <span>{ui.stagePrefix} {step.number}</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--fw-flax-gold)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. ANIMATED PRODUCT PREVIEW LIGHTBOX MODAL                   */}
      {/* ============================================================ */}
      {selectedProductForPreview && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-5 md:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProductForPreview(null)}
            aria-hidden="true"
          />

          {/* Modal Container — bottom sheet on mobile, centered popup on sm+ */}
          <div
            className={cn(
              'relative z-10 w-full max-w-2xl overflow-y-auto rounded-t-3xl sm:rounded-3xl p-5 sm:p-7 md:p-8',
              'max-h-[90vh] sm:max-h-[92vh]',
              'fw-card text-[var(--fw-text-main)] shadow-2xl',
              'animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200'
            )}
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex justify-center mb-3">
              <div className="w-10 h-1 rounded-full bg-[var(--fw-wood-border)]" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[var(--fw-wood-border)]">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[var(--fw-flax-gold)]">
                  {ui.previewHeading}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProductForPreview(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--fw-text-muted)] hover:text-[var(--fw-text-main)] hover:bg-[var(--fw-surface-subtle)] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Preview Image */}
            <div className="mt-4 relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[var(--fw-surface-subtle)] border border-[var(--fw-wood-border)] shadow-md group">
              <Image
                src={selectedProductForPreview.photo}
                alt={selectedProductForPreview.name}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 start-3 end-3 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-2xl font-black text-white drop-shadow-md">
                    {selectedProductForPreview.translatedName[locale] ?? selectedProductForPreview.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Full Product Description */}
            <div className="mt-4 rounded-xl bg-[var(--fw-surface-subtle)] p-4 border border-[var(--fw-wood-border)]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--fw-flax-gold)] mb-1">
                {ui.descriptionLabel}
              </h4>
              <p className="text-sm leading-relaxed text-[var(--fw-text-main)] font-normal">
                {selectedProductForPreview.description[locale] ?? selectedProductForPreview.description.en}
              </p>
            </div>

            {/* Specifications & Applications Grid */}
            <div className="mt-3 sm:mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-[var(--fw-surface-subtle)]/70 p-3.5 border border-[var(--fw-wood-border)]">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--fw-flax-gold)] mb-2">
                  <Layers className="h-3.5 w-3.5" />
                  <span>{ui.specificationsLabel}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--fw-text-main)] font-medium">
                  {(selectedProductForPreview.specifications[locale] ?? selectedProductForPreview.specifications.en).map((spec, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[var(--fw-flax-gold)] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[var(--fw-surface-subtle)]/70 p-3.5 border border-[var(--fw-wood-border)]">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--fw-flax-gold)] mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{ui.applicationsLabel}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[var(--fw-text-muted)] font-medium">
                  {(selectedProductForPreview.applications[locale] ?? selectedProductForPreview.applications.en).map((app, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--fw-flax-gold)] shrink-0 mt-1.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-5 pt-3.5 border-t border-[var(--fw-wood-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedProductForPreview(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[var(--fw-wood-border)] text-xs font-semibold text-[var(--fw-text-main)] hover:bg-[var(--fw-surface-subtle)] transition-colors"
              >
                {ui.closeBtn}
              </button>

              <button
                type="button"
                onClick={() => handleOpenShipModal(selectedProductForPreview)}
                className="fw-wood-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-5 font-bold text-xs sm:text-sm"
              >
                <Package className="h-4 w-4" />
                <span>{ui.shipProduct}</span>
                <ArrowRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 7. COMMODITY SHIPPING QUOTE MODAL (Tactile Wood Atelier)     */}
      {/* ============================================================ */}
      {selectedProductForShip && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ship-dialog-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
            onClick={handleCloseShipModal}
            aria-hidden="true"
          />

          {/* Modal Container — bottom sheet on mobile, centered popup on sm+ */}
          <div
            className={cn(
              'relative z-10 w-full max-w-xl overflow-y-auto rounded-t-3xl sm:rounded-3xl p-5 sm:p-7 md:p-9',
              'max-h-[92vh]',
              'fw-card text-[var(--fw-text-main)] shadow-2xl',
              'animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200'
            )}
          >
            {/* Mobile drag handle */}
            <div className="sm:hidden flex justify-center mb-3">
              <div className="w-10 h-1 rounded-full bg-[var(--fw-wood-border)]" />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--fw-wood-border)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[var(--fw-surface-subtle)] border border-[var(--fw-wood-border)] text-[var(--fw-flax-gold)]">
                  <Package className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h2
                    id="ship-dialog-title"
                    className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[var(--fw-text-main)]"
                  >
                    {ui.shipModalTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--fw-text-muted)] mt-0.5">
                    {ui.shipModalDesc}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseShipModal}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--fw-text-muted)] hover:text-[var(--fw-text-main)] hover:bg-[var(--fw-surface-subtle)] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Selected Product Banner (No Page Number) */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-[var(--fw-surface-subtle)] p-3 border border-[var(--fw-wood-border)]">
              <div className="flex items-center gap-2.5">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={selectedProductForShip.photo}
                    alt={selectedProductForShip.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[var(--fw-flax-gold)]">
                    {ui.categoryFlaxAndLinen}
                  </span>
                  <p className="text-sm font-bold text-[var(--fw-text-main)]">
                    {selectedProductForShip.translatedName[locale] ?? selectedProductForShip.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitShipQuote} className="mt-5 space-y-4">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--fw-text-main)]">
                    <User className="h-3.5 w-3.5 text-[var(--fw-flax-gold)]" />
                    <span>{ui.buyerNameLabel}</span>
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder={ui.buyerNamePlaceholder}
                    className="w-full rounded-xl border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] px-3.5 py-2.5 text-sm text-[var(--fw-text-main)] placeholder:text-[var(--fw-text-soft)] focus:border-[var(--fw-flax-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--fw-flax-gold)]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--fw-text-main)]">
                    <Mail className="h-3.5 w-3.5 text-[var(--fw-flax-gold)]" />
                    <span>{ui.buyerEmailLabel}</span>
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder={ui.buyerEmailPlaceholder}
                    className="w-full rounded-xl border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] px-3.5 py-2.5 text-sm text-[var(--fw-text-main)] placeholder:text-[var(--fw-text-soft)] focus:border-[var(--fw-flax-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--fw-flax-gold)]/30 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Quantity and Destination */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--fw-text-main)]">
                    <Package className="h-3.5 w-3.5 text-[var(--fw-flax-gold)]" />
                    <span>{ui.quantityLabel}</span>
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder={ui.quantityPlaceholder}
                    className="w-full rounded-xl border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] px-3.5 py-2.5 text-sm text-[var(--fw-text-main)] placeholder:text-[var(--fw-text-soft)] focus:border-[var(--fw-flax-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--fw-flax-gold)]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--fw-text-main)]">
                    <MapPin className="h-3.5 w-3.5 text-[var(--fw-flax-gold)]" />
                    <span>{ui.destinationLabel}</span>
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder={ui.destinationPlaceholder}
                    className="w-full rounded-xl border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] px-3.5 py-2.5 text-sm text-[var(--fw-text-main)] placeholder:text-[var(--fw-text-soft)] focus:border-[var(--fw-flax-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--fw-flax-gold)]/30 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Phone number */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--fw-text-main)]">
                  <Phone className="h-3.5 w-3.5 text-[var(--fw-flax-gold)]" />
                  <span>{ui.buyerPhoneLabel}</span>
                </label>
                <input
                  type="tel"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  placeholder={ui.buyerPhonePlaceholder}
                  className="w-full rounded-xl border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] px-3.5 py-2.5 text-sm text-[var(--fw-text-main)] placeholder:text-[var(--fw-text-soft)] focus:border-[var(--fw-flax-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--fw-flax-gold)]/30 transition-all"
                />
              </div>

              {/* Row 4: Notes and Specifications */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--fw-text-main)]">
                  <FileText className="h-3.5 w-3.5 text-[var(--fw-flax-gold)]" />
                  <span>{ui.notesLabel}</span>
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={ui.notesPlaceholder}
                  className="w-full rounded-xl border border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)] p-3 text-sm text-[var(--fw-text-main)] placeholder:text-[var(--fw-text-soft)] focus:border-[var(--fw-flax-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--fw-flax-gold)]/30 transition-all resize-none"
                />
              </div>

              {/* Error notice */}
              {formError && (
                <p className="text-xs font-medium text-destructive animate-in fade-in">
                  {formError}
                </p>
              )}

              {/* Success notification */}
              {submittedSuccess && (
                <div className="flex items-center gap-2 rounded-xl bg-[var(--fw-flax-gold)]/15 border border-[var(--fw-flax-gold)]/40 p-3 text-xs font-semibold text-[var(--fw-flax-gold)] animate-in fade-in">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{ui.requestSuccess}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="fw-wood-btn group relative w-full inline-flex items-center justify-center gap-3 rounded-2xl py-3.5 px-6 font-semibold text-sm sm:text-base"
                >
                  <span className="font-bold tracking-wider uppercase text-sm sm:text-base">
                    {ui.submitBtn}
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 dark:bg-black/25 backdrop-blur-xs transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 8. CLEAN FOOTER (Flax & Woods Persona, No WhatsApp)          */}
      {/* ============================================================ */}
      <footer className="mt-auto w-full border-t border-[var(--fw-wood-border)] bg-[var(--fw-surface-subtle)]/75 backdrop-blur-md text-[var(--fw-text-main)] z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-7 sm:py-10">
          <div className="flex flex-col items-center gap-5 pb-5 sm:pb-6 border-b border-[var(--fw-wood-border)] md:flex-row md:justify-between">
            {/* Brand with Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/sarhan-logo.png"
                alt={ui.companyName}
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
              />
              <div className="flex flex-col items-start text-start">
                <span className="font-serif text-base sm:text-xl font-bold tracking-tight text-[var(--fw-text-main)]">
                  {ui.companyName}
                </span>
                <p className="text-xs text-[var(--fw-text-muted)] max-w-[200px] sm:max-w-md">
                  {ui.companyTagline}
                </p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[var(--fw-text-main)]">
              <Link href="/" className="hover:text-[var(--fw-flax-gold)] transition-colors">
                {ui.backToHome}
              </Link>
              <span>·</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1 hover:text-[var(--fw-flax-gold)] transition-colors"
              >
                <span>{ui.topBtn}</span>
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Email contact */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${EMAIL_BASE}?subject=${encodeURIComponent(
                  locale === 'ar'
                    ? 'استفسار: منتجات ألياف الكتان واللينن'
                    : locale === 'fr'
                      ? 'Demande : Produits de Lin'
                      : locale === 'zh'
                        ? '咨询：亚麻与亚麻纤维产品'
                        : 'Inquiry: Flax & Linen Products'
                )}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--fw-wood-border)] bg-[var(--fw-card-glass)] px-3 sm:px-4 py-2 text-xs font-bold text-[var(--fw-text-main)] hover:border-[var(--fw-flax-gold)] hover:text-[var(--fw-flax-gold)] transition-all shadow-xs max-w-[220px] sm:max-w-none"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[var(--fw-flax-gold)]" />
                <span className="truncate">{EMAIL_BASE}</span>
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--fw-text-soft)] text-center sm:text-start">
            <span>
              © {new Date().getFullYear()} {ui.companyName}. {ui.rightsReserved}
            </span>
            <span className="text-[11px]">
              {ui.subFooterText}
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
