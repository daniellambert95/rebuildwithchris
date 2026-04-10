import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "RebuildWithChris — Break Free From Cocaine Addiction",
  description:
    "19 years of cocaine addiction. One fight back. Chris Jenkins offers a 12-week recovery programme built from lived experience — not theory. Rebuild. Recover. Rise.",
  keywords: "cocaine addiction recovery, cocaine recovery programme, recovery coach, addiction help, rebuild with chris",
  openGraph: {
    title: "RebuildWithChris — Rebuild. Recover. Rise.",
    description:
      "A 12-week cocaine recovery system built by an addict, for addicts. Real structure. Real accountability. Real change.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
