import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Ismail Plastic Factory | Premium Plastic Manufacturing Since 1983",
  description:
    "Al Ismail Plastic Factory is a Dammam-based manufacturer, exporter, importer, and supplier of premium plastic packaging and industrial solutions.",
  keywords: [
    "Al Ismail Plastic Factory",
    "plastic manufacturing Saudi Arabia",
    "industrial packaging Dammam",
    "PE film rolls",
    "warning tape manufacturer",
    "stretch film Saudi Arabia"
  ],
  openGraph: {
    title: "Al Ismail Plastic Factory",
    description: "Engineering high-performance plastic solutions since 1983.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
