import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mock Data
const MOCK_PRODUCTS = [
  { id: 1, name: "Gold Solitaire Ring", price: 45000, category: "Rings", image: "https://placehold.co/300x300/f5f5f4/a8a29e?text=Ring" },
  { id: 2, name: "Diamond Stud Earrings", price: 25000, category: "Earrings", image: "https://placehold.co/300x300/f5f5f4/a8a29e?text=Earrings" },
  { id: 3, name: "Silver Charm Bracelet", price: 8500, category: "Bracelets", image: "https://placehold.co/300x300/f5f5f4/a8a29e?text=Bracelet" },
  { id: 4, name: "Rose Gold Necklace", price: 32000, category: "Necklaces", image: "https://placehold.co/300x300/f5f5f4/a8a29e?text=Necklace" },
  { id: 5, name: "Vintage Emerald Pendant", price: 55000, category: "Necklaces", image: "https://placehold.co/300x300/f5f5f4/a8a29e?text=Pendant" },
  { id: 6, name: "Platinum Wedding Band", price: 60000, category: "Rings", image: "https://placehold.co/300x300/f5f5f4/a8a29e?text=Band" },
];

export default function ProductList() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-stone-800 bg-amber-300 p-4 rounded-xl">Kaustubh Giva Jewels</h1>
        <Link to="/cart" className="text-2xl font-serif text-stone-800">View Cart</Link>
        <h1 className="text-3xl font-serif text-stone-800"></h1>
        <select 
          className="border-stone-300 border rounded-md px-3 py-1 text-stone-600 focus:ring-yellow-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Rings">Rings</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Earrings">Earrings</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-stone-100">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-stone-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-stone-900">{product.name}</h3>
              <p className="mt-1 text-lg font-semibold text-yellow-600">₹{product.price.toLocaleString()}</p>
              <Link
                to={`/products/${product.id}`}
                className="mt-4 block w-full text-center bg-stone-900 text-white py-2 rounded hover:bg-stone-800 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}