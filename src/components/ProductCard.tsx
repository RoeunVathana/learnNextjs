import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { formatCurrency } from "@/lib/utils";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <Link
        className={styles.imageLink}
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.image}
          alt={`${product.name} in ${product.color}`}
          width={720}
          height={720}
          className={styles.image}
        />
        <span className={styles.category}>{product.category}</span>
      </Link>
      <div className={styles.details}>
        <div>
          <h2>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h2>
          <p>{product.tagline}</p>
        </div>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
      </div>
    </article>
  );
}