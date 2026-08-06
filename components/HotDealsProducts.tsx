"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { hotDealsProducts } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function HotDealsProducts() {
  return (
    <section id="hot-deals-products" className="container-x mt-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="section-heading">Hot Deals</h2>
        <a href="#" className="text-sm font-medium text-brand hover:underline">
          View all Products
        </a>
      </div>
      <Swiper
        modules={[FreeMode]}
        freeMode
        spaceBetween={16}
        slidesPerView={2.2}
        breakpoints={{
          640: { slidesPerView: 3.2 },
          1024: { slidesPerView: 5 },
        }}
        className="!pb-2"
      >
        {hotDealsProducts.map((product, i) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={{ ...product, id: `${product.id}-${i}` }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export function BlackEdition() {
  return (
    <section className="container-x mt-20">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900">
        <div className="relative aspect-[21/9]">
          <Image
            src="/assets/categories/Masalas.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-center gap-3 px-8 sm:px-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Introducing
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">Black Edition</h2>
          <a href="#" className="btn bg-white text-neutral-900 hover:bg-cream">
            Show more
          </a>
        </div>
      </div>
    </section>
  );
}
