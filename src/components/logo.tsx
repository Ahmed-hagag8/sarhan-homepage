'use client'

import * as React from 'react'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

/**
 * Company logo.
 *
 * Currently renders an elegant gold wordmark as a placeholder.
 *
 * --- TO USE THE UPLOADED OFFICIAL LOGO ---
 * 1. Drop the official logo file into `public/` as e.g. `public/company-logo.svg`
 *    (or .png / .webp).
 * 2. Set `LOGO_SRC` below to "/company-logo.svg".
 * 3. Adjust `LOGO_HEIGHT` if the logo needs more or less vertical room.
 *
 * The official logo is rendered with object-contain so its original
 * proportions and details are preserved, and the golden brand color
 * of the logo is never overridden.
 */
const LOGO_SRC = '' // <-- set to "/company-logo.svg" once the asset is uploaded
const LOGO_HEIGHT = 72 // px on desktop; scales down on mobile

export function Logo() {
  const { t } = useI18n()

  if (LOGO_SRC) {
    // Official uploaded logo — preserve identity, proportions, colors.
    return (
      <img
        src={LOGO_SRC}
        alt={t.logo.alt}
        className="h-[52px] w-auto object-contain sm:h-[60px] md:h-[72px]"
        style={{ maxHeight: LOGO_HEIGHT }}
        draggable={false}
      />
    )
  }

  // Placeholder: refined gold wordmark, centered, with generous tracking.
  return (
    <h1
      className={cn(
        'select-none text-center font-semibold uppercase tracking-[0.35em] text-primary',
        'text-3xl sm:text-4xl md:text-5xl',
      )}
      style={{ fontFeatureSettings: '"ss01"' }}
    >
      {t.logo.wordmark}
    </h1>
  )
}
