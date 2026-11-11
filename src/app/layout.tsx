import { Fira_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Yash Raj's Portfolio",
  description:
    "My portfolio website to showcase my education, skills, interests",
};

const firasans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-fira-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firasans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
