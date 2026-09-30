import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "studio-one",
    name: "Studio One Wireless",
    tagline: "Hear every layer.",
    description:
      "A quieter commute and a clearer record collection. Studio One pairs adaptive noise cancellation with warm, balanced sound for long listening sessions.",
    category: "Wireless headphones",
    price: 189,
    image: "/images/studio-headphones.jpg",
    rating: 4.8,
    reviewCount: 126,
    color: "Graphite",
    features: [
      "Adaptive noise cancellation",
      "Up to 40 hours of playback",
      "Multipoint Bluetooth connection",
      "USB-C fast charging",
    ],
    specifications: [
      { label: "Driver", value: "40 mm dynamic" },
      { label: "Connectivity", value: "Bluetooth 5.3, USB-C, 3.5 mm" },
      { label: "Weight", value: "258 g" },
      { label: "In the box", value: "Headphones, cable, carry pouch" },
    ],
  },
];
