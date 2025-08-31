import type { Metadata } from "next";
import { Oswald, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

const titleFont = Oswald({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-title",
});
const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gray Birch Foundation",
  description: "A modern, minimal website for the Gray Birch Foundation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[#38383833] text-sm">
            <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between">
              <p>© {new Date().getFullYear()} Gray Birch Foundation</p>
              <p className="opacity-70">All rights reserved.</p>
            </div>
          </footer>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
