"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Your cart is empty 🛒
        </h1>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Go to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      <ul className="divide-y divide-gray-200 mb-6">
        {cart.map((item) => (
          <li key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.quantity} × ${item.price}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Clear Cart
          </button>
          <Link
            href="/checkout"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
