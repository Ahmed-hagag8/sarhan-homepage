'use client'

import * as React from 'react'
import { X, Sparkles, Check, Send, Mail, ShieldCheck, Feather, Award } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

interface EgyFlaxDialogProps {
  open: boolean
  onClose: () => void
}

const DUMMY_WHATSAPP_NUMBER = '1555000100'
const DUMMY_EMAIL_ADDRESS = 'hello@sarhan.example.com'

export function EgyFlaxDialog({ open, onClose }: EgyFlaxDialogProps) {
  const { t } = useI18n()

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

  const handleInquireWhatsApp = () => {
    const message = [
      '🌿 *Inquiry for FLAX & LINEN PRODUCTS (Egyptian Natural Flax & Fibers)*',
      '─────────────────────────',
      'Hello SARHAN Team, I would like to request product specifications, pricing, and minimum order quantities for *FLAX & LINEN PRODUCTS*.',
      '─────────────────────────',
      'Sent via SARHAN Products Portal',
    ].join('\n')

    const url = `https://wa.me/${DUMMY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleInquireEmail = () => {
    const subject = 'Product Inquiry: FLAX & LINEN PRODUCTS - Egyptian Natural Flax & Fibers'
    const body = [
      'Hello SARHAN Import & Export Team,',
      '',
      'I am interested in sourcing FLAX & LINEN PRODUCTS (Natural Egyptian Flax & Fibers). Please provide product technical sheets, current FOB/CIF pricing, and available packaging/container volumes.',
      '',
      'Thank you.',
    ].join('\n')

    const mailto = `mailto:${DUMMY_EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="flax-linen-title"
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
          'relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-8 md:p-10',
          'gf-card bg-card/95 text-foreground shadow-2xl shadow-black/40',
          'animate-in fade-in-0 zoom-in-95 duration-200',
        )}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.productEgyFlax.close}
          className="absolute top-4 end-4 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors z-20"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Ambient glow behind product emblem */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider gf text-foreground shadow-sm">
            <Sparkles className="gi h-3.5 w-3.5" />
            {t.productEgyFlax.badge}
          </span>

          {/* Product Title */}
          <h2
            id="flax-linen-title"
            className="mt-4 font-serif text-4xl sm:text-5xl font-black tracking-tight"
            style={{
              background: 'var(--gold-grad-bright)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'var(--gold-primary)',
            }}
          >
            {t.productEgyFlax.name}
          </h2>

          {/* Tagline */}
          <p className="mt-1 text-sm sm:text-base font-medium text-foreground/85">
            {t.productEgyFlax.tagline}
          </p>

          {/* Gold divider */}
          <div className="gold-line h-px w-24 my-4" />

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed sm:leading-relaxed max-w-md">
            {t.productEgyFlax.description}
          </p>

          {/* 3 Specifications Pills */}
          <div className="mt-6 grid w-full grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="flex flex-col items-center p-3 rounded-2xl bg-muted/40 border border-border/60">
              <Feather className="gi h-5 w-5 mb-1.5" />
              <span className="text-xs font-semibold text-foreground">
                {t.productEgyFlax.spec1}
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-muted/40 border border-border/60">
              <ShieldCheck className="gi h-5 w-5 mb-1.5" />
              <span className="text-xs font-semibold text-foreground">
                {t.productEgyFlax.spec2}
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-muted/40 border border-border/60">
              <Award className="gi h-5 w-5 mb-1.5" />
              <span className="text-xs font-semibold text-foreground">
                {t.productEgyFlax.spec3}
              </span>
            </div>
          </div>

          {/* Action inquiry buttons */}
          <div className="mt-8 flex w-full flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleInquireWhatsApp}
              className={cn(
                'flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-semibold text-sm',
                'bg-[#25D366] text-white shadow-md shadow-[#25D366]/20',
                'hover:bg-[#20ba59] hover:-translate-y-0.5 transition-all',
              )}
            >
              <WhatsAppIcon className="h-5 w-5 fill-white" />
              <span>{t.productEgyFlax.inquireWhatsApp}</span>
            </button>

            <button
              type="button"
              onClick={handleInquireEmail}
              className={cn(
                'flex-1 inline-flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-semibold text-sm',
                'gf text-foreground shadow-md',
                'hover:-translate-y-0.5 hover:shadow-lg transition-all',
              )}
            >
              <Mail className="gi h-4 w-4" />
              <span>{t.productEgyFlax.inquireEmail}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
