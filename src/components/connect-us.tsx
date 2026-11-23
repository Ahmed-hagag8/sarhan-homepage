'use client'

import * as React from 'react'
import { Phone, Mail, ChevronDown } from 'lucide-react'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

// --- Temporary placeholder contact values -----------------------------------
// Replace these with the real contact details when available.
const DUMMY_WHATSAPP = '+1 555-000-100'
const DUMMY_WHATSAPP_URL = 'https://wa.me/1555000100'
const DUMMY_EMAIL = 'hello@sarhan.example.com'
const DUMMY_EMAIL_URL = 'mailto:hello@sarhan.example.com'
const DUMMY_CALL = '+1 555-000-0000'
const DUMMY_CALL_URL = 'tel:+15550000000'

/**
 * Connect Us — a pill button that reveals a compact contact options panel.
 *
 * Desktop: the panel appears on hover (mouse enter) and hides on leave.
 * Mobile:  the panel appears on tap (click) and hides on outside-tap / Escape.
 */
export function ConnectUs() {
  const { t, dir } = useI18n()
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)
  // Track whether the pointer is currently over the container (desktop hover)
  const hovering = React.useRef(false)

  // Outside-click + Escape to close (mobile tap behavior)
  React.useEffect(() => {
    if (!open) return
    const handler = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const escHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', escHandler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', escHandler)
    }
  }, [open])

  // Desktop hover: open on mouse enter, close on mouse leave (only if not
  // tapped-open — but to keep it simple we always close on leave).
  const handleMouseEnter = () => {
    hovering.current = true
    setOpen(true)
  }
  const handleMouseLeave = () => {
    hovering.current = false
    // Small delay so moving into the panel doesn't flicker closed
    setTimeout(() => {
      if (!hovering.current) setOpen(false)
    }, 120)
  }

  const options = [
    {
      label: t.contact.whatsappLabel,
      href: DUMMY_WHATSAPP_URL,
      value: DUMMY_WHATSAPP,
      external: true,
      icon: <WhatsAppIcon className="gi h-4 w-4" />,
    },
    {
      label: t.contact.emailLabel,
      href: DUMMY_EMAIL_URL,
      value: DUMMY_EMAIL,
      external: false,
      icon: <Mail className="gi h-4 w-4" strokeWidth={1.5} />,
    },
    {
      label: t.contact.callLabel,
      href: DUMMY_CALL_URL,
      value: DUMMY_CALL,
      external: false,
      icon: <Phone className="gi h-4 w-4" strokeWidth={1.5} />,
    },
  ]

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger pill */}
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.contact.connectUsAria}
        title={t.contact.connectUs}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex h-10 items-center gap-2 rounded-full px-5',
          'gf text-foreground',
          'transition-all duration-300 ease-out',
          'hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        )}
      >
        <Phone className="gi h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-sm font-medium tracking-tight">
          {t.contact.connectUs}
        </span>
        <ChevronDown
          className={cn(
            'gi h-3.5 w-3.5 transition-transform duration-300',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {/* Contact options panel */}
      {open && (
        <div
          role="menu"
          aria-label={t.contact.connectUs}
          className={cn(
            'absolute top-full z-50 mt-2 min-w-[220px] overflow-hidden rounded-xl p-1.5',
            'gf-popover shadow-lg shadow-black/10',
            'animate-in fade-in-0 zoom-in-95 duration-150',
            'end-0',
          )}
        >
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              {...(opt.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              role="menuitem"
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5',
                'transition-colors duration-200',
                'hover:bg-accent',
              )}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--gold-arrow-border)] bg-muted/50">
                {opt.icon}
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-sm font-medium text-foreground">
                  {opt.label}
                </span>
                <span
                  className="truncate text-xs text-muted-foreground"
                  dir="ltr"
                >
                  {opt.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
