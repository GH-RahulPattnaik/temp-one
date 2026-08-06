import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/fraunces-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Local | Fresh & Organic Groceries",
  description:
    "Fresh, organic produce, bakery, dairy and pantry staples delivered from local producers to your door.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#2F5233",
              color: "#FBF8F1",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
