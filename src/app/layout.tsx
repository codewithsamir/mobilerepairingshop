import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Homepage/Header";
import Footer from "@/components/Homepage/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iCloud Wireless",
  description: "iCloud Wireless - Your Trusted Mobile Repair Experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            {/* Top Bar */}
      <div className="bg-blue-900 text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span>Mon – Sun | 8:00 AM – 08:00 PM</span>
          <span>Book by Phone: 415-483-9625</span>
        </div>
      </div>

      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
