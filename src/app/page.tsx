'use client'

import * as React from 'react'
import {
  ArrowRight,
  Plane,
  Package,
  MapPin,
  Sparkles,
  Globe2,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Feather,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSelector } from '@/components/language-selector'
import { Logo } from '@/components/logo'
import { ConnectUs } from '@/components/connect-us'
import { ShipInquiryDialog } from '@/components/ship-inquiry-dialog'
import { EgyFlaxDialog } from '@/components/egy-flax-dialog'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

// Placeholder Google Maps location
const PLACEHOLDER_LOCATION = 'https://www.google.com/maps/search/?api=1&query=SARHAN+Import+and+Export'

function OptionCard({
  onClick,
  onMouseEnter,
  onMouseLeave,
  label,
  description,
  ariaLabel,
  icon,
  badge,
  children,
}: {
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  label: string
  description?: string
  ariaLabel: string
  icon: React.ReactNode
  badge?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className="relative flex w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className={cn(
          'group relative flex w-full cursor-pointer items-center justify-between overflow-hidden text-start',
          // Responsive padding: comfortable cards with generous internal spacing.
          // The grid is always 2 columns side-by-side as in original design.
          'rounded-2xl p-4 sm:p-6 md:p-8',
          'gap-2 text-foreground shadow-sm sm:gap-4 md:gap-6',
          // Metallic gold gradient border; interior tints to accent on hover
          'gf gf-accent',
          'transition-all duration-300 ease-out',
          'hover:-translate-y-1 hover:shadow-lg',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        )}
      >
        {/* Subtle gold accent bar that grows on hover */}
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 gold-line',
            'origin-center transition-transform duration-300 ease-out',
            'group-hover:scale-x-100',
          )}
        />

        <div className="flex min-w-0 items-center gap-2.5 sm:gap-4 md:gap-5">
          {/* Leading icon container with metallic sheen */}
          <div
            aria-hidden="true"
            className={cn(
              'flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-xl',
              'border border-border/60 bg-muted/50 transition-colors duration-300 group-hover:bg-accent/60',
            )}
          >
            <span className="gi flex items-center justify-center">
              {icon}
            </span>
          </div>

          <div className="flex flex-col text-start">
            {badge && (
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary mb-0.5 sm:mb-1">
                {badge}
              </span>
            )}
            <span className="text-sm font-bold leading-snug tracking-tight sm:text-lg md:text-xl">
              {label}
            </span>
            {description && (
              <span className="mt-0.5 hidden text-xs text-muted-foreground/90 sm:block md:text-sm">
                {description}
              </span>
            )}
          </div>
        </div>

        <span
          aria-hidden="true"
          className={cn(
            'arrow-chip flex h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full',
            'rtl:-scale-x-100',
          )}
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </button>

      {/* Optional floating hover element */}
      {children}
    </div>
  )
}

