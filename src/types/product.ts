export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  color: string;
  features: string[];
  specifications: { label: string; value: string }[];
};