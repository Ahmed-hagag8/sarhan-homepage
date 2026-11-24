'use client'

import * as React from 'react'
import NextImage from 'next/image'
import { useI18n } from '@/lib/i18n-context'
import { cn } from '@/lib/utils'

const LOGO_SRC = '/sarhan-logo.png'

export function Logo({ className }: { className?: string }) {
  const { t } = useI18n()

  return (
    <NextImage
      src={LOGO_SRC}
      alt={t.logo.alt}
      width={390}
      height={390}
      priority
      quality={90}
      className={cn(
        'select-none object-contain drop-shadow-sm transition-all duration-300 hover:scale-[1.02]',
        'dark:drop-shadow-[0_12px_28px_rgba(212,175,55,0.18)]',
        className ?? 'h-[200px] w-auto sm:h-[260px] md:h-[320px]'
      )}
      draggable={false}
    />
  )
}
