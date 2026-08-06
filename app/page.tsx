import Articles from "@/components/Articles";
import BestSellers from "@/components/BestSellers";
import Events from "@/components/Events";
import FeatureBanners from "@/components/FeatureBanners";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HotDealsCollections from "@/components/HotDealsCollections";
import HotDealsProducts, { BlackEdition } from "@/components/HotDealsProducts";
import KitchenSale from "@/components/KitchenSale";
import MaggiProduct from "@/components/MaggiProduct";
import OrganicFresh from "@/components/OrganicFresh";
import PromoBanner from "@/components/PromoBanner";
import RecipesBanner from "@/components/RecipesBanner";
import ShopByCategory from "@/components/ShopByCategory";
import ShopByLifestyle from "@/components/ShopByLifestyle";
import ShopFreshFood from "@/components/ShopFreshFood";
import StoreOptions from "@/components/StoreOptions";
import { Newsletter, Testimonial } from "@/components/Testimonial";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StoreOptions />
        <PromoBanner />
        <BestSellers />
        <ShopFreshFood />
        <HotDealsCollections />
        <ShopByCategory />
        <RecipesBanner />
        <ShopByLifestyle />
        <FeatureBanners />
        <MaggiProduct />
        <KitchenSale />
        <HotDealsProducts />
        <BlackEdition />
        <OrganicFresh />
        <Articles />
        <Events />
        <Testimonial />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
