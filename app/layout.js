import './globals.css';

export const metadata = {
  title: 'SafeMind — Mental Health First Response',
  description: 'A free mental health first-response tool for people affected by conflict and crisis. Guided breathing, grounding exercises, PTSD screening, and crisis resources.',
  keywords: ['mental health', 'crisis support', 'PTSD', 'war', 'conflict', 'refugees', 'breathing exercise', 'grounding', 'trauma'],
  authors: [{ name: 'SafeMind' }],
  openGraph: {
    title: 'SafeMind — Mental Health First Response',
    description: 'Free mental health support for people affected by conflict and crisis.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SafeMind',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeMind — Mental Health First Response',
    description: 'Free mental health support for people affected by conflict and crisis.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#7aaa6e',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>{children}</body>
    </html>
  );
}
