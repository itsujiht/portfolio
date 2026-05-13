import { Geist, Geist_Mono } from "next/font/google";
import './global.css';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Portfolio',
  description: 'portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
