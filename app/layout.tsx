import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Codewave Studio — Custom Websites & Software for USA Small Businesses",
  description:
    "We build modern, fast websites and custom software for USA small businesses. Fixed pricing. Delivered in 7 days.",
  keywords: ["web design USA", "small business website", "software development", "Next.js agency", "Codewave Studio"],
  openGraph: {
    title: "Codewave Studio",
    description: "Custom websites for USA small businesses. Starting at $799.",
    type: "website",
  },
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
