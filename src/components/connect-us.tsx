'use client'

import * as React from 'react'
import { Phone, Mail } from 'lucide-react'
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

  return (
    <div
      role="group"
      aria-label={t.contact.connectUs}
      className={cn(
        'inline-flex h-11 items-center gap-1.5 sm:gap-2 rounded-full px-2 sm:px-2.5',
        'gf bg-card/90 backdrop-blur-md shadow-md',
        'border border-[var(--gold-border)]',
        'transition-all duration-300 ease-out',
      )}
    >
      {/* 1. WhatsApp Icon Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.contactBar.whatsapp}: ${WHATSAPP_NUMBER}`}
        title={`${t.contactBar.whatsapp}: ${WHATSAPP_NUMBER}`}
        className={cn(
          'relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-full',
          'text-foreground hover:text-primary hover:bg-accent/80 hover:scale-110 active:scale-95',
          'transition-all duration-200 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        )}
      >
        <WhatsAppIcon className="gi h-4 w-4 sm:h-4.5 sm:w-4.5" />
      </a>

      {/* Subtle separator dot */}
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-border" />

      {/* 2. Email Icon Button */}
      <a
        href={EMAIL_URL}
        aria-label={`${t.contactBar.email}: ${EMAIL_ADDRESS}`}
        title={`${t.contactBar.email}: ${EMAIL_ADDRESS}`}
        className={cn(
          'relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-full',
          'text-foreground hover:text-primary hover:bg-accent/80 hover:scale-110 active:scale-95',
          'transition-all duration-200 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        )}
      >
        <Mail className="gi h-4 w-4 sm:h-4.5 sm:w-4.5" />
      </a>

      {/* Subtle separator dot */}
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-border" />

      {/* 3. Phone Call Icon Button */}
      <a
        href={PHONE_URL}
        aria-label={`${t.contactBar.call}: ${PHONE_NUMBER}`}
        title={`${t.contactBar.call}: ${PHONE_NUMBER}`}
        className={cn(
          'relative flex h-8 w-8 sm:h-8.5 sm:w-8.5 items-center justify-center rounded-full',
          'text-foreground hover:text-primary hover:bg-accent/80 hover:scale-110 active:scale-95',
          'transition-all duration-200 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        )}
      >
        <Phone className="gi h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </a>
    </div>
  )
}
