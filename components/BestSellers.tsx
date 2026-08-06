"use client";

import { motion } from "framer-motion";
import { bestSellers } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section id="best-sellers" className="container-x mt-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="section-heading">Best Sellers</h2>
        <a href="#" className="text-sm font-medium text-brand hover:underline">
          View all products
        </a>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {bestSellers.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
