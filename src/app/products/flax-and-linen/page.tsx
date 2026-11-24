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
  Mail,
  User,
  Phone,
  MapPin,
  FileText,
  X,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSelector } from '@/components/language-selector'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'
import {
  CATALOG_PRODUCTS,
  CATALOG_UI,
  type CatalogProduct,
} from './product-data'

const EMAIL_BASE = 'hello@sarhan.example.com'

export default function ProductFlaxAndLinenPage() {
  const { locale, dir } = useI18n()
  const [selectedProductForShip, setSelectedProductForShip] = React.useState<CatalogProduct | null>(null)

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
      sectionTag: CATALOG_UI.sectionTag[locale] ?? CATALOG_UI.sectionTag.en,
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
    }
  }, [locale])

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedProductForShip) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmittedSuccess(false)
      setFormError('')
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProductForShip])

  const handleOpenShipModal = (product: CatalogProduct) => {
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

    const prodName = selectedProductForShip?.name ?? 'Flax Commodity'
    const pageNum = selectedProductForShip?.pageNumber ?? ''

    // Prepare formal email body
    const subject = `Shipping & Quotation Request: ${prodName} (Catalog Page ${pageNum}) — ${buyerName.trim()}`
    const emailBody = [
      'SARHAN FOR IMPORT & EXPORT — OFFICIAL COMMODITY SHIPPING REQUEST',
      '==================================================================',
      `Product: ${prodName} (Page ${pageNum})`,
      `Customer / Company: ${buyerName.trim()}`,
      `Business Email: ${buyerEmail.trim()}`,
      buyerPhone.trim() ? `Phone / WeChat: ${buyerPhone.trim()}` : '',
      quantity.trim() ? `Required Quantity: ${quantity.trim()}` : '',
      destination.trim() ? `Destination Port / Country: ${destination.trim()}` : '',
      '',
      'Specifications & Cargo Notes:',
      notes.trim() || 'Please send standard export specifications, bale packing, and CIF/FOB quote.',
      '',
      '==================================================================',
      'Sent via SARHAN Products Portal',
    ]
      .filter(Boolean)
      .join('\n')

    const mailtoUrl = `mailto:${EMAIL_BASE}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

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
      className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 antialiased selection:bg-[#d4af37] selection:text-[#061224]"
    >
      {/* ============================================================ */}
      {/* 1. TOP UTILITY NAVIGATION (Light/Dark Mode, Lang, No WhatsApp)*/}
      {/* ============================================================ */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/85 backdrop-blur-md transition-colors">
        <nav
          aria-label="Utility"
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8"
        >
          {/* Top Left: Theme toggle + Back to home link */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-all group"
            >
              <ArrowLeft className="h-3.5 w-3.5 rtl:-scale-x-100 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
              <span className="hidden sm:inline">{ui.backToHome}</span>
            </Link>
          </div>

          {/* Center Brand Wordmark (links to home) */}
          <Link
            href="/"
            className="flex flex-col items-center text-center group"
          >
            <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] sm:tracking-[0.25em] text-foreground group-hover:text-primary transition-colors uppercase">
              SARHAN
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground group-hover:text-primary transition-colors">
              IMPORT & EXPORT
            </span>
          </Link>

          {/* Top Right: Language selector (No WhatsApp anywhere) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />
          </div>
        </nav>
      </header>

      {/* ============================================================ */}
      {/* 2. CATALOG HERO HEADER                                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden border-b border-border/40 py-8 sm:py-12 md:py-14 bg-gradient-to-b from-muted/20 via-transparent to-transparent">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 md:px-8">
          {/* Tag Pill: "04 PRODUCTS" */}
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-[var(--gold-border)] bg-card/80 px-3.5 py-1 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-serif text-xs font-bold uppercase tracking-[0.22em] text-primary">
              {ui.sectionTag}
            </span>
          </div>

          {/* Regal Headline */}
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-center"
            style={{
              background: 'var(--gold-grad-bright)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'var(--gold-primary)',
            }}
          >
            {ui.collectionTitle}
          </h1>

          {/* High-contrast readable Subtitle (General Flax, Not Egyptian) */}
          <p className="mt-3.5 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-foreground/80 dark:text-slate-200 font-normal">
            {ui.collectionSubtitle}
          </p>

          {/* Guarantee Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-semibold text-foreground">
            <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-3 py-1 shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>{ui.egyptOrigin}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-3 py-1 shadow-xs">
              <Package className="h-3.5 w-3.5 text-primary" />
              <span>{ui.packagingBales}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-3 py-1 shadow-xs">
              <Award className="h-3.5 w-3.5 text-primary" />
              <span>ISO 9001 Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. MAIN CATALOG: COMPACT SQUARE CARDS (4 PER LINE)          */}
      {/* ============================================================ */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {CATALOG_PRODUCTS.map((product, index) => {
            const descriptionText = product.description[locale] ?? product.description.en
            const specs = product.specifications[locale] ?? product.specifications.en
            const apps = product.applications[locale] ?? product.applications.en
            const translatedTitle = product.translatedName[locale] ?? product.name
            const staggerClass = `card-stagger-${(index % 8) + 1}`

            return (
              <article
                key={product.id}
                id={product.id}
                className={cn(
                  'gf-card card-slide-in card-hover-lift rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between overflow-hidden',
                  'bg-card text-card-foreground shadow-sm hover:shadow-md border border-[var(--gold-border)]',
                  staggerClass
                )}
              >
                {/* Card Top: Compact Photo & Badges */}
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted/50 border border-border/40 group">
                    <Image
                      src={product.photo}
                      alt={translatedTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      priority={index < 4}
                    />

                    {/* Page Number Badge */}
                    <div className="absolute top-2 start-2 z-10 inline-flex items-center rounded-md bg-black/80 px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-xs backdrop-blur-xs">
                      PAGE {product.pageNumber}
                    </div>
                  </div>

                  {/* Translatable Item Name as PRIMARY Headline */}
                  <div className="mt-3">
                    <h2 className="font-serif text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug line-clamp-1">
                      {translatedTitle}
                    </h2>
                    {locale !== 'en' ? (
                      <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 line-clamp-1 mt-0.5">
                        {product.name}
                      </p>
                    ) : (
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-primary mt-0.5">
                        NATURAL FLAX & LINEN
                      </p>
                    )}
                  </div>

                  {/* Compact Description (2 lines max to keep card square) */}
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground/80 dark:text-slate-300 font-normal line-clamp-2">
                    {descriptionText}
                  </p>

                  {/* Compact Specifications & Applications Tags */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 border-t border-border/40 pt-2 text-[11px]">
                    <span className="inline-flex items-center gap-1 rounded-md bg-muted/60 px-2 py-0.5 text-foreground/85 font-medium text-[11px] line-clamp-1">
                      <Layers className="gi h-3 w-3 shrink-0" />
                      <span>{specs[0]}</span>
                    </span>

                    <span className="inline-flex items-center rounded-md bg-accent/40 px-2 py-0.5 text-foreground/75 font-normal text-[11px] line-clamp-1">
                      {apps[0]}
                    </span>
                  </div>
                </div>

                {/* Card Bottom: Compact "Ship" Button */}
                <div className="mt-3.5 pt-2.5 border-t border-border/40">
                  <button
                    type="button"
                    onClick={() => handleOpenShipModal(product)}
                    className={cn(
                      'group relative w-full inline-flex items-center justify-between gap-2 rounded-xl py-2 px-3.5 font-bold text-xs',
                      'gold-fill border border-transparent shadow-xs',
                      'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 ease-out',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <Package className="h-3.5 w-3.5" />
                      <span>{ui.shipProduct}</span>
                    </div>

                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black/15 dark:bg-white/15 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                      <ArrowRight className="h-3 w-3 rtl:-scale-x-100" />
                    </div>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </main>

      {/* ============================================================ */}
      {/* 4. COMMODITY SHIPPING QUOTE MODAL (Same form styling)        */}
      {/* ============================================================ */}
      {selectedProductForShip && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ship-dialog-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/65 backdrop-blur-md animate-in fade-in duration-200"
            onClick={handleCloseShipModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            className={cn(
              'relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl p-5 sm:p-7 md:p-9',
              'gf-card bg-card/95 text-foreground shadow-2xl shadow-black/40 border border-[var(--gold-border)]',
              'animate-in fade-in-0 zoom-in-95 duration-200'
            )}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent border border-[var(--gold-arrow-border)]">
                  <Package className="gi h-6 w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <h2
                    id="ship-dialog-title"
                    className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground"
                  >
                    {ui.shipModalTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-0.5">
                    {ui.shipModalDesc}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseShipModal}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground/80 hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Selected Product Banner */}
            <div className="mt-4 flex items-center justify-between rounded-xl bg-muted/50 p-3 border border-border/60">
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
                  <span className="text-[10px] uppercase font-bold text-primary">
                    PAGE {selectedProductForShip.pageNumber} · NATURAL FLAX
                  </span>
                  <p className="text-sm font-bold text-foreground">
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
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <User className="gi h-3.5 w-3.5" />
                    <span>{ui.buyerNameLabel}</span>
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder={ui.buyerNamePlaceholder}
                    className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
                  />
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Mail className="gi h-3.5 w-3.5" />
                    <span>{ui.buyerEmailLabel}</span>
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder={ui.buyerEmailPlaceholder}
                    className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Quantity and Destination */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <Package className="gi h-3.5 w-3.5" />
                    <span>{ui.quantityLabel}</span>
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder={ui.quantityPlaceholder}
                    className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
                  />
                </div>

                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <MapPin className="gi h-3.5 w-3.5" />
                    <span>{ui.destinationLabel}</span>
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder={ui.destinationPlaceholder}
                    className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Phone number */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <Phone className="gi h-3.5 w-3.5" />
                  <span>{ui.buyerPhoneLabel}</span>
                </label>
                <input
                  type="tel"
                  value={buyerPhone}
                  onChange={(e) => setBuyerPhone(e.target.value)}
                  placeholder={ui.buyerPhonePlaceholder}
                  className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
                />
              </div>

              {/* Row 4: Notes and Specifications */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <FileText className="gi h-3.5 w-3.5" />
                  <span>{ui.notesLabel}</span>
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={ui.notesPlaceholder}
                  className="w-full rounded-xl border border-border/70 bg-muted/40 p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all resize-none"
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
                <div className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/30 p-3 text-xs font-semibold text-primary animate-in fade-in">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Your shipping request has been prepared and sent!</span>
                </div>
              )}

              {/* Exact same single Submit Button styling */}
              <div className="pt-2">
                <button
                  type="submit"
                  className={cn(
                    'group relative w-full inline-flex items-center justify-center gap-3 rounded-2xl py-3.5 px-6 font-semibold text-sm sm:text-base',
                    'gold-fill border border-transparent shadow-lg shadow-[rgba(197,136,12,0.25)] dark:shadow-[rgba(212,175,55,0.2)]',
                    'hover:shadow-xl hover:shadow-[rgba(197,136,12,0.38)] dark:hover:shadow-[rgba(212,175,55,0.35)]',
                    'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                  )}
                >
                  <span className="font-bold tracking-wider uppercase text-sm sm:text-base">
                    {ui.submitBtn}
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 dark:bg-white/15 backdrop-blur-xs transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. CLEAN FOOTER (Without WhatsApp)                           */}
      {/* ============================================================ */}
      <footer className="mt-auto w-full border-t border-border/40 bg-card/60 backdrop-blur-md text-foreground">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-border/50">
            {/* Left: Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-1">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {ui.companyName}
              </span>
              <p className="text-xs sm:text-sm text-foreground/70 max-w-md">
                {ui.companyTagline}
              </p>
            </div>

            {/* Middle: Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                {ui.backToHome}
              </Link>
              <span>·</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                <span>Top</span>
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Right: Email contact only (No WhatsApp) */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${EMAIL_BASE}?subject=${encodeURIComponent('Inquiry: Flax & Linen Products')}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-xs font-bold text-foreground hover:border-primary hover:text-primary transition-all shadow-xs"
              >
                <Mail className="gi h-3.5 w-3.5" />
                <span>{EMAIL_BASE}</span>
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              © {new Date().getFullYear()} SARHAN FOR IMPORT & EXPORT. All rights reserved.
            </span>
            <span className="text-[11px]">
              International Logistics & Natural Commodity Sourcing
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
