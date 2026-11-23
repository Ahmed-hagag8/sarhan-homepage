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
        'group relative flex w-full items-center justify-between gap-4 overflow-hidden',
        'rounded-2xl border border-border bg-card px-7 py-7 sm:px-9 sm:py-9',
        'text-foreground shadow-sm',
        'transition-all duration-300 ease-out',
        // Subtle gold highlight on hover: gold border + faint gold tint
        'hover:-translate-y-0.5 hover:border-primary hover:bg-accent hover:shadow-md hover:shadow-primary/5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
    >
      {/* Subtle gold accent bar that grows on hover */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-primary',
          'origin-center transition-transform duration-300 ease-out',
          'group-hover:scale-x-100',
        )}
      />
      <span className="flex items-center gap-3">
        {/* Leading line-style icon — subtle, turns gold on hover */}
        <span
          aria-hidden="true"
          className={cn(
            'flex h-5 w-5 items-center justify-center text-muted-foreground',
            'transition-colors duration-300 ease-out',
            'group-hover:text-primary',
          )}
        >
          {icon}
        </span>
        <span className="text-base font-medium tracking-tight sm:text-lg">{label}</span>
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
          'bg-muted text-muted-foreground',
          'transition-all duration-300 ease-out',
          'group-hover:bg-primary group-hover:text-primary-foreground',
          // Flip arrow direction in RTL
          'rtl:-scale-x-100',
        )}
      >
        <ArrowRight className="h-4 w-4" />
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
            'mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-8 sm:py-6',
          )}
        >
          {/* Top Left: Theme toggle */}
          <ThemeToggle />
          {/* Top Right: Language selector */}
          <LanguageSelector />
        </nav>
      </header>

      {/* ---------- Main ---------- */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-6 sm:px-8">
        {/* ---------- B. Company Logo ---------- */}
        <section
          aria-label={t.logo.alt}
          className="flex w-full flex-col items-center justify-center py-20 sm:py-28 md:py-32"
        >
          {/* Official SARHAN Import & Export logo — transparent background,
              golden brand identity preserved. Renders naturally on both
              light (warm-white) and dark (charcoal) page backgrounds. */}
          <Logo />
        </section>

        {/* ---------- C. Main Options ---------- */}
        <section
          aria-label={t.options.shipForYou + ' / ' + t.options.customProduct}
          className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2"
        >
          <OptionCard
            href="#ship-for-you"
            label={t.options.shipForYou}
            ariaLabel={t.options.shipForYou}
            icon={<Plane className="h-5 w-5" strokeWidth={1.5} />}
          />
          <OptionCard
            href="#custom-product"
            label={t.options.customProduct}
            ariaLabel={t.options.customProduct}
            icon={<Package className="h-5 w-5" strokeWidth={1.5} />}
          />
        </section>

        {/* ---------- D. About Us ---------- */}
        <section className="mx-auto mt-20 flex w-full max-w-2xl flex-col items-center gap-6 text-center sm:mt-28">
          <h2
            className={cn(
              'text-sm font-semibold uppercase tracking-[0.25em] text-primary',
            )}
          >
            {t.about.heading}
          </h2>
          <p
            className={cn(
              // More prominent description: elegant serif, larger size, golden brand color.
              // Latin uses Playfair Display; Arabic falls back to Inter (Playfair has no AR glyphs).
              'font-serif text-about',
              'text-lg leading-relaxed sm:text-xl sm:leading-relaxed md:text-[1.4rem] md:leading-[1.85]',
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
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Thin, subtle golden horizontal divider */}
          <div aria-hidden="true" className="h-px w-full bg-primary/20" />

          {/* Contact area */}
          <div className="flex flex-col items-center justify-center gap-5 py-8 sm:flex-row sm:gap-8 sm:py-10">
            {/* Phone Icon – Connect Us */}
            <a
              href={PLACEHOLDER_PHONE}
              aria-label={t.contact.connectUsAria}
              title={t.contact.connectUs}
              className={cn(
                'inline-flex h-10 items-center gap-2.5 rounded-full px-5',
                'border border-border bg-card text-foreground',
                'transition-all duration-300 ease-out',
                'hover:border-primary hover:text-primary hover:shadow-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium tracking-tight">
                {t.contact.connectUs}
              </span>
            </a>

            {/* Location Icon */}
            <a
              href={PLACEHOLDER_LOCATION}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.locationAria}
              title={t.contact.locationAria}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full',
                'border border-border bg-card text-foreground',
                'transition-all duration-300 ease-out',
                'hover:border-primary hover:text-primary hover:shadow-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              )}
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{t.contact.locationAria}</span>
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
