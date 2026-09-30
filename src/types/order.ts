export type OrderItem = {
  productId: string;
  quantity: number;
  unitPrice: number;
};

export type Order = {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  createdAt: string;
};