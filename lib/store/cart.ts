import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine } from "@/lib/types";

type CartState = {
  lines: CartLine[];
  addToCart: (line: Omit<CartLine, "quantity">, quantity?: number) => void;
  removeLine: (productId: string, variant: string) => void;
  updateQuantity: (productId: string, variant: string, quantity: number) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      addToCart: (line, quantity = 1) =>
        set((state) => {
          const existing = state.lines.find(
            (l) => l.productId === line.productId && l.variant === line.variant
          );
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l === existing ? { ...l, quantity: l.quantity + quantity } : l
              ),
            };
          }
          return { lines: [...state.lines, { ...line, quantity }] };
        }),
      removeLine: (productId, variant) =>
        set((state) => ({
          lines: state.lines.filter(
            (l) => !(l.productId === productId && l.variant === variant)
          ),
        })),
      updateQuantity: (productId, variant, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              lines: state.lines.filter(
                (l) => !(l.productId === productId && l.variant === variant)
              ),
            };
          }
          return {
            lines: state.lines.map((l) =>
              l.productId === productId && l.variant === variant
                ? { ...l, quantity }
                : l
            ),
          };
        }),
    }),
    { name: "local-grocery-cart" }
  )
);

/**
 * Convenience hook mirroring the previous Context API (lines, itemCount,
 * subtotal, addToCart, removeLine, updateQuantity) so components didn't need
 * to change when the cart moved from React Context to Zustand.
 */
export function useCart() {
  const lines = useCartStore((s) => s.lines);
  const addToCart = useCartStore((s) => s.addToCart);
  const removeLine = useCartStore((s) => s.removeLine);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);
  const subtotal = lines.reduce((sum, l) => sum + l.quantity * l.price, 0);

  return { lines, itemCount, subtotal, addToCart, removeLine, updateQuantity };
}
