import "@/app/globals.css";
import Header from "@/apps/header&footer/Header";
import Footer from "@/apps/header&footer/Footer";
export const metadata = {
  title: "Unveiling Wonders of Online Shopping",
  description: "Enter WonderMart, where every click unveils a world of wonders in online shopping. Discover curated collections, unbeatable deals, and exceptional service, all tailored to elevate your shopping experience. Welcome to the realm where convenience meets luxury",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  ); 
}