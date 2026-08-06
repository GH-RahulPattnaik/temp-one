import Image from "next/image";
import { lifestyle } from "@/lib/data";

export default function ShopByLifestyle() {
  return (
    <section className="container-x mt-20">
      <h2 className="section-heading mb-8">Shop By Lifestyle</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {lifestyle.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 rounded-3xl border border-neutral-200 bg-white p-6"
          >
            <Image src={item.icon} alt="" width={56} height={56} className="h-14 w-14" />
            <div>
              <h3 className="font-display text-2xl text-neutral-900">{item.label}</h3>
              <p className="text-sm text-neutral-500">{item.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
