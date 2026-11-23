'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

/**
 * Theme toggle — a horizontal pill containing BOTH the sun (light) and moon
 * (dark) icons. The active theme is highlighted with a contrasting gold
 * background; the whole pill has a thin golden outline.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useI18n()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  // Until mounted, default to light so server/client markup matches.
  const isDark = mounted && resolvedTheme === 'dark'
  const isLight = !isDark

  return (
    <div
      role="group"
      aria-label={t.nav.themeLabel}
      className={cn(
        'inline-flex items-center gap-1 rounded-full p-1',
        // Metallic gold gradient border around the entire toggle
        'gf',
      )}
    >
      {/* Light mode (sun) */}
      <button
        type="button"
        aria-label={t.nav.themeLight}
        aria-pressed={isLight}
        title={t.nav.themeLight}
        onClick={() => setTheme('light')}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300',
          isLight
            ? 'gold-fill shadow-sm'  // gold gradient fill + dark icon
            : 'gi hover:bg-accent',   // gold icon, subtle hover tint
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        )}
      >
        <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
      </button>

      {/* Dark mode (moon) */}
      <button
        type="button"
        aria-label={t.nav.themeDark}
        aria-pressed={isDark}
        title={t.nav.themeDark}
        onClick={() => setTheme('dark')}
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300',
          isDark
            ? 'gold-fill shadow-sm'
            : 'gi hover:bg-accent',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        )}
      >
        <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
      </button>
    </div>
  )
}
