'use client'

import * as React from 'react'
import { Globe, Check } from 'lucide-react'
import { useI18n, type Locale } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

const OPTIONS: { value: Locale; label: string; short: string }[] = [
  { value: 'en', label: 'English', short: 'EN' },
  { value: 'ar', label: 'العربية', short: 'ع' },
]

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
          'inline-flex h-9 w-9 items-center justify-center rounded-full',
          'text-muted-foreground hover:text-foreground hover:bg-accent',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'transition-colors duration-300',
        )}
      >
        <Globe className="h-[18px] w-[18px]" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t.nav.languageLabel}
          className={cn(
            'absolute top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-xl',
            'border border-border bg-popover p-1 shadow-lg shadow-black/5',
            'animate-in fade-in-0 zoom-in-95 duration-150',
            // Position: in LTR the menu sits at the inline-end corner of the button;
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
                  'hover:bg-accent transition-colors duration-200',
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground',
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      'flex h-5 w-5 items-center justify-center rounded-md text-[11px] font-semibold',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {option.short}
                  </span>
                  <span>{option.label}</span>
                </span>
                {isActive && <Check className="h-4 w-4 text-primary" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      )}
      {/* Hidden label for the active option for screen readers using the button alone */}
      <span className="sr-only">{activeOption.label}</span>
    </div>
  )
}
