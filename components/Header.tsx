"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/lib/store/cart";
import { nav } from "@/lib/data";

export default function Header() {
  const { lines, itemCount, subtotal, removeLine, updateQuantity } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-cream/95 backdrop-blur">
      <div className="container-x flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logos/local_logo_dark.png"
            alt="Local logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Product categories">
          {nav.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 py-2 text-sm font-medium text-neutral-800 hover:text-brand"
                aria-expanded={openGroup === group.label}
              >
                {group.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${openGroup === group.label ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {openGroup === group.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full min-w-[200px] rounded-xl border border-neutral-200 bg-white py-2 shadow-lg"
                  >
                    {group.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-cream hover:text-brand"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden text-sm font-medium text-neutral-800 hover:text-brand sm:block">
            Account
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => setCartOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:border-brand"
              aria-expanded={cartOpen}
              aria-controls="cart-drawer"
            >
              <ShoppingCart size={16} aria-hidden="true" />
              ₹{subtotal.toFixed(2)} ({itemCount})
            </button>

            <AnimatePresence>
              {cartOpen && (
                <motion.div
                  id="cart-drawer"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl"
                >
                  {lines.length === 0 ? (
                    <p className="py-6 text-center text-sm text-neutral-500">
                      Your cart is empty.
                    </p>
                  ) : (
                    <ul className="max-h-80 space-y-3 overflow-y-auto">
                      {lines.map((line) => (
                        <li
                          key={`${line.productId}-${line.variant}`}
                          className="flex items-center gap-3"
                        >
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-neutral-50">
                            <Image
                              src={line.image}
                              alt={line.name}
                              fill
                              sizes="48px"
                              className="object-contain p-1"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-neutral-900">
                              {line.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {line.variant !== "default" ? `${line.variant} · ` : ""}
                              ₹{line.price.toFixed(2)}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              aria-label={`Decrease quantity of ${line.name}`}
                              onClick={() =>
                                updateQuantity(line.productId, line.variant, line.quantity - 1)
                              }
                              className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300"
                            >
                              <Minus size={12} aria-hidden="true" />
                            </button>
                            <span className="w-5 text-center text-sm">{line.quantity}</span>
                            <button
                              type="button"
                              aria-label={`Increase quantity of ${line.name}`}
                              onClick={() =>
                                updateQuantity(line.productId, line.variant, line.quantity + 1)
                              }
                              className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300"
                            >
                              <Plus size={12} aria-hidden="true" />
                            </button>
                          </div>
                          <button
                            type="button"
                            aria-label={`Remove ${line.name} from cart`}
                            onClick={() => removeLine(line.productId, line.variant)}
                            className="text-neutral-400 hover:text-clay"
                          >
                            <X size={14} aria-hidden="true" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-3">
                    <span className="text-sm font-semibold">Subtotal</span>
                    <span className="text-sm font-semibold">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <button type="button" className="btn-primary mt-3 w-full" disabled={lines.length === 0}>
                    Checkout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
