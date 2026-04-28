"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { Product } from "@/lib/types";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulated API or local data
    setFeaturedProducts([
      {
        id: "1",
        name: "Smart Watch",
        price: 129.99,
        description: "A sleek smartwatch with fitness tracking and call support.",
        image: "/images/apple-watch.jpg",
      },
      {
        id: "2",
        name: "Wireless Headphones",
        price: 89.99,
        description: "Noise-cancelling headphones with deep bass and comfort fit.",
        image: "/images/wireless headphones.jpg"
      },
      {
        id: "3",
        name: "Laptop Backpack",
        price: 59.99,
        description: "Waterproof backpack with multiple compartments.",
        image: "/images/laptop backpack.jpg",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Bilal’s E-Commerce Store</h1>
        <p className="text-lg text-white/90 max-w-2xl">
          Discover the latest gadgets, accessories, and fashion products all in one place.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/products">
            <Button label="Shop Now" />
          </Link>
          <Link href="/about">
            <Button label="Learn More" variant="outline" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="text-center py-16 bg-indigo-50 rounded-t-3xl">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Don’t miss out on our exclusive offers!
        </h3>
        <Link href="/products">
          <Button label="Explore Products" />
        </Link>
      </section>
    </div>
  );
}
