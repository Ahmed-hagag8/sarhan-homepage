'use client'

import * as React from 'react'
import { X, Plane, Mail, User, Phone, MapPin, FileText } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

interface ShipInquiryDialogProps {
  open: boolean
  onClose: () => void
}

const DUMMY_WHATSAPP_NUMBER = '1555000100'
const DUMMY_EMAIL_ADDRESS = 'hello@sarhan.example.com'

export function ShipInquiryDialog({ open, onClose }: ShipInquiryDialogProps) {
  const { t, dir } = useI18n()

  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [origin, setOrigin] = React.useState('')
  const [destination, setDestination] = React.useState('')
  const [details, setDetails] = React.useState('')
  const [error, setError] = React.useState('')

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

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const message = [
      '🚢 *SARHAN Import & Export — Shipping Quote Request*',
      '─────────────────────────',
      `👤 *Name / Company:* ${name.trim()}`,
      phone.trim() ? `📞 *Phone / Contact:* ${phone.trim()}` : null,
      origin.trim() ? `📍 *Origin (From):* ${origin.trim()}` : null,
      destination.trim() ? `🏁 *Destination (To):* ${destination.trim()}` : null,
      `📦 *Cargo Specifications:* \n${details.trim()}`,
      '─────────────────────────',
      'Sent via SARHAN Official Portal',
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${DUMMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const subject = `Shipping Quote Request: ${name.trim()}`
    const body = [
      'SARHAN Import & Export — Shipping Quote Request',
      '==================================================',
      `Name / Company: ${name.trim()}`,
      phone.trim() ? `Contact Phone: ${phone.trim()}` : '',
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

    const mailto = `mailto:${DUMMY_EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
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
                className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              >
                {t.shipForm.dialogTitle}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                {t.shipForm.dialogDesc}
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label={t.shipForm.close}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form className="mt-5 space-y-4">
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
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
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Phone className="gi h-3.5 w-3.5" />
                <span>{t.shipForm.phoneLabel}</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.shipForm.phonePlaceholder}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>
          </div>

          {/* Row 2: Origin and Destination */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <MapPin className="gi h-3.5 w-3.5 text-primary" />
                <span>{t.shipForm.originLabel}</span>
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder={t.shipForm.originPlaceholder}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>

            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <MapPin className="gi h-3.5 w-3.5" />
                <span>{t.shipForm.destLabel}</span>
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={t.shipForm.destPlaceholder}
                className="w-full rounded-xl border border-border/70 bg-muted/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all"
              />
            </div>
          </div>

          {/* Details & Notes */}
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-foreground">
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
              className="w-full rounded-xl border border-border/70 bg-muted/40 p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 transition-all resize-none"
            />
          </div>

          {/* Validation error notice */}
          {error && (
            <p className="text-xs font-medium text-destructive animate-in fade-in">
              {error}
            </p>
          )}

          {/* Action Buttons: WhatsApp and Email dispatch */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className={cn(
                'flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl py-3 px-4 font-semibold text-sm',
                'gf text-foreground shadow-md',
                'hover:-translate-y-0.5 hover:shadow-lg transition-all active:translate-y-0',
              )}
            >
              <WhatsAppIcon className="gi h-5 w-5" />
              <span>{t.shipForm.sendWhatsApp}</span>
            </button>

            <button
              type="button"
              onClick={handleSendEmail}
              className={cn(
                'flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl py-3 px-4 font-semibold text-sm',
                'gf text-foreground shadow-md',
                'hover:-translate-y-0.5 hover:shadow-lg transition-all active:translate-y-0',
              )}
            >
              <Mail className="gi h-4 w-4" />
              <span>{t.shipForm.sendEmail}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
