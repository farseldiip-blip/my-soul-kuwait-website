'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { menuCategoryImages } from '@/lib/images'
import { LocaleToggle } from '@/components/LocaleToggle'
import menu from '@/lib/menu.json'

const altKeys: Record<string, 'coffee' | 'coldDrinks' | 'mojitos' | 'desserts' | 'food'> = {
  'Coffee': 'coffee',
  'Cold Drinks': 'coldDrinks',
  'Mojitos / Refreshments': 'mojitos',
  'Desserts': 'desserts',
  'Food': 'food',
}

export default function MenuPage() {
  const [active, setActive] = useState('All')
  const locale = useLocale()
  const ar = locale === 'ar'
  const t = useTranslations('MenuPage')
  const tA = useTranslations('Alt')

  const categories = menu.categories.map((c) => ({ value: c.en, label: ar ? c.ar : c.en }))
  const visibleItems = active === 'All' ? menu.items : menu.items.filter((item) => item.category === active)

  return (
    <main className="menu-page">
      <header className="menu-page-header">
        <a href={ar ? '/ar' : '/'} className="back-link"><ArrowLeft size={16} /> {t('back')}</a>
        <a href={ar ? '/ar' : '/'} className="wordmark" aria-label="MY SOUL home"><span>MY</span><span>SOUL</span></a>
        <div className="menu-header-side">
          <LocaleToggle />
          <span className="menu-header-note">{t('note')}</span>
        </div>
      </header>

      <section className="menu-page-intro">
        <p className="eyebrow">{t('eyebrow')}</p>
        <h1>{t('titleA')}<br /><em>{t('titleEm')}</em></h1>
        <p className="menu-page-lede">{t('lede')}</p>
      </section>

      <nav className="category-nav" aria-label={t('categoriesAria')}>
        {categories.map((category) => <button key={category.value} className={active === category.value ? 'active' : ''} onClick={() => setActive(category.value)}>{category.label}</button>)}
      </nav>

      <section className="menu-page-list" aria-live="polite">
        {visibleItems.map((item, index) => {
          const img = menuCategoryImages.find((image) => image.category === item.category)!
          return (
            <article className="menu-page-item" key={item.category}>
              <div className="menu-page-image"><Image src={img.src} alt={tA(altKeys[item.category])} width={1600} height={1200} sizes="(max-width: 720px) 100vw, 38vw" /></div>
              <div className="menu-page-item-copy"><div className="menu-page-item-top"><span className="item-number">0{index + 1}</span><span className="menu-category-label">{ar ? menu.categories.find((c) => c.en === item.category)!.ar : item.category}</span><strong className="ltr">{item.price}</strong></div><h2>{ar ? item.name_ar : item.name_en}</h2><p>{ar ? item.desc_ar : item.desc_en}</p></div>
            </article>
          )
        })}
      </section>

      <section className="menu-page-note"><p className="eyebrow">{t('noteTitle')}</p><p>{t('noteBody')}</p><a className="text-link" href={ar ? '/ar' : '/'}>{t('noteLink')}</a></section>
      <footer className="footer"><p>{t('footerCopy1')}<br />{t('footerCopy2')}</p><span className="footer-copy">{t('copyright')}</span></footer>
    </main>
  )
}
