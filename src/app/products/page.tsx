import ProductCard from "@/components/ProductCard";
import { products } from "./products";
import styles from "./products.module.css";

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>The listening room</p>
        <h1>Sound, considered.</h1>
        <p>Thoughtful audio for the everyday rituals worth hearing.</p>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}