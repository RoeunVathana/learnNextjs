import type { Product } from "@/types/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

export function addToCart(items: CartItem[], product: Product): CartItem[] {
  const existingItem = items.find((item) => item.product.id === product.id);

  if (!existingItem) {
    return [...items, { product, quantity: 1 }];
  }

  return items.map((item) =>
    item.product.id === product.id
      ? { ...item, quantity: item.quantity + 1 }
      : item,
  );
}

export function removeFromCart(items: CartItem[], productId: string): CartItem[] {
  return items.filter((item) => item.product.id !== productId);
}

export function setCartItemQuantity(
  items: CartItem[],
  productId: string,
  quantity: number,
): CartItem[] {
  if (quantity <= 0) {
    return removeFromCart(items, productId);
  }

  return items.map((item) =>
    item.product.id === productId ? { ...item, quantity } : item,
  );
}