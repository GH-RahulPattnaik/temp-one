"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Zap } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "@/lib/store/cart";
import { maggiProduct } from "@/lib/data";
import StarRating from "./StarRating";

export default function MaggiProduct() {
  const { addToCart } = useCart();
  const [variantId, setVariantId] = useState(maggiProduct.variants[0].id);
  const [quantity, setQuantity] = useState(1);

  const variant = useMemo(
    () => maggiProduct.variants.find((v) => v.id === variantId) ?? maggiProduct.variants[0],
    [variantId]
  );

  const savings = (variant.compareAtPrice - variant.price) * quantity;

  function handleAddToCart() {
    addToCart(
      {
        productId: maggiProduct.id,
        name: maggiProduct.name,
        variant: variant.label,
        price: variant.price,
        image: maggiProduct.image,
      },
      quantity
    );
    toast.success(`${quantity} × ${maggiProduct.name} (${variant.label}) added to cart`);
  }

  return (
    <section className="container-x mt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="grid gap-10 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 lg:grid-cols-2"
      >
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-50">
          <Image
            src={maggiProduct.image}
            alt={maggiProduct.name}
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-contain p-8"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-2 flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-neutral-900">
              ₹{variant.price.toFixed(2)}
            </span>
            <span className="text-base text-neutral-400 line-through">
              ₹{variant.compareAtPrice.toFixed(2)}
            </span>
          </div>
          <h2 className="font-display text-4xl text-neutral-900">{maggiProduct.name}</h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            {maggiProduct.description}
          </p>

          <fieldset className="mt-6">
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Style
            </legend>
            <div className="flex flex-wrap gap-2">
              {maggiProduct.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariantId(v.id)}
                  aria-pressed={variantId === v.id}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    variantId === v.id
                      ? "border-brand bg-brand text-white"
                      : "border-neutral-300 text-neutral-700 hover:border-brand"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-4 flex items-baseline gap-3 text-sm">
            <span className="font-semibold text-neutral-900">
              ₹{variant.price.toFixed(2)}
            </span>
            <span className="text-neutral-400 line-through">
              ₹{variant.compareAtPrice.toFixed(2)}
            </span>
            <span className="font-medium text-brand">you save ₹{savings.toFixed(2)}</span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-neutral-300">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center"
              >
                <Minus size={16} aria-hidden="true" />
              </button>
              <span className="w-8 text-center text-sm font-medium" aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-10 w-10 items-center justify-center"
              >
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>
            <StarRating rating={5} reviewCount={4} />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAddToCart}
              className="btn-outline flex-1 gap-2"
            >
              <ShoppingBag size={16} aria-hidden="true" />
              Add to cart
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="btn-primary flex-1 gap-2"
            >
              <Zap size={16} aria-hidden="true" />
              Buy it now
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
