'use client'

import * as React from 'react'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { useI18n, type Locale } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

const OPTIONS: { value: Locale; label: string; short: string }[] = [
  { value: 'en', label: 'English', short: 'EN' },
  { value: 'ar', label: 'العربية', short: 'AR' },
  { value: 'zh', label: '中文', short: 'ZH' },
]

/**
 * Language selector — a rounded pill with a thin golden border.
 *
 * Trigger:  🌐  EN  ▼   (globe icon + current abbreviation + chevron)
 * Dropdown: full language options with active check mark.
 */
export function LanguageSelector() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

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

  const activeOption = OPTIONS.find((o) => o.value === locale) ?? OPTIONS[0]

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={t.nav.languageLabel}
        title={t.nav.languageLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          // Pill: metallic gold gradient border, same height as theme toggle
          'inline-flex h-10 items-center gap-2 rounded-full px-4',
          'gf',
          'text-sm font-medium text-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        )}
      >
        <Globe className="gi h-4 w-4" aria-hidden="true" />
        <span className="tabular-nums tracking-wide">{activeOption.short}</span>
        <ChevronDown
          className={cn(
            'gi h-3.5 w-3.5 transition-transform duration-300',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.nav.languageLabel}
          className={cn(
            'absolute top-full z-50 mt-2 min-w-[170px] overflow-hidden rounded-xl',
            'gf-popover p-1 shadow-lg shadow-black/10',
            'animate-in fade-in-0 zoom-in-95 duration-150',
            // In LTR the menu aligns to the right edge of the trigger;
            // in RTL it mirrors automatically via `inset-inline-end`.
            'end-0',
          )}
        >
          {OPTIONS.map((option) => {
            const isActive = option.value === locale
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setLocale(option.value)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm',
                  'transition-colors duration-200',
                  isActive
                    ? 'bg-accent text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      'flex h-6 w-9 items-center justify-center rounded-md text-[11px] font-semibold tracking-wide',
                      isActive
                        ? 'badge-gold'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {option.short}
                  </span>
                  <span>{option.label}</span>
                </span>
                {isActive && <Check className="gi h-4 w-4" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
