import Image from "next/image";
import { freshFood } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ShopFreshFood() {
  return (
    <section className="container-x mt-20 grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl lg:order-1">
        <Image
          src="/banners/fresh_food.png"
          alt="Fresh food spread"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="order-1 lg:order-2">
        <h2 className="section-heading mb-6">Shop fresh food</h2>
        <div className="grid grid-cols-2 gap-4">
          {freshFood.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
