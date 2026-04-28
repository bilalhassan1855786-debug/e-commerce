"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex items-center gap-6">
      <Link href="/" className={linkClass("/")}>Home</Link>
      <Link href="/products" className={linkClass("/products")}>Products</Link>
      

      {/* 🛒 Cart Icon */}
      <Link href="/cart" className="relative flex items-center group">
        <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
}
