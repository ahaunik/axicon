import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AXICON Ltd | Technical Inspection & Engineering Consultancy",
    template: "%s | AXICON Ltd",
  },
  description: "AXICON Ltd provides technical inspection and engineering consultancy services across Singapore and Southeast Asia. Committed to quality, safety, and engineering excellence.",
  keywords: ["technical inspection", "engineering consultancy", "quality assurance", "project management", "Singapore", "Southeast Asia"],
  authors: [{ name: "AXICON Ltd" }],
  creator: "AXICON Ltd",
  publisher: "AXICON Ltd",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://axicon-ltd.com",
    siteName: "AXICON Ltd",
    title: "AXICON Ltd | Technical Inspection & Engineering Consultancy",
    description: "AXICON Ltd provides technical inspection and engineering consultancy services across Singapore and Southeast Asia.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AXICON Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AXICON Ltd | Technical Inspection & Engineering Consultancy",
    description: "AXICON Ltd provides technical inspection and engineering consultancy services across Singapore and Southeast Asia.",
    images: ["/logo.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#fefefe",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}