'use client'

import { usePathname } from 'next/navigation'

export function LocaleToggle() {
  const pathname = usePathname()
  const isAr = pathname === '/ar' || pathname.startsWith('/ar/')
  const rest = isAr ? pathname.slice(3) || '/' : pathname
  const target = isAr ? rest : rest === '/' ? '/ar' : `/ar${rest}`
  return (
    <a className="lang-toggle" href={target} dir={isAr ? 'ltr' : 'auto'}>
      {isAr ? 'EN' : 'عربي'}
    </a>
  )
}
