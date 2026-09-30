
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { formatCurrency } from "@/lib/utils";
import { products } from "../products";
import styles from "./product.module.css";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  return (
    <main className={styles.page}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <article className={styles.product}>
        <div className={styles.imageFrame}>
          <Image
            src={product.image}
            alt={`${product.name} in ${product.color}`}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
            className={styles.image}
          />
          <span className={styles.imageLabel}>01 / Studio collection</span>
        </div>

        <div className={styles.information}>
          <p className={styles.category}>{product.category}</p>
          <h1>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.rating}>
            <span aria-label={`${product.rating} out of 5 stars`}>
              {product.rating.toFixed(1)} / 5
            </span>
            <span aria-hidden="true"> · </span>
            {product.reviewCount} reviews
          </p>
          <p className={styles.price}>{formatCurrency(product.price)}</p>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.colorRow}>
            <span className={styles.colorSwatch} aria-hidden="true" />
            <span>Color: {product.color}</span>
          </div>

          <AddToCartButton product={product} />

          <p className={styles.shipping}>
            Complimentary shipping · 30-day returns
          </p>
        </div>
      </article>

      <section className={styles.features} aria-labelledby="features-title">
        <div>
          <p className={styles.category}>Made for every day</p>
          <h2 id="features-title">Small details. Better listening.</h2>
        </div>
        <ul className={styles.featureList}>
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className={styles.specifications} aria-labelledby="specs-title">
        <h2 id="specs-title">Specifications</h2>
        <dl>
          {product.specifications.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}