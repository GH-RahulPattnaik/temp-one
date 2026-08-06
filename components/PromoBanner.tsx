import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="container-x mt-12">
      <div className="relative overflow-hidden rounded-3xl bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/banners/categories-banner.png"
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative flex flex-col items-start gap-4 px-8 py-16 sm:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Only Non-GMO
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">100% Organic</h2>
          <a href="#best-sellers" className="btn bg-white text-brand hover:bg-cream">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
