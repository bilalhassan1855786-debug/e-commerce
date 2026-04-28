"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with <span className="text-blue-600 font-semibold">MyStore</span>!
        </p>
        <a
          href="/products"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">
          Your cart is empty 🛒
        </h1>
        <a
          href="/products"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Go to Products
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h1>

      <ul className="divide-y divide-gray-200 mb-6">
        {cart.map((item) => (
          <li key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.quantity} × ${item.price}
              </p>
            </div>
            <p className="font-semibold text-gray-800">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center border-t pt-4">
        <h2 className="text-xl font-semibold">Total:</h2>
        <span className="text-xl font-bold text-blue-600">
          ${total.toFixed(2)}
        </span>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
      >
        Place Order
      </button>
    </div>
  );
}
