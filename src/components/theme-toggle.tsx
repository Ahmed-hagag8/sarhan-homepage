'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useI18n()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
      title={isDark ? t.nav.themeLight : t.nav.themeDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full',
        'text-muted-foreground hover:text-foreground hover:bg-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        'transition-colors duration-300',
      )}
    >
      {/* Render both icons; CSS handles visibility to avoid hydration flash */}
      <Sun
        className={cn(
          'h-[18px] w-[18px] transition-all duration-300',
          mounted && isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          'absolute h-[18px] w-[18px] transition-all duration-300',
          mounted && isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0',
        )}
        aria-hidden="true"
      />
    </button>
  )
}
