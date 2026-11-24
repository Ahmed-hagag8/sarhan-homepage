'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  X,
  Plane,
  Mail,
  User,
  Phone,
  MapPin,
  FileText,
  ArrowRight,
  Package,
  ExternalLink,
  ChevronDown,
} from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'
import { CATALOG_PRODUCTS } from '@/app/products/flax-and-linen/product-data'

interface ShipInquiryDialogProps {
  open: boolean
  onClose: () => void
}

const DUMMY_WHATSAPP_NUMBER = '1555000100'
const DUMMY_EMAIL_ADDRESS = 'hello@sarhan.example.com'

export function ShipInquiryDialog({ open, onClose }: ShipInquiryDialogProps) {
  const { t, locale, dir } = useI18n()

  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [selectedProductId, setSelectedProductId] = React.useState('')
  const [origin, setOrigin] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [details, setDetails] = React.useState('')
  const [error, setError] = React.useState('')

  const selectedProduct = React.useMemo(() => {
    return CATALOG_PRODUCTS.find((p) => p.id === selectedProductId)
  }, [selectedProductId])

  // Close on Escape & Lock body scroll
  React.useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const validate = () => {
    if (!name.trim() || !details.trim()) {
      setError(t.shipForm.validationError)
      return false
    }
    setError('')
    return true
  }

  const handleSubmitBoth = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const productTitle = selectedProduct
      ? `${selectedProduct.translatedName[locale] ?? selectedProduct.name} (${selectedProduct.name})`
      : t.shipForm.generalCargo

    // 1. Prepare WhatsApp message
    const waMessage = [
      '🚢 *SARHAN Import & Export — Shipping Quote Request*',
      '─────────────────────────',
      `👤 *Name / Company:* ${name.trim()}`,
      phone.trim() ? `📞 *Phone / Contact:* ${phone.trim()}` : null,
      `🏷️ *Product / Cargo:* ${productTitle}`,
      selectedProduct
        ? `🌾 *Flax Catalog Link:* https://sarhan.example.com/products/flax-and-linen#${selectedProduct.id}`
        : null,
      origin.trim() ? `📍 *Origin (From):* ${origin.trim()}` : null,
      destination.trim() ? `🏁 *Destination (To):* ${destination.trim()}` : null,
      `📦 *Cargo Specifications:* \n${details.trim()}`,
      '─────────────────────────',
      'Sent via SARHAN Official Portal',
    ]
      .filter(Boolean)
      .join('\n')

    const waUrl = `https://wa.me/${DUMMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`

    // 2. Prepare Email message
    const subject = `Shipping Quote Request: ${selectedProduct ? selectedProduct.name : 'General Cargo'} — ${name.trim()}`
    const emailBody = [
      'SARHAN Import & Export — Shipping Quote Request',
      '==================================================',
      `Name / Company: ${name.trim()}`,
      phone.trim() ? `Contact Phone: ${phone.trim()}` : '',
      `Selected Commodity / Product: ${productTitle}`,
      selectedProduct
        ? `Catalog Item Link: /products/flax-and-linen#${selectedProduct.id}`
        : '',
      origin.trim() ? `Origin (From): ${origin.trim()}` : '',
      destination.trim() ? `Destination (To): ${destination.trim()}` : '',
      '',
      'Cargo Specifications & Details:',
      details.trim(),
      '',
      '==================================================',
      'Sent from SARHAN Online Portal',
    ]
      .filter(Boolean)
      .join('\n')

    const mailtoUrl = `mailto:${DUMMY_EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    // Trigger user's mail client
    setTimeout(() => {
      window.location.href = mailtoUrl
    }, 250)

    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ship-inquiry-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className={cn(
          'relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl p-5 sm:p-7 md:p-9',
          'gf-card bg-card/95 text-foreground shadow-2xl shadow-black/40',
          'animate-in fade-in-0 zoom-in-95 duration-200',
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent border border-[var(--gold-arrow-border)]">
              <Plane className="gi h-6 w-6" strokeWidth={1.75} />
            </div>
            <div>
              <h2
                id="ship-inquiry-title"
                className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground dark:text-white"
              >
                {t.shipForm.dialogTitle}
              </h2>
              <p className="text-xs sm:text-sm text-black dark:text-white mt-0.5">
                {t.shipForm.dialogDesc}
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label={t.shipForm.close}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-black hover:text-black dark:text-white dark:hover:text-white hover:bg-muted/80 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmitBoth} className="mt-5 space-y-4">
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground dark:text-white">
                <User className="gi h-3.5 w-3.5" />
                <span>{t.shipForm.nameLabel}</span>
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.shipForm.namePlaceholder}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground dark:text-white">
                <Phone className="gi h-3.5 w-3.5" />
                <span>{t.shipForm.phoneLabel}</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.shipForm.phonePlaceholder}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>
          </div>

          {/* Row 2: Product / Cargo Selection List */}
          <div>
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground dark:text-white">
                <Package className="gi h-3.5 w-3.5" />
                <span>{t.shipForm.productSelectLabel}</span>
              </label>

              {/* Direct link to /products/flax-and-linen */}
              <Link
                href="/products/flax-and-linen"
                target="_blank"
                className="text-[11px] font-bold text-primary hover:underline inline-flex items-center gap-1 transition-colors"
                title={t.shipForm.viewFlaxCatalog}
              >
                <span>{t.shipForm.viewFlaxCatalog}</span>
                <ExternalLink className="h-3 w-3 rtl:-scale-x-100" />
              </Link>
            </div>

            {/* Product Select Dropdown */}
            <div className="relative">
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full appearance-none rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 pe-9 text-sm text-foreground dark:text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all font-medium cursor-pointer"
              >
                <option value="">{t.shipForm.generalCargo}</option>
                <optgroup label={t.shipForm.flaxCategory}>
                  {CATALOG_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.translatedName[locale] ?? prod.name} ({prod.name})
                    </option>
                  ))}
                </optgroup>
              </select>
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-3 text-muted-foreground">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>

            {/* Selected Product Interactive Mini Preview Card */}
            {selectedProduct && (
              <div className="mt-2.5 flex items-center justify-between rounded-xl bg-accent/70 border border-[var(--gold-arrow-border)] p-2.5 animate-in fade-in duration-200">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-border/50">
                    <Image
                      src={selectedProduct.photo}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-start min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary block truncate">
                      {t.shipForm.flaxCategory}
                    </span>
                    <p className="text-xs font-bold text-foreground dark:text-white truncate">
                      {selectedProduct.translatedName[locale] ?? selectedProduct.name}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/products/flax-and-linen#${selectedProduct.id}`}
                  target="_blank"
                  className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-card/90 px-2.5 py-1 text-[11px] font-semibold text-primary hover:bg-card border border-border/50 transition-colors shadow-xs"
                >
                  <span>
                    {locale === 'ar'
                      ? 'عرض بالكتالوج'
                      : locale === 'fr'
                        ? 'Voir détails'
                        : locale === 'zh'
                          ? '查看详情'
                          : 'View in Catalog'}
                  </span>
                  <ExternalLink className="h-3 w-3 rtl:-scale-x-100" />
                </Link>
              </div>
            )}
          </div>

          {/* Row 3: Origin and Destination */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground dark:text-white">
                <MapPin className="gi h-3.5 w-3.5 text-primary" />
                <span>{t.shipForm.originLabel}</span>
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder={t.shipForm.originPlaceholder}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground dark:text-white">
                <MapPin className="gi h-3.5 w-3.5" />
                <span>{t.shipForm.destLabel}</span>
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={t.shipForm.destPlaceholder}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>
          </div>

          {/* Row 4: Details & Notes */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground dark:text-white">
              <FileText className="gi h-3.5 w-3.5" />
              <span>{t.shipForm.detailsLabel}</span>
              <span className="text-destructive">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder={t.shipForm.detailsPlaceholder}
              className="w-full rounded-xl border border-border/70 bg-muted/40 p-3 text-sm text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all resize-none"
            />
          </div>

          {/* Validation error notice */}
          {error && (
            <p className="text-xs font-medium text-destructive animate-in fade-in">
              {error}
            </p>
          )}

          {/* Single Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className={cn(
                'group relative w-full inline-flex items-center justify-center gap-3 rounded-2xl py-3.5 px-6 font-semibold text-sm sm:text-base',
                'gold-fill border border-transparent shadow-lg shadow-[rgba(197,136,12,0.25)] dark:shadow-[rgba(212,175,55,0.2)]',
                'hover:shadow-xl hover:shadow-[rgba(197,136,12,0.38)] dark:hover:shadow-[rgba(212,175,55,0.35)]',
                'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              )}
            >
              {/* Submit Label */}
              <span className="font-bold tracking-wider uppercase text-sm sm:text-base">
                {t.shipForm.submit}
              </span>

              {/* Action arrow */}
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 dark:bg-white/15 backdrop-blur-xs transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
