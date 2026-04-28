const products = [
  { id: 1, name: "Smartphone", price: "$499", image: "/images/smart phone.jpg" },
  { id: 2, name: "Laptop", price: "$650", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },

 { id: 4, name: "Airpods", price: "$49", image: "/images/airpods.jpg" },
  { id: 5, name: " Digital Camera", price: "$595", image: "/images/camera.jpg" },
  { id: 6, name: "C-Type Data Cable", price: "$5", image: "/images/cable.jpg" },



   { id: 7, name: "Smart LED", price: "$300", image: "/images/led.jpg" },
  { id: 8, name: "Photo and Video Accessories", price: "$50", image: "/images/stand.jpg" },
  { id: 9, name: "MicroSD Cards", price: "$10", image: "/images/card.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
