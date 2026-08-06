import Image from "next/image";

export default function KitchenSale() {
  return (
    <section className="container-x mt-20">
      <div className="grid items-center gap-8 rounded-3xl bg-brand/5 p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Up to 50% discount
          </p>
          <h2 className="mt-2 font-display text-3xl text-neutral-900 sm:text-4xl">
            Kitchen &amp; Dining Summer Sale
          </h2>
          <p className="mt-4 text-sm text-neutral-600">
            Common kitchen tasks include cutting food items to size, heating food on an
            open fire or on a stove, and mixing, blending or grinding ingredients into
            spreads.
          </p>
          <a href="#hot-deals-products" className="btn-primary mt-6 inline-flex">
            Learn More
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/banners/kitchen.png"
            alt="Kitchen essentials"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
