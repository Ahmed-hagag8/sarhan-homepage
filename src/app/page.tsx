'use client'

import * as React from 'react'
import { ArrowRight, Plane, Package, Phone, MapPin } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSelector } from '@/components/language-selector'
import { Logo } from '@/components/logo'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

// NOTE: Replace these placeholder destinations with real values when available.
const PLACEHOLDER_PHONE = 'tel:+1-555-000-0000'
const PLACEHOLDER_LOCATION = 'https://www.google.com/maps/search/?api=1&query=Company'

function OptionCard({
  href,
  label,
  ariaLabel,
  icon,
}: {
  href: string
  label: string
  ariaLabel: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        'group relative flex w-full items-center justify-between overflow-hidden',
        // Responsive padding: larger cards with generous internal spacing.
        // Cards ALWAYS stay side by side (the grid is always 2 columns).
        'rounded-2xl px-4 py-5 sm:px-7 sm:py-8 md:px-10 md:py-11',
        'gap-2 text-foreground shadow-sm sm:gap-3 md:gap-4',
        // Metallic gold gradient border; interior tints to accent on hover
        'gf gf-accent',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-0.5 hover:shadow-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
    >
      {/* Subtle gold accent bar that grows on hover */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 gold-line',
          'origin-center transition-transform duration-300 ease-out',
          'group-hover:scale-x-100',
        )}
      />
      <span className="flex min-w-0 items-center gap-2 sm:gap-3">
        {/* Leading line-style icon — shiny gold, larger, brightens on hover */}
        <span
          aria-hidden="true"
          className={cn(
            'gi flex h-5 w-5 shrink-0 items-center justify-center sm:h-6 sm:w-6 md:h-7 md:w-7',
          )}
        >
          {icon}
        </span>
        <span className="text-[13px] font-medium leading-tight tracking-tight sm:text-lg md:text-xl">
          {label}
        </span>
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'arrow-chip flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10 md:h-11 md:w-11',
          // Flip arrow direction in RTL
          'rtl:-scale-x-100',
        )}
      >
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" />
      </span>
    </a>
  )
}

export default function Home() {
  const { t, dir } = useI18n()

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* ---------- A. Top Navigation ---------- */}
      <header className="w-full">
        <nav
          aria-label="Utility"
          className={cn(
            'mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6',
          )}
        >
          {/* Top Left: Theme toggle */}
          <ThemeToggle />
          {/* Top Right: Language selector */}
          <LanguageSelector />
        </nav>
      </header>

      {/* ---------- Main ---------- */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 sm:px-6 md:px-8">
        {/* ---------- B. Company Logo ---------- */}
        <section
          aria-label={t.logo.alt}
          className="flex w-full flex-col items-center justify-center py-24 sm:py-32 md:py-40"
        >
          {/* Official SARHAN Import & Export logo — transparent background,
              golden brand identity preserved. Renders naturally on both
              light (warm-white) and dark (charcoal) page backgrounds. */}
          <Logo />
        </section>

        {/* ---------- C. Main Options ---------- */}
        <section
          aria-label={t.options.shipForYou + ' / ' + t.options.customProduct}
          className="grid w-full max-w-4xl grid-cols-2 gap-2 sm:gap-4 md:gap-6"
        >
          <OptionCard
            href="#ship-for-you"
            label={t.options.shipForYou}
            ariaLabel={t.options.shipForYou}
            icon={<Plane className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.5} />}
          />
          <OptionCard
            href="#custom-product"
            label={t.options.customProduct}
            ariaLabel={t.options.customProduct}
            icon={<Package className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.5} />}
          />
        </section>

        {/* ---------- D. About Us ---------- */}
        <section className="mx-auto mt-20 flex w-full max-w-3xl flex-col items-center gap-5 text-center sm:mt-28 md:mt-32">
          <h2
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm md:text-sm',
            )}
          >
            {t.about.heading}
          </h2>
          <p
            className={cn(
              // About Us is intentionally smaller than the service cards to preserve
              // the hierarchy: Logo > Cards > About Us > Contact.
              // Latin uses Playfair Display; Arabic falls back to Inter.
              'font-serif text-about',
              'text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-base md:leading-[1.75]',
              // Arabic reads better with extra line height
              dir === 'rtl' && 'leading-loose',
            )}
            style={dir === 'rtl' ? { lineHeight: 2 } : undefined}
          >
            {t.about.paragraph}
          </p>
        </section>

        {/* Spacer to push footer down naturally */}
        <div className="h-16 sm:h-24" aria-hidden="true" />
      </main>

      {/* ---------- E. Footer / Contact ---------- */}
      <footer className="mt-auto w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
          {/* Thin, shiny metallic gold horizontal divider */}
          <div aria-hidden="true" className="gold-line h-px w-full" />

          {/* Contact area — smallest, most compact section; horizontal row at all sizes */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 py-4 sm:gap-5 sm:py-6 md:gap-6 md:py-8">
            {/* Phone Icon – Connect Us */}
            <a
              href={PLACEHOLDER_PHONE}
              aria-label={t.contact.connectUsAria}
              title={t.contact.connectUs}
              className={cn(
                'inline-flex h-10 items-center gap-2 rounded-full px-5',
                'gf text-foreground',
                'transition-all duration-300 ease-out',
                'hover:shadow-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              <Phone className="gi h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium tracking-tight">
                {t.contact.connectUs}
              </span>
            </a>

            {/* Location — pin icon + "Location" label, matching Connect Us */}
            <a
              href={PLACEHOLDER_LOCATION}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.locationAria}
              title={t.contact.locationLabel}
              className={cn(
                'inline-flex h-10 items-center gap-2 rounded-full px-5',
                'gf text-foreground',
                'transition-all duration-300 ease-out',
                'hover:shadow-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              <MapPin className="gi h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium tracking-tight">
                {t.contact.locationLabel}
              </span>
            </a>
          </div>

          {/* Minimal copyright line — kept extremely subtle */}
          <div
            className={cn(
              'flex items-center justify-center pb-8 sm:pb-10',
              'text-xs text-muted-foreground/70',
            )}
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="font-medium tracking-[0.2em] text-foreground/60">
                {t.logo.wordmark}
              </span>
              <span aria-hidden="true">·</span>
              <span>{new Date().getFullYear()}</span>
              <span aria-hidden="true">·</span>
              <span>{t.footer.rights}</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
