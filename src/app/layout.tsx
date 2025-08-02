import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Imam Bahy Putra Susetyo - Fullstack Developer",
  description: "Personal portfolio website of Imam Bahy Putra Susetyo, a Fullstack Web Developer based in Bekasi, Indonesia. Specializing in React, Next.js, Laravel, and modern web technologies.",
  keywords: ["Fullstack Developer", "React", "Next.js", "Laravel", "Portfolio", "Web Development"],
  authors: [{ name: "Imam Bahy Putra Susetyo" }],
  creator: "Imam Bahy Putra Susetyo",
  openGraph: {
    title: "Imam Bahy Putra Susetyo - Fullstack Developer",
    description: "Personal portfolio website showcasing projects and skills in web development",
    url: "https://portfolio-2025-ten-nu.vercel.app/",
    siteName: "Portfolio 2025",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imam Bahy Putra Susetyo - Fullstack Developer",
    description: "Personal portfolio website showcasing projects and skills in web development",
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
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
