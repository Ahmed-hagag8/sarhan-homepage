'use client'

import * as React from 'react'
import { Phone, Mail, ChevronDown, Check, Copy, ExternalLink, Sparkles } from 'lucide-react'
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
  const { t, dir } = useI18n()
  const [open, setOpen] = React.useState(false)
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const hovering = React.useRef(false)

  // Outside click & Escape handler
  React.useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [open])

  const handleMouseEnter = () => {
    hovering.current = true
    setOpen(true)
  }

  const handleMouseLeave = () => {
    hovering.current = false
    setTimeout(() => {
      if (!hovering.current) setOpen(false)
    }, 150)
  }

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2000)
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Modern Trigger Bar */}
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'group relative flex h-11 items-center gap-3 rounded-full px-5 sm:px-6',
          'gf bg-card/90 backdrop-blur-md text-foreground shadow-md',
          'transition-all duration-300 ease-out',
          'hover:-translate-y-0.5 hover:shadow-lg',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          open && 'ring-2 ring-primary/60 border-primary',
        )}
      >
        {/* Pulsing online indicator + Phone icon */}
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-accent/80 border border-[var(--gold-arrow-border)]">
          <Phone className="gi h-3.5 w-3.5" strokeWidth={2} />
          <span className="absolute -top-0.5 -end-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
        </span>

        <span className="text-sm font-semibold tracking-tight text-foreground">
          {t.contact.connectUs}
        </span>

        {/* Small chevron */}
        <ChevronDown
          className={cn(
            'gi h-4 w-4 transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>

      {/* Modern Popover Select Bar */}
      {open && (
        <div
          role="menu"
          aria-label={t.contact.connectUs}
          className={cn(
            'absolute bottom-full mb-3 z-50 w-[310px] sm:w-[340px] rounded-3xl p-3.5',
            'gf-card bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/25',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            'start-1/2 -translate-x-1/2',
          )}
        >
          {/* Header row in dropdown */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-border/50 px-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="gi h-3 w-3" />
              <span>{t.contactBar.title}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {t.contactBar.online}
            </span>
          </div>

          {/* Options List */}
          <div className="space-y-2">
            {/* 1. WhatsApp Option */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group/opt flex items-center justify-between p-2.5 rounded-2xl border border-border/60 bg-muted/30',
                'hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-all',
              )}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366] transition-transform group-hover/opt:scale-105">
                  <WhatsAppIcon className="h-5 w-5 fill-[#25D366]" />
                </span>
                <div className="flex flex-col text-start">
                  <span className="text-xs font-semibold text-foreground group-hover/opt:text-[#25D366] transition-colors">
                    {t.contactBar.whatsapp}
                  </span>
                  <span className="text-[11px] text-muted-foreground" dir="ltr">
                    {WHATSAPP_NUMBER}
                  </span>
                </div>
              </div>

              <span className="text-xs text-muted-foreground group-hover/opt:text-foreground flex items-center gap-1">
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* 2. Email Option */}
            <div
              className={cn(
                'group/opt flex items-center justify-between p-2.5 rounded-2xl border border-border/60 bg-muted/30',
                'hover:border-primary/40 hover:bg-accent/40 transition-all',
              )}
            >
              <a
                href={EMAIL_URL}
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-transform group-hover/opt:scale-105">
                  <Mail className="gi h-4 w-4" />
                </span>
                <div className="flex flex-col text-start min-w-0">
                  <span className="text-xs font-semibold text-foreground group-hover/opt:text-primary transition-colors">
                    {t.contactBar.email}
                  </span>
                  <span className="text-[11px] text-muted-foreground truncate" dir="ltr">
                    {EMAIL_ADDRESS}
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={(e) => copyToClipboard(EMAIL_ADDRESS, 'email', e)}
                title={t.contactBar.copy}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors"
              >
                {copiedKey === 'email' ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            {/* 3. Direct Phone Option */}
            <div
              className={cn(
                'group/opt flex items-center justify-between p-2.5 rounded-2xl border border-border/60 bg-muted/30',
                'hover:border-primary/40 hover:bg-accent/40 transition-all',
              )}
            >
              <a
                href={PHONE_URL}
                className="flex items-center gap-3 flex-1 min-w-0"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-primary transition-transform group-hover/opt:scale-105">
                  <Phone className="gi h-4 w-4" />
                </span>
                <div className="flex flex-col text-start min-w-0">
                  <span className="text-xs font-semibold text-foreground group-hover/opt:text-primary transition-colors">
                    {t.contactBar.call}
                  </span>
                  <span className="text-[11px] text-muted-foreground" dir="ltr">
                    {PHONE_NUMBER}
                  </span>
                </div>
              </a>

              <button
                type="button"
                onClick={(e) => copyToClipboard(PHONE_NUMBER, 'phone', e)}
                title={t.contactBar.copy}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors"
              >
                {copiedKey === 'phone' ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
