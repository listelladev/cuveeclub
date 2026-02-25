import type { Metadata } from "next";
import { garamond, robotoMono } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cuveeclub.com"),
  title: {
    default: "Cuvée Club",
    template: "%s | Cuvée Club",
  },
  description:
    "Premium wine tasting experiences, restaurant consulting, and sommelier services in Vancouver.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cuvée Club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${garamond.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
