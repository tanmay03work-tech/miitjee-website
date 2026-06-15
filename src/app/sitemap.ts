import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://miitjee.com'

  // Define core routes that are always present
  const routes = [
    '',
    '/about',
    '/programs',
    '/programs/jee',
    '/programs/neet',
    '/programs/foundation',
    '/scholarship',
    '/apply',
    '/gallery',
    '/faculty',
    '/results',
    '/results/jee',
    '/results/neet',
    '/test-series',
    '/test-series/neet',
    '/test-series/neet/register',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
