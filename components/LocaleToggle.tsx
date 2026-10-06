'use client'

import { useLocale } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export function LocaleToggle() {
  const pathname = usePathname()
  const locale = useLocale()
  const nextLocale = routing.locales.find((item) => item !== locale)
  const prefix = `/${nextLocale}`
  const target = pathname === '/' ? prefix : `${prefix}${pathname}`
  return (
    <a className="lang-toggle" href={target} dir={locale === 'ar' ? 'ltr' : 'auto'}>
      {locale === 'ar' ? 'EN' : 'عربي'}
    </a>
  )
}
