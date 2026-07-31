import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tecsystem.com.br"),
  title: {
    default: "Tecsystem | Assistência Técnica em Belo Horizonte",
    template: "%s | Tecsystem",
  },
  description:
    "Assistência técnica para celulares, notebooks e computadores em Belo Horizonte. Orçamento transparente, garantia de até 6 meses e parcelamento em até 6x.",
  keywords: [
    "assistência técnica Belo Horizonte",
    "conserto de celular BH",
    "manutenção de notebook BH",
    "conserto de computador Belo Horizonte",
    "Tecsystem",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Tecsystem | Seu equipamento funcionando como deveria",
    description:
      "Assistência técnica para celulares, notebooks e computadores em Belo Horizonte.",
    siteName: "Tecsystem",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tecsystem — Seu equipamento funcionando como deveria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecsystem | Assistência Técnica em Belo Horizonte",
    description:
      "Assistência técnica para celulares, notebooks e computadores em Belo Horizonte.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo-tecsystem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tecsystem Assistência Técnica",
    image: "/logo-tecsystem.png",
    telephone: "+55 31 3487-1561",
    url: "https://tecsystem.com.br",
    sameAs: ["https://www.instagram.com/tecsyste.bh/"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Silva Alvarenga, 470, Loja 01",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31050-640",
      addressCountry: "BR",
    },
  };

  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
