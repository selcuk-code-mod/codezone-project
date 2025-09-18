import type { Metadata } from "next";

import { Saira_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

const sairaSans = Saira_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-saira-condensed",
});

export const metadata: Metadata = {
  title: "Rapkology",
  description: "Türkçe Rap ve Dünya Müzik Haberleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`${sairaSans.variable} bg-my-background  text-my-text-white`}
      >
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
