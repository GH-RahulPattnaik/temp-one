import Image from "next/image";
import { deliveryFeatures } from "@/lib/data";

export default function OrganicFresh() {
  return (
    <section className="container-x mt-20">
      <div className="text-center">
        <h2 className="section-heading">Organic &amp; Fresh Always</h2>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-brand">
          We are proud of it
        </p>
        <div className="relative mx-auto mt-8 aspect-[21/9] max-w-4xl overflow-hidden rounded-3xl">
          <Image
            src="/products/maggi.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-contain bg-neutral-50 p-6"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {deliveryFeatures.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-16 w-16">
              <Image src={feature.image} alt="" fill sizes="64px" className="object-contain" />
            </div>
            <h3 className="font-display text-lg text-neutral-900">{feature.title}</h3>
            <p className="mt-1 text-xs text-neutral-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
