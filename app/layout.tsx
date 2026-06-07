import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  metadataBase: new URL("https://codewavestudio.xyz"),
  title: "Codewave Studio — Custom Websites & Software for USA Small Businesses",
  description:
    "We build modern, fast websites and custom software for USA small businesses. Fixed pricing. Delivered in 7 days.",
  keywords: ["web design USA", "small business website", "software development", "Next.js agency", "Codewave Studio"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Codewave Studio — Custom Websites & Software for USA Small Businesses",
    description: "We build modern websites and custom software for USA small businesses. Fixed pricing. Starting at $299.",
    type: "website",
    url: "https://codewavestudio.xyz",
    siteName: "Codewave Studio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Codewave Studio — Custom Websites & Software for USA Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codewave Studio",
    description: "Custom websites for USA small businesses. Starting at $299.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "https://codewavestudio.xyz" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-cream-100 text-ink-900 min-h-screen flex flex-col">
        <MetaPixel />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