export default function Home() {
  const { t, dir } = useI18n()
  const [shipInquiryOpen, setShipInquiryOpen] = React.useState(false)
  const [egyFlaxOpen, setEgyFlaxOpen] = React.useState(false)
  const [productHovered, setProductHovered] = React.useState(false)
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleProductMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    setProductHovered(true)
  }

  const handleProductMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductHovered(false)
    }, 200)
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* ---------- Top Navigation ---------- */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav
          aria-label="Utility"
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8"
        >
          {/* Top Left: Theme toggle */}
          <ThemeToggle />

          {/* Center Brand Wordmark */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors sm:text-sm"
          >
            {t.logo.wordmark}
          </button>

          {/* Top Right: Language selector */}
          <LanguageSelector />
        </nav>
      </header>

      {/* ---------- Main Content ---------- */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-4 sm:px-6 md:px-8">
        
        {/* ===================================================================
            SECTION 1: HERO SECTION
            Desktop: Logo on the left, Description on the right
            Mobile:  Logo on top, Description below it
            =================================================================== */}
        <section
          id="hero-section"
          aria-label="Hero"
          className="flex w-full flex-col items-center justify-between gap-8 py-10 sm:py-14 md:flex-row md:gap-12 md:py-20 lg:gap-16 lg:py-24"
        >
          {/* Hero Left (Desktop) / Top (Mobile): Brand Logo */}
          <div className="order-1 flex w-full items-center justify-center md:order-1 md:w-5/12 lg:w-1/2 md:justify-start">
            <div className="gold-glow relative flex items-center justify-center p-2 sm:p-4">
              <Logo className="h-[210px] w-auto max-w-full drop-shadow-md sm:h-[270px] md:h-[330px] lg:h-[390px]" />
            </div>
          </div>

          {/* Hero Right (Desktop) / Below Logo (Mobile): Description */}
          <div className="order-2 flex w-full flex-col items-center text-center md:order-2 md:w-7/12 lg:w-1/2 md:items-start md:text-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider gf text-foreground shadow-sm">
              <Sparkles className="gi h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-5xl">
              <span>{t.hero.title}</span>
              <span className="block mt-1 sm:mt-1.5 text-xl font-medium tracking-normal text-muted-foreground sm:text-2xl md:text-3xl">
                {t.hero.subtitle}
              </span>
            </h1>

            {/* Description Paragraph */}
            <p
              className={cn(
                'mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg sm:leading-relaxed max-w-xl',
                dir === 'rtl' && 'leading-loose',
              )}
            >
              {t.hero.description}
            </p>

            {/* Value Highlight Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm sm:text-sm">
                <Plane className="gi h-3.5 w-3.5" />
                {t.hero.featureShipping}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm sm:text-sm">
                <Package className="gi h-3.5 w-3.5" />
                {t.hero.featureCustom}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm sm:text-sm">
                <ShieldCheck className="gi h-3.5 w-3.5" />
                {t.hero.featureReliability}
              </span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: ABOUT US (Placed Second)
            =================================================================== */}
        <section
          id="about-section"
          aria-labelledby="about-us-heading"
          className="w-full max-w-5xl pt-4 sm:pt-6 md:pt-8"
        >
          <div className="gf-card relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-12">
            {/* Ambient accent glow inside card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl rtl:-left-24 rtl:right-auto"
            />

            <div className="relative z-10 flex flex-col items-center text-center gap-4 sm:gap-6">
              {/* Category label */}
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm">
                {t.about.badge}
              </span>

              {/* Heading */}
              <h2
                id="about-us-heading"
                className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
              >
                {t.about.heading}
              </h2>

              {/* Main paragraph */}
              <p
                className={cn(
                  'font-serif max-w-3xl text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-[1.8] text-foreground/90',
                  dir === 'rtl' && 'leading-loose',
                )}
                style={dir === 'rtl' ? { lineHeight: 2 } : undefined}
              >
                {t.about.paragraph}
              </p>

              {/* 3 Pillars / Highlights Grid */}
              <div className="mt-4 grid w-full grid-cols-1 gap-4 pt-4 sm:grid-cols-3 sm:gap-6 border-t border-border/50">
                {/* Pillar 1 */}
                <div className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-muted/30 border border-border/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/60 mb-2.5">
                    <Globe2 className="gi h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t.about.pillar1Title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    {t.about.pillar1Desc}
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-muted/30 border border-border/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/60 mb-2.5">
                    <Layers className="gi h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t.about.pillar2Title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    {t.about.pillar2Desc}
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-muted/30 border border-border/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/60 mb-2.5">
                    <CheckCircle2 className="gi h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {t.about.pillar3Title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-normal">
                    {t.about.pillar3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: CORE SERVICES & PRODUCTS (Always 2 columns)
            - Ship: Opens interactive quote modal (WhatsApp / Email)
            - Products: Hover reveals FLAX & LINEN PRODUCTS card; Click opens full dialog
            =================================================================== */}
        <section
          id="services-section"
          aria-label={t.options.heading}
          className="mt-14 w-full max-w-4xl sm:mt-18 md:mt-24"
        >
          {/* Section Header */}
          <div className="mb-6 flex flex-col items-center text-center sm:mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-sm">
              {t.options.heading}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground/80 sm:text-sm">
              {t.options.subheading}
            </p>
          </div>

          {/* Cards Grid: Always 2 columns side by side */}
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 md:gap-6">
            {/* Card 1: Ship For You (Opens interactive inquiry modal) */}
            <OptionCard
              onClick={() => setShipInquiryOpen(true)}
              label={t.options.shipForYou}
              description={t.options.shipForYouDesc}
              ariaLabel={t.options.shipForYou}
              icon={<Plane className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.5} />}
            />

            {/* Card 2: Our Products (Hover reveals FLAX & LINEN PRODUCTS / Click opens dialog) */}
            <OptionCard
              onClick={() => setEgyFlaxOpen(true)}
              onMouseEnter={handleProductMouseEnter}
              onMouseLeave={handleProductMouseLeave}
              label={t.options.customProduct}
              badge="FLAX & LINEN PRODUCTS"
              description={t.options.customProductDesc}
              ariaLabel={t.options.customProduct}
              icon={<Package className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" strokeWidth={1.5} />}
            >
              {/* Desktop Hover Floating Preview Card for FLAX & LINEN PRODUCTS */}
              {productHovered && (
                <div
                  className={cn(
                    'hidden sm:block absolute bottom-full mb-3 z-30 w-[300px] md:w-[340px] rounded-2xl p-4',
                    'gf-card bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/30',
                    'animate-in fade-in-0 zoom-in-95 duration-150',
                    'start-1/2 -translate-x-1/2',
                  )}
                >
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/50">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary flex items-center gap-1">
                      <Sparkles className="gi h-3 w-3" />
                      {t.productEgyFlax.badge}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      100% Export Grade
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary border border-[var(--gold-arrow-border)]">
                      <Feather className="gi h-5 w-5" />
                    </div>
                    <div className="flex flex-col text-start">
                      <span
                        className="font-serif text-xl font-black tracking-tight"
                        style={{
                          background: 'var(--gold-grad-bright)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          color: 'var(--gold-primary)',
                        }}
                      >
                        {t.productEgyFlax.name}
                      </span>
                      <span className="text-xs font-medium text-foreground/85 leading-tight mt-0.5">
                        {t.productEgyFlax.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {t.productEgyFlax.spec1}
                    </span>
                    <span className="inline-flex rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {t.productEgyFlax.spec2}
                    </span>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-border/40 flex items-center justify-between text-xs text-primary font-semibold">
                    <span>{t.productEgyFlax.exploreDetails}</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              )}
            </OptionCard>
          </div>
        </section>

        {/* Natural vertical spacer */}
        <div className="h-16 sm:h-24 md:h-28" aria-hidden="true" />
      </main>

      {/* ===================================================================
          SECTION 4: MODERN FOOTER & DIRECT CONTACT
          =================================================================== */}
      <footer id="contact-section" className="mt-auto w-full border-t border-border/40 bg-card/40 backdrop-blur-md">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-14">
          
          {/* Top row: Brand & Quick Links & Modern Action Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/50">
            {/* Brand column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {t.logo.wordmark}
              </span>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
                {t.footer.tagline}
              </p>
            </div>

            {/* Quick Navigation Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
              <button
                type="button"
                onClick={() => scrollToSection('hero-section')}
                className="hover:text-foreground px-2.5 py-1 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {t.hero.title}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => scrollToSection('about-section')}
                className="hover:text-foreground px-2.5 py-1 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {t.footer.aboutNav}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => scrollToSection('services-section')}
                className="hover:text-foreground px-2.5 py-1 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {t.footer.servicesNav}
              </button>
            </div>

            {/* Modern Contact Buttons: Connect Us Bar + Location */}
            <div className="flex items-center gap-3">
              {/* Modern Connect Us Select Bar */}
              <ConnectUs />

              {/* Modern Location Badge */}
              <a
                href={PLACEHOLDER_LOCATION}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.locationAria}
                title={t.contact.locationLabel}
                className={cn(
                  'inline-flex h-11 items-center gap-2 rounded-full px-5',
                  'gf bg-card/90 text-foreground shadow-md',
                  'transition-all duration-300 ease-out',
                  'hover:-translate-y-0.5 hover:shadow-lg',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                )}
              >
                <MapPin className="gi h-4 w-4" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-tight">
                  {t.contact.locationLabel}
                </span>
              </a>
            </div>
          </div>

          {/* Bottom row: Subtle copyright & brand notice */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/75">
            <span className="inline-flex items-center gap-1.5">
              <span className="font-semibold tracking-[0.15em] text-foreground/70">
                {t.logo.wordmark}
              </span>
              <span aria-hidden="true">·</span>
              <span>{new Date().getFullYear()}</span>
              <span aria-hidden="true">·</span>
              <span>{t.footer.rights}</span>
            </span>

            <span className="text-[11px] text-muted-foreground/60">
              International Logistics & Commodity Trading Excellence
            </span>
          </div>
        </div>
      </footer>

      {/* Interactive Shipping Quote Modal */}
      <ShipInquiryDialog
        open={shipInquiryOpen}
        onClose={() => setShipInquiryOpen(false)}
      />

      {/* FLAX & LINEN PRODUCTS Product Modal */}
      <EgyFlaxDialog
        open={egyFlaxOpen}
        onClose={() => setEgyFlaxOpen(false)}
      />
    </div>
  )
}
