import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import favicon from './favicon.ico'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Have a look",
  description: "Have a look شركة اثاث في تركيا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />{" "}
      </head>
      <body
        className={cn("min-h-screen overflow-x-hidden font-arabic-din-next")}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
