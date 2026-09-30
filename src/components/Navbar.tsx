import Link from "next/link";
import { Children } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/login", label: "Login" },
  {
    href: "/dashboard",
    label: "Dashboard",
    Children: [{ href: "/", label: "Orders" }],
  },
];

export default function Navbar() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <ul>
          {navigation.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
