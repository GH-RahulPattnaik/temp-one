import Image from "next/image";
import { shopByCategory } from "@/lib/data";

export default function ShopByCategory() {
  return (
    <section className="container-x mt-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="section-heading">Shop by Category</h2>
        <a href="#" className="text-sm font-medium text-brand hover:underline">
          View all collections
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {shopByCategory.map((category) => (
          <div key={category.id} className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={category.image}
              alt={category.label}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
            <h3 className="absolute bottom-5 left-5 font-display text-3xl text-white">
              {category.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
