import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Bonini Portfolio Website",
  description: "Portfolio website for Luca Bonini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
