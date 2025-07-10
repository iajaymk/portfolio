'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import ThemeSelector from "@/components/ThemeSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('theme-light');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${theme}`}
      >
        {children}
        <ThemeSelector theme={theme} setTheme={setTheme}/>
      </body>
    </html>
  );
}
