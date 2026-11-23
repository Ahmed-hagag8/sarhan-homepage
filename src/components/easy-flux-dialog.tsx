'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Easy Flux — a minimal product reveal dialog.
 *
 * Shows the product name "Easy Flux" (always in English, never translated)
 * using the existing premium gold styling. No invented specifications,
 * descriptions, or images — just the product name.
 */
export function EasyFluxDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  // Close on Escape
  React.useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    // Lock body scroll while open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Easy Flux"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog card — gold-bordered, premium */}
      <div
        className={cn(
          'relative z-10 w-full max-w-md rounded-2xl p-8 sm:p-10',
          'gf-popover',
          'shadow-2xl shadow-black/30',
          'animate-in fade-in-0 zoom-in-95 duration-200',
        )}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={cn(
            'gi absolute end-3 top-3 flex h-8 w-8 items-center justify-center rounded-full',
            'hover:bg-accent transition-colors',
          )}
        >
          <X className="h-4 w-4" strokeWidth={1.5} />
        </button>

        {/* Product name — "Easy Flux" in English, always */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Small gold label above the name */}
          <span
            className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
          >
            Product
          </span>

          {/* The product name itself — premium gold gradient text */}
          <h3
            className="font-serif text-4xl font-bold tracking-tight sm:text-5xl"
            style={{
              background: 'var(--gold-grad)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'var(--gold-primary)',
            }}
          >
            Easy Flux
          </h3>

          {/* Thin gold divider beneath the name */}
          <span className="gold-line h-px w-16" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
