import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/apps/header&footer/Header";
import Footer from "@/apps/header&footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Unveiling Wonders of Online Shopping",
  description: "Enter WonderMart, where every click unveils a world of wonders in online shopping. Discover curated collections, unbeatable deals, and exceptional service, all tailored to elevate your shopping experience. Welcome to the realm where convenience meets luxury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  ); 
}
