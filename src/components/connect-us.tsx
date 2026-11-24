'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { Phone, Mail, X, ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

const WHATSAPP_NUMBER = '+1 555-000-100'
const WHATSAPP_URL = 'https://wa.me/1555000100'
const EMAIL_ADDRESS = 'hello@sarhan.example.com'
const EMAIL_URL = 'mailto:hello@sarhan.example.com'
const PHONE_NUMBER = '+1 555-000-0000'
const PHONE_URL = 'tel:+15550000000'

export function ConnectUs() {
  const { t } = useI18n()
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape & Lock body scroll
  React.useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Connect Us Button in Footer (Matches Location button styling) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={t.contact.connectUs}
        className={cn(
          'inline-flex h-11 items-center gap-2 rounded-full px-4 sm:px-5 cursor-pointer',
          'gf bg-card/90 text-black dark:text-white shadow-md',
          'transition-all duration-300 ease-out',
          'hover:-translate-y-0.5 hover:shadow-lg hover:text-primary',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        )}
      >
        <Phone className="gi h-4 w-4" aria-hidden="true" />
        <span className="text-sm font-semibold tracking-tight">
          {t.contact.connectUs}
        </span>
      </button>

      {/* Pop-up Modal rendered at body root via portal to always center in viewport */}
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="connect-dialog-title"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Modal Container in Dead Center of Viewport */}
            <div
              className={cn(
                'relative z-10 w-full max-w-lg rounded-3xl p-6 sm:p-8',
                'gf-card bg-card/95 text-foreground shadow-2xl shadow-black/40',
                'animate-in fade-in-0 zoom-in-95 duration-200',
              )}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent border border-[var(--gold-arrow-border)]">
                    <Phone className="gi h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2
                      id="connect-dialog-title"
                      className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white"
                    >
                      {t.contact.connectUs}
                    </h2>
                    <p className="text-xs sm:text-sm text-black dark:text-white mt-0.5">
                      {t.contactBar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.shipForm.close}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-black hover:text-black dark:text-white dark:hover:text-white hover:bg-muted/80 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Vertical Enhanced Connect Cards */}
              <div className="mt-5 space-y-3">
                {/* 1. WhatsApp Card */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl',
                    'gf bg-card/90 border border-[var(--gold-border)] shadow-sm',
                    'hover:-translate-y-0.5 hover:shadow-md hover:bg-accent/60 transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  )}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent border border-[var(--gold-arrow-border)] transition-transform duration-300 group-hover:scale-105">
                      <WhatsAppIcon className="gi h-6 w-6" />
                    </div>
                    <div className="flex flex-col text-start min-w-0">
                      <span className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                        {t.contactBar.whatsapp}
                      </span>
                      <span className="text-xs sm:text-sm text-black/75 dark:text-white/75 font-mono truncate mt-0.5">
                        {WHATSAPP_NUMBER}
                      </span>
                    </div>
                  </div>

                  <div className="arrow-chip flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105">
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                  </div>
                </a>

                {/* 2. Email Card */}
                <a
                  href={EMAIL_URL}
                  className={cn(
                    'group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl',
                    'gf bg-card/90 border border-[var(--gold-border)] shadow-sm',
                    'hover:-translate-y-0.5 hover:shadow-md hover:bg-accent/60 transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  )}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent border border-[var(--gold-arrow-border)] transition-transform duration-300 group-hover:scale-105">
                      <Mail className="gi h-6 w-6" />
                    </div>
                    <div className="flex flex-col text-start min-w-0">
                      <span className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                        {t.contactBar.email}
                      </span>
                      <span className="text-xs sm:text-sm text-black/75 dark:text-white/75 font-mono truncate mt-0.5">
                        {EMAIL_ADDRESS}
                      </span>
                    </div>
                  </div>

                  <div className="arrow-chip flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105">
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                  </div>
                </a>

                {/* 3. Phone Direct Card */}
                <a
                  href={PHONE_URL}
                  className={cn(
                    'group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl',
                    'gf bg-card/90 border border-[var(--gold-border)] shadow-sm',
                    'hover:-translate-y-0.5 hover:shadow-md hover:bg-accent/60 transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  )}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent border border-[var(--gold-arrow-border)] transition-transform duration-300 group-hover:scale-105">
                      <Phone className="gi h-5 w-5" />
                    </div>
                    <div className="flex flex-col text-start min-w-0">
                      <span className="text-sm sm:text-base font-bold text-black dark:text-white tracking-tight">
                        {t.contactBar.call}
                      </span>
                      <span className="text-xs sm:text-sm text-black/75 dark:text-white/75 font-mono truncate mt-0.5">
                        {PHONE_NUMBER}
                      </span>
                    </div>
                  </div>

                  <div className="arrow-chip flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105">
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                  </div>
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
