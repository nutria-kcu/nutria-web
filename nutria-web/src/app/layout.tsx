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
  title: "Nutria Hack",
  description: "Aimbot, Wallhack, Auto-Fire — Dominate Every Match.",
  metadataBase: new URL("https://kcu-nutria.duckdns.org"),
  openGraph: {
    title: "Nutria Hack",
    description: "Unlock insane power in Assault Cube. Free aimbot + wallhack now.",
    url: "https://kcu-nutria.duckdns.org",
    siteName: "Nutria Hack",
    images: [
      {
        url: "https://kcu-nutria.duckdns.org/og.png",
        width: 1200,
        height: 630,
        alt: "Nutria Hack Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}