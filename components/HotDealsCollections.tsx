import Image from "next/image";
import { hotDealCollections } from "@/lib/data";

export default function HotDealsCollections() {
  return (
    <section className="container-x mt-20">
      <h2 className="section-heading mb-8">Hot Deals!</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {hotDealCollections.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {item.eyebrow}
              </p>
              <h3 className="mt-1 font-display text-2xl text-neutral-900">{item.title}</h3>
              <a href="#" className="mt-3 inline-block text-sm font-medium underline underline-offset-2">
                Show more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
