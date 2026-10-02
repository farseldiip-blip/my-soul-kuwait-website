'use client'

import { ArrowUpRight, Clock3, MapPin, Star } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R6zzgM1GJAcdWGrEB7mq0cWZ7DUE6p.png'
const cupsUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k7blCVZhvvEfkSjXLiSfKWdUqGRg8c.png'

const menuHighlights = [
  { name: 'V60 Ethiopian', detail: 'Bright · floral · clean', price: 'EGP 180', className: 'menu-image coffee' },
  { name: 'Passion Fruit Mojito', detail: 'Fresh lime · mint · sparkle', price: 'EGP 165', className: 'menu-image mojito' },
  { name: 'Lotus Dessert', detail: 'Silken cream · caramel biscuit', price: 'EGP 220', className: 'menu-image dessert' },
]

const galleryImages = [
  { src: cupsUrl, alt: 'MY SOUL branded coffee cups arranged together', className: 'gallery-tall' },
  { src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85', alt: 'A cortado served on a ceramic saucer', className: '' },
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85', alt: 'A slice of chocolate cake on a plate', className: '' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85', alt: 'Coffee being poured into a cup', className: 'gallery-wide' },
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a href="#top" className="wordmark" aria-label="MY SOUL home">
          <span>MY</span>
          <span>SOUL</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="/menu">Menu</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="nav-cta" href="https://www.google.com/maps/search/?api=1&query=MY+SOUL+KUWAIT+Zamalek+Cairo" target="_blank" rel="noreferrer">
          Find us <ArrowUpRight size={15} strokeWidth={1.5} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="MY SOUL KUWAIT coffee cups in a warm, dark setting" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Zamalek · Cairo · Open 24 hours</p>
          <img src={logoUrl} alt="MY SOUL KUWAIT logo" className="hero-logo" />
          <p className="hero-intro">A quiet corner for good coffee, slow conversations, and the little things that make a day feel considered.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="/menu">View menu <ArrowUpRight size={16} /></a>
            <a className="button button-outline" href="https://www.google.com/maps/search/?api=1&query=MY+SOUL+KUWAIT+3678%2BQH7%2C+Abu+Al-Fida%2C+Zamalek%2C+Cairo" target="_blank" rel="noreferrer">Get directions <MapPin size={16} /></a>
          </div>
        </div>
        <div className="hero-meta"><span>01</span><span className="meta-line" /><span>THE SOUL OF ZAMALEK</span></div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-label"><span>01</span><span>THE EXPERIENCE</span></div>
        <div className="experience-grid">
          <div>
            <h1>A place to<br /><em>settle in.</em></h1>
          </div>
          <div className="experience-copy">
            <p className="large-copy">Thoughtful coffee, familiar comforts, and an atmosphere that asks nothing of you.</p>
            <p>In the heart of Zamalek, MY SOUL is made for the first cup, the last meeting, and all the unplanned hours between. Come in from the city and make yourself at home.</p>
            <div className="feature-row"><span>01</span><strong>Indoor & outdoor seating</strong></div>
            <div className="feature-row"><span>02</span><strong>All-day café · Open 24 hours</strong></div>
          </div>
        </div>
      </section>

      <section className="menu-section section-pad" id="menu">
        <div className="menu-heading">
          <div className="section-label"><span>02</span><span>FROM THE COUNTER</span></div>
          <h2>Made for your<br /><em>kind of moment.</em></h2>
          <a href="/menu" className="text-link">See the full menu <ArrowUpRight size={16} /></a>
        </div>
        <div className="menu-list">
          {menuHighlights.map((item, index) => (
            <article className="menu-item" key={item.name}>
              <div className={`${item.className} menu-art`} aria-hidden="true"><span>{index === 0 ? 'V60' : index === 1 ? 'fresh' : 'sweet'}</span></div>
              <div className="menu-info"><span className="item-number">0{index + 1}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div><strong>{item.price}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-label"><span>03</span><span>THE DETAILS</span></div>
        <div className="gallery-intro"><h2>Good things<br /><em>take time.</em></h2><p>From the first pour to the final bite, every detail is considered.</p></div>
        <div className="gallery-grid">
          {galleryImages.map((image) => <img key={image.src} src={image.src} alt={image.alt} className={image.className} loading="lazy" />)}
        </div>
      </section>

      <section className="reviews section-pad">
        <div className="review-rating"><span className="rating-number">4.7</span><div className="stars" aria-label="4.7 out of 5 stars"><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /><Star fill="currentColor" size={15} /></div><span>112 Google reviews</span></div>
        <div className="review-quote"><span className="quote-mark">“</span><blockquote>A beautiful place with a very calm atmosphere. The coffee is excellent, the desserts are lovely, and you can truly spend hours here.</blockquote><cite>— A guest in Zamalek</cite></div>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="visit-image" role="img" aria-label="MY SOUL café cups and branded table setting" />
        <div className="visit-content"><div className="section-label"><span>04</span><span>COME BY</span></div><h2>Your table<br /><em>is waiting.</em></h2><div className="address"><MapPin size={18} /><p>3678+QH7, Abu Al-Fida<br />Zamalek, Cairo</p></div><div className="hours"><Clock3 size={18} /><p>Open 24 hours<br /><span>Every day</span></p></div><a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=MY+SOUL+KUWAIT+3678%2BQH7%2C+Abu+Al-Fida%2C+Zamalek%2C+Cairo" target="_blank" rel="noreferrer">Open in maps <ArrowUpRight size={16} /></a></div>
      </section>

      <footer className="footer"><img src={logoUrl} alt="MY SOUL KUWAIT" className="footer-logo" /><p>Good coffee. Good company.<br />See you in Zamalek.</p><a href="https://www.instagram.com/mysoul.cafe/" target="_blank" rel="noreferrer" aria-label="MY SOUL on Instagram" className="instagram-link">IG</a><span className="footer-copy">© MY SOUL KUWAIT · CAIRO</span></footer>
    </main>
  )
}
