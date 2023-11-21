// Code from next.js 
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://fundacjaobokciebie.com/sitemap.xml',
  }
}