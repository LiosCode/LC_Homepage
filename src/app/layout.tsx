import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mac Lio | Digital Marketing Agency",
  description: "Ihre Digital Marketing Agentur für professionelle Webentwicklung, SEO und Online-Marketing Strategien.",
  keywords: "Digital Marketing, Webentwicklung, SEO, Online Marketing, Agentur",
  authors: [{ name: "Mac Lio" }],
  openGraph: {
    title: "Mac Lio | Digital Marketing Agency",
    description: "Ihre Digital Marketing Agentur für professionelle Webentwicklung",
    url: "https://maclio.de",
    siteName: "Mac Lio",
    images: [
      {
        url: "/og-image.jpg", // Lege ein Bild im public Ordner ab
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}