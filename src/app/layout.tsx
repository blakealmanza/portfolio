import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Host_Grotesk, Inter, Manrope, Martel, Poppins } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Each project's own display typeface, used only for that product's name.
const inter = Inter({ subsets: ["latin"], weight: "600", display: "swap", variable: "--font-inter" });
const martel = Martel({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-martel" });
const manrope = Manrope({ subsets: ["latin"], weight: "700", display: "swap", variable: "--font-manrope" });
const barlow = Barlow_Semi_Condensed({ subsets: ["latin"], weight: "600", display: "swap", variable: "--font-barlow" });
const poppins = Poppins({ subsets: ["latin"], weight: "700", display: "swap", variable: "--font-poppins" });

const fontVariables = [hostGrotesk, inter, martel, manrope, barlow, poppins].map((font) => font.variable).join(" ");

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
    <html lang="en" className={fontVariables} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
