'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const categories = ['All', 'Coffee', 'Cold Drinks', 'Mojitos / Refreshments', 'Desserts', 'Food']

const menuItems = [
  { category: 'Coffee', name: 'Menu items coming soon', description: 'Our full coffee menu will be added here.', price: '—', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85' },
  { category: 'Cold Drinks', name: 'Menu items coming soon', description: 'Our full cold drinks menu will be added here.', price: '—', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=85' },
  { category: 'Mojitos / Refreshments', name: 'Menu items coming soon', description: 'Our full refreshments menu will be added here.', price: '—', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85' },
  { category: 'Desserts', name: 'Menu items coming soon', description: 'Our full dessert menu will be added here.', price: '—', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85' },
  { category: 'Food', name: 'Menu items coming soon', description: 'Our full food menu will be added here.', price: '—', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85' },
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleItems = activeCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <main className="menu-page">
      <header className="menu-page-header">
        <a href="/" className="back-link"><ArrowLeft size={16} /> Back to home</a>
        <a href="/" className="wordmark" aria-label="MY SOUL home"><span>MY</span><span>SOUL</span></a>
        <span className="menu-header-note">Zamalek · Cairo</span>
      </header>

      <section className="menu-page-intro">
        <p className="eyebrow">02 · From the counter</p>
        <h1>Take your<br /><em>time.</em></h1>
        <p className="menu-page-lede">A considered selection for slow mornings, late conversations, and everything between.</p>
      </section>

      <nav className="category-nav" aria-label="Menu categories">
        {categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}
      </nav>

      <section className="menu-page-list" aria-live="polite">
        {visibleItems.map((item, index) => (
          <article className="menu-page-item" key={item.category}>
            <div className="menu-page-image"><img src={item.image} alt="" loading="lazy" /></div>
            <div className="menu-page-item-copy"><div className="menu-page-item-top"><span className="item-number">0{index + 1}</span><span className="menu-category-label">{item.category}</span><strong>{item.price}</strong></div><h2>{item.name}</h2><p>{item.description}</p></div>
          </article>
        ))}
      </section>

      <section className="menu-page-note"><p className="eyebrow">A small note</p><p>The full menu and pricing are being prepared. Check back soon, or ask our team when you visit.</p><a className="text-link" href="/">Return home <ArrowUpRight size={16} /></a></section>
      <footer className="footer"><p>Good coffee. Good company.<br />See you in Zamalek.</p><span className="footer-copy">© MY SOUL KUWAIT · CAIRO</span></footer>
    </main>
  )
}
