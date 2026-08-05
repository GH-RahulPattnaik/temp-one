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
  title: {
    default: "Local - Fresh Organic Grocery",
    template: "%s | Local",
  },
  description:
    "Fresh organic groceries delivered to your doorstep. Shop fruits, vegetables, bakery, dairy, beverages, and more.",
  keywords: [
    "grocery",
    "organic",
    "fresh",
    "vegetables",
    "fruits",
    "food delivery",
    "online grocery",
    "local market",
  ],
  authors: [{ name: "Local" }],
  creator: "Local",
  metadataBase: new URL("https://localhost:3000"),
  openGraph: {
    title: "Local - Fresh Organic Grocery",
    description:
      "Fresh organic groceries delivered directly to your home.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}