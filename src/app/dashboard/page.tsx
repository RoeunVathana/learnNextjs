import Link from "next/link";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <nav aria-label="Dashboard navigation">
        <ul>
          <li>
            <Link href="/dashboard/products">Products</Link>
          </li>
          <li>
            <Link href="/dashboard/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}