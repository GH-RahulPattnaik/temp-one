"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand/5">
      <div className="container-x grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-brand">
            Healthy &amp; Organic
          </p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-neutral-900 sm:text-6xl">
            Fresh &amp; Energetic
          </h1>
          <a href="#best-sellers" className="btn-primary mt-8 inline-flex">
            Learn more
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
        >
          <Image
            src="/assets/hero/image01.png"
            alt="Fresh produce arrangement"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
