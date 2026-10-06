import Image from 'next/image'
import { ArrowUpRight, Clock3, MapPin, Star } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import { galleryImages, heroImage, logo, menuHighlightImages, visitImage } from '@/lib/images'
import { LocaleToggle } from '@/components/LocaleToggle'
import menu from '@/lib/menu.json'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=MY+SOUL+KUWAIT+Plus+Code+3678%2BQH7%2C+Abu+Al-Fida%2C+Zamalek%2C+Cairo'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Home')
  const tA = await getTranslations('Alt')
  const tN = await getTranslations('Nav')
  const ar = locale === 'ar'

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a href={ar ? '/ar' : '/'} className="wordmark" aria-label={tN('ariaHome')}>
          <span>MY</span>
          <span>SOUL</span>
        </a>
        <nav aria-label={tN('ariaMain')}>
          <a href={ar ? '/ar#experience' : '#experience'}>{tN('experience')}</a>
          <a href={ar ? '/ar/menu' : '/menu'}>{tN('menu')}</a>
          <a href={ar ? '/ar#visit' : '#visit'}>{tN('visit')}</a>
        </nav>
        <div className="nav-side">
          <LocaleToggle />
          <a className="nav-cta" href={MAPS_URL} target="_blank" rel="noreferrer">
            {tN('cta')} <ArrowUpRight size={15} strokeWidth={1.5} />
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label={tA('hero')} style={{ backgroundImage: `url(${heroImage.src})`, backgroundPosition: heroImage.position }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">{t('eyebrow')}</p>
          <Image src={logo.src} alt={tA('logo')} width={1080} height={1080} className="hero-logo" priority />
          <p className="hero-intro">{t('intro')}</p>
          <div className="hero-actions">
            <a className="button button-gold" href={ar ? '/ar/menu' : '/menu'}>{t('viewMenu')} <ArrowUpRight size={16} /></a>
            <a className="button button-outline" href={MAPS_URL} target="_blank" rel="noreferrer">{t('cta')} <MapPin size={16} /></a>
          </div>
        </div>
        <div className="hero-meta"><span>01</span><span className="meta-line" /><span>{t('meta')}</span></div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-label"><span>02</span><span>{t('experienceLabel')}</span></div>
        <div className="experience-grid">
          <div>
            <h1>{t('experienceTitleA')}<br /><em>{t('experienceTitleEm')}</em></h1>
          </div>
          <div className="experience-copy">
            <p className="large-copy">{t('largeCopy')}</p>
            <p>{t('experienceCopy')}</p>
            <div className="feature-row"><span>01</span><strong>{t('feature1')}</strong></div>
            <div className="feature-row"><span>02</span><strong>{t('feature2')}</strong></div>
          </div>
        </div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="menu-heading">
          <div className="section-label"><span>03</span><span>{t('counterLabel')}</span></div>
          <h2>{t('counterTitleA')}<br /><em>{t('counterTitleEm')}</em></h2>
          <a href={ar ? '/ar/menu' : '/menu'} className="text-link">{t('viewMenu')} <ArrowUpRight size={16} /></a>
        </div>
        <div className="menu-list">
          {menu.highlights.map((item, index) => (
            <article className="menu-item" key={item.name_en}>
              <div className="menu-art" role="img" aria-hidden="true" style={{ backgroundImage: `url(${menuHighlightImages[index].src})`, backgroundPosition: menuHighlightImages[index].position }} />
              <div className="menu-info"><span className="item-number">0{index + 1}</span><div><h3>{ar ? item.name_ar : item.name_en}</h3><p>{ar ? item.desc_ar : item.desc_en}</p></div><strong className="ltr">{ar ? item.price_ar : item.price_en}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-label"><span>04</span><span>{t('detailsLabel')}</span></div>
        <div className="gallery-intro"><h2>{t('detailsTitleA')}<br /><em>{t('detailsTitleEm')}</em></h2><p>{t('detailsIntro')}</p></div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => <Image key={image.src} src={image.src} alt={tA(`gallery${index}` as 'gallery0')} width={1600} height={1200} className={image.className} sizes="(max-width: 720px) 50vw, 33vw" />)}
        </div>
      </section>

      <section className="reviews section-pad">
        <div className="review-rating"><span className="rating-number">4.7</span><div className="stars" aria-label={t('starsAria')}><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /></div><span>{t('reviews')}</span></div>
        <div className="review-quote"><span className="quote-mark">“</span><blockquote>{t('quote')}</blockquote><cite>{t('cite')}</cite></div>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="visit-image" role="img" aria-label={tA('visit')} style={{ backgroundImage: `url(${visitImage.src})`, backgroundPosition: visitImage.position }} />
        <div className="visit-content"><div className="section-label"><span>05</span><span>{t('visitLabel')}</span></div><h2>{t('visitTitleA')}<br /><em>{t('visitTitleEm')}</em></h2><div className="address"><MapPin size={18} /><p>{t('address1')}<br />{t('address2')}</p></div><div className="hours"><Clock3 size={18} /><p>{t('hours')}<br /><span>{t('hoursSub')}</span></p></div><a className="button button-gold" href={MAPS_URL} target="_blank" rel="noreferrer">{t('cta')} <ArrowUpRight size={16} /></a></div>
      </section>

      <footer className="footer"><Image src={logo.src} alt={tA('logo')} width={1080} height={1080} className="footer-logo" /><p>{t('footerCopy1')}<br />{t('footerCopy2')}</p><a href="https://www.instagram.com/mysoul.cafe/" target="_blank" rel="noreferrer" aria-label={tA('instagram')} className="instagram-link ltr">@mysoul.cafe</a><span className="footer-copy">{t('copyright')}</span></footer>
    </main>
  )
}
