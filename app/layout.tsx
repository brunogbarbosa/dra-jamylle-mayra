import type { Metadata } from 'next';
import { site } from '@/data/site';
import './globals.css';
import './signature.css';
import './campaign.css';
import './essence.css';
import './jamylle.css';
const metadataBase = new URL(site.seo.url || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'));
export const metadata: Metadata = {
  metadataBase,
  title: site.seo.title,
  description: site.seo.description,
  ...(site.seo.url ? { alternates: { canonical: '/' } } : {}),
  openGraph: { title: site.seo.title, description: site.seo.description, locale: 'pt_BR', type: 'website' },
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
