import BestSellerProduct from "./home/BestSellerProduct";
import Brands from "./home/Brands";
import CardBanner from "./home/CardBanner";
import Category from "./home/Category";
import Hero from "./home/Hero";
import TopSaver from "./home/TopSaver";

export default function Home() {
  return (
      <main>
        <Hero/>
        <Category/>
        <Brands/>
        <TopSaver/>
        <BestSellerProduct/>
        <CardBanner/>
    </main>
  );
}
