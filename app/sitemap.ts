import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mysoul.cafe',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: { en: 'https://mysoul.cafe', ar: 'https://mysoul.cafe/ar' } },
    },
    {
      url: 'https://mysoul.cafe/ar',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mysoul.cafe/menu',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: 'https://mysoul.cafe/menu', ar: 'https://mysoul.cafe/ar/menu' } },
    },
    {
      url: 'https://mysoul.cafe/ar/menu',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
