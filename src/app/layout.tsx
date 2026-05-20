import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mikail Öztürk – Webentwickler & Softwareentwickler",
  description: "Portfolio von Mikail Öztürk – Fullstack-Entwickler aus Berlin. Spezialisiert auf moderne Webanwendungen mit Next.js, React, Node.js und TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
