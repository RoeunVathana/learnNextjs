"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { addToCart, type CartItem } from "@/store/cartStore";
import type { Product } from "@/types/product";
import styles from "./AddToCartButton.module.css";

function readCart(): CartItem[] {
  try {
    const savedCart = window.localStorage.getItem("cart");
    if (!savedCart) return [];

    const parsedCart: unknown = JSON.parse(savedCart);
    return Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : [];
  } catch {
    return [];
  }
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    let cart = readCart();
    for (let index = 0; index < quantity; index += 1) {
      cart = addToCart(cart, product);
    }
    window.localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
  }

  return (
    <div className={styles.purchase}>
      <div className={styles.quantity} aria-label="Quantity">
        <Button
          className={styles.quantityButton}
          aria-label="Decrease quantity"
          disabled={quantity <= 1}
          onClick={() => setQuantity((value) => Math.max(1, value - 1))}
        >
          -
        </Button>
        <span aria-live="polite">{quantity}</span>
        <Button
          className={styles.quantityButton}
          aria-label="Increase quantity"
          onClick={() => setQuantity((value) => value + 1)}
        >
          +
        </Button>
      </div>
      <Button className={styles.addButton} onClick={handleAddToCart}>
        {added ? "Add another" : "Add to cart"}
      </Button>
      {added && (
        <p className={styles.confirmation} role="status">
          Added to your cart. <Link href="/cart">View cart</Link>
        </p>
      )}
    </div>
  );
}