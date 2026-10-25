import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: site.url ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    url: site.url ? "/" : undefined,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hostGrotesk.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
