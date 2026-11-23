'use client'

import * as React from 'react'
import { useI18n } from '@/lib/i18n-context'

/**
 * SARHAN Import & Export — official company logo.
 *
 * The logo asset at `/sarhan-logo.png` was extracted from the uploaded
 * reference image: the navy background and drop shadow were removed and the
 * gold metallic gradients, globe emblem, "SARHAN" wordmark, and
 * "IMPORT & EXPORT" subtitle were preserved exactly as supplied.
 *
 * The image is rendered with object-contain so its original proportions,
 * golden colors, and details are never modified. The transparent background
 * lets it sit naturally on both the warm-white (light) and deep charcoal
 * (dark) page backgrounds.
 *
 * To swap the asset, replace `public/sarhan-logo.png`.
 */
const LOGO_SRC = '/sarhan-logo.png'

export function Logo() {
  const { t } = useI18n()

  return (
    <img
      src={LOGO_SRC}
      alt={t.logo.alt}
      className={
        // Height-driven sizing — the logo is the LARGEST and most visually
        // dominant element on the page. Significantly increased for strong
        // visual presence across mobile / tablet / desktop.
        'h-[200px] w-auto select-none object-contain sm:h-[280px] md:h-[360px]'
      }
      draggable={false}
    />
  )
}
