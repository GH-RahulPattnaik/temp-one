"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartLine } from "@/lib/types";

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  addToCart: (line: Omit<CartLine, "quantity">, quantity?: number) => void;
  removeLine: (productId: string, variant: string) => void;
  updateQuantity: (productId: string, variant: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "local-grocery-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addToCart: CartContextValue["addToCart"] = (line, quantity = 1) => {
    setLines((prev) => {
      const existing = prev.find(
        (l) => l.productId === line.productId && l.variant === line.variant
      );
      if (existing) {
        return prev.map((l) =>
          l === existing ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { ...line, quantity }];
    });
  };

  const removeLine: CartContextValue["removeLine"] = (productId, variant) => {
    setLines((prev) =>
      prev.filter((l) => !(l.productId === productId && l.variant === variant))
    );
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (
    productId,
    variant,
    quantity
  ) => {
    setLines((prev) => {
      if (quantity <= 0) {
        return prev.filter(
          (l) => !(l.productId === productId && l.variant === variant)
        );
      }
      return prev.map((l) =>
        l.productId === productId && l.variant === variant
          ? { ...l, quantity }
          : l
      );
    });
  };

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity * l.price, 0),
    [lines]
  );

  return (
    <CartContext.Provider
      value={{ lines, itemCount, subtotal, addToCart, removeLine, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
