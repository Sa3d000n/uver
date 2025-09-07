import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UVER ",
  description:
    "UVER is a modern mobile app that helps future students explore universities, compare programs, and send applications easily and on time.",
  keywords: ["university search", "college application", "student app", "UVER"],
  openGraph: {
    title: "UVER – University Search & Application App",
    description:
      "Explore universities, compare programs, and apply with ease using UVER.",
    url: "https://uver-silk.vercel.app/",
    siteName: "UVER",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
