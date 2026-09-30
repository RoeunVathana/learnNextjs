
"use client";
import { useState } from "react";
import { Card } from "./useState/Card";
export default function Home() {
  const [card] = useState<Card[]>([
      {
        id: 1,
        name: "test",
        image: "test",
        color: "test",
        category: "test",
        price: 10,
        tagline: "test",
      }
  ]);
  return (
    <main>
      {
        card.map((item: Card) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))
      }
    </main>
  );
}
