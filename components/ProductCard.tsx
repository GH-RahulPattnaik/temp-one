"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBasket } from "lucide-react";
import toast from "react-hot-toast";
import { useCart } from "@/lib/store/cart";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";
import StarRating from "./StarRating";

export default function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { addToCart } = useCart();

  function handleBuyNow() {
    addToCart({
      productId: product.id,
      name: product.name,
      variant: "default",
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart`);
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group flex flex-col rounded-2xl border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-neutral-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 260px"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1">
        <p className="font-display text-lg text-neutral-900">{product.name}</p>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold text-neutral-900">
            ₹{product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-neutral-400 line-through">
              ₹{product.compareAtPrice.toFixed(2)}
            </span>
          )}
          {product.unit && (
            <span className="text-xs text-neutral-500">{product.unit}</span>
          )}
        </div>
      </div>
      <button type="button" onClick={handleBuyNow} className="btn-primary mt-4 w-full gap-2">
        <ShoppingBasket size={16} aria-hidden="true" />
        Buy Now
      </button>
    </motion.div>
  );
}
