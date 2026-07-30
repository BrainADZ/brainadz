import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AosInit from "@/components/AosInit";
import Navbar from "@/components/header";
import Footer from "@/components/Footer";
import ServicePageInteractions from "@/components/ServicePageInteractions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrainADZ Marketing | Digital Marketing & Creative Growth Agency",
  description:
    "BrainADZ Marketing is a creative growth agency helping businesses grow through digital marketing, performance campaigns, branding, creative media, SEO, and web development.",
  applicationName: "BrainADZ Marketing",
  keywords: [
    "BrainADZ Marketing",
    "digital marketing agency",
    "creative growth agency",
    "performance marketing",
    "SEO services",
    "branding agency",
    "web development",
  ],
  authors: [{ name: "BrainADZ Marketing" }],
  creator: "BrainADZ Marketing",
  publisher: "BrainADZ Marketing",
  icons: {
    icon: [{ url: "/logo/icon.png", type: "image/png" }],
    shortcut: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "BrainADZ Marketing",
    title: "BrainADZ Marketing | Digital Marketing & Creative Growth Agency",
    description:
      "Strategy, creative, performance marketing, SEO, branding, and web development working together to grow your business.",
    images: [{ url: "/logo/icon.png", alt: "BrainADZ Marketing" }],
  },
  twitter: {
    card: "summary",
    title: "BrainADZ Marketing | Digital Marketing & Creative Growth Agency",
    description:
      "Strategy, creative, performance marketing, SEO, branding, and web development working together to grow your business.",
    images: ["/logo/icon.png"],
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
        <AosInit />
        <ServicePageInteractions />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
