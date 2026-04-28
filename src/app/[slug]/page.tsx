"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function ProductDetailPage() {
  const { slug } = useParams();

  // Normally, you’d fetch data by slug here:
  const product = {
    id: "1",
    name: "Smart Watch",
    price: 129.99,
    description:
      "This smartwatch lets you track your heart rate, fitness, and calls with ease. Stylish and comfortable to wear all day.",
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-indigo-600 mb-6">${product.price}</p>
          <Button label="Add to Cart" />
        </div>
      </div>
    </div>
  );
}
