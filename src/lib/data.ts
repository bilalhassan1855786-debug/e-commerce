import { Product, CartItem } from "./types";

export const products: Product[] = [
  {
    id: "product-1",
    name: "Stylish Headphones",
    price: 99.99,
    description: "High-quality sound and comfort with wireless connectivity.",
    image: "https://images.unsplash.com/photo-1518449035812-6d3b13b3c1e1?w=500",
  },
  {
    id: "product-2",
    name: "Smart Watch",
    price: 149.99,
    description: "Track your fitness and stay connected in style.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
  },
  {
    id: "product-3",
    name: "Laptop Sleeve",
    price: 39.99,
    description: "Protect your laptop with this stylish and durable sleeve.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
  },
];

export const cartItems: CartItem[] = [
  { ...products[0], quantity: 1 },
  { ...products[1], quantity: 2 },
];
