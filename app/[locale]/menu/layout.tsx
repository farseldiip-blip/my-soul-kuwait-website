import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'MenuMetadata' })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'ar' ? '/ar/menu' : '/menu',
      languages: { en: '/menu', ar: '/ar/menu' },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og.png'],
    },
  }
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children
}
