import { CartItem as CartItemType } from "@/lib/types";

export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-gray-500">${item.price} × {item.quantity}</p>
        </div>
      </div>
      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
}
