import Image from "next/image";
import { featureBanners } from "@/lib/data";

export default function FeatureBanners() {
  return (
    <section className="container-x mt-20 grid gap-6 sm:grid-cols-2">
      {featureBanners.map((banner) => (
        <div key={banner.id} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">{banner.eyebrow}</p>
            <h3 className="mt-1 font-display text-3xl">{banner.title}</h3>
            <p className="mt-1 text-sm font-medium">{banner.tag}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
