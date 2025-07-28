import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header, Footer } from '@/components/layout';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ludwig-E. Dufour | Full-Stack Developer & DevOps Engineer",
    template: "%s | Ludwig-E. Dufour"
  },
  description: "Newly Full-Stack Developer & DevOps Engineer specializing in modern web technologies, cloud infrastructure, and scalable solutions. Expert in React, Next.js, TypeScript, and AWS.",
  keywords: [
    "Ludwig Dufour",
    "Ludwig-Emmanuel Dufour",
    "Full-Stack Developer", 
    "DevOps Engineer",
    "React Developer",
    "TypeScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
    "Software Engineer",
    "Portfolio"
  ],
  authors: [{ name: "Ludwig-E. Dufour" }],
  creator: "Ludwig-E. Dufour",
  publisher: "Ludwig-E. Dufour",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ludwig-dufour.dev',
    siteName: 'Ludwig-E. Dufour Portfolio',
    title: 'Ludwig-E. Dufour | Full-Stack Developer & DevOps Engineer',
    description: 'Experienced Full-Stack Developer & DevOps Engineer specializing in modern web technologies, cloud infrastructure, and scalable solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ludwig-E. Dufour - Full-Stack Developer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ludwig-E. Dufour | Full-Stack Developer & DevOps Engineer',
    description: 'Experienced Full-Stack Developer & DevOps Engineer specializing in modern web technologies, cloud infrastructure, and scalable solutions.',
    creator: '@ludwig-emmanuel_dufour',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://ludwig-dufour.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'fr-FR': '/fr-FR',
    },
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  verification: {
    google: 'DGp8GwgDzDIzjdZKpHTxNWNV7w4tISny92xLd_bKn3A',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
