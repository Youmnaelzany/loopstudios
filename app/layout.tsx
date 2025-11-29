import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";

import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const alata = Alata({
  variable: "--font-alata",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loopstudios",
  description: "Loopstudios is a premium design agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${josefinSans.variable} mx-auto max-w-360 ${alata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
