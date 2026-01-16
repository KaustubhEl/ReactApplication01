import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { generateProductInsights } from "../services/gemini";

// Helper to find mock product (In real app, this is an API call)
const MOCK_PRODUCTS = [
  { id: 1, name: "Gold Solitaire Ring", price: 45000, description: "A classic 18k gold ring.", image: "https://placehold.co/500x500/f5f5f4/a8a29e?text=Ring" },
  { id: 2, name: "Diamond Stud Earrings", price: 25000, description: "Sparkling diamond studs.", image: "https://placehold.co/500x500/f5f5f4/a8a29e?text=Earrings" },
  // ... add other mock products here to match ProductList
];

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [aiInsights, setAiInsights] = useState(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    // Simulate fetching product
    const found = MOCK_PRODUCTS.find((p) => p.id === parseInt(id));
    setProduct(found || MOCK_PRODUCTS[0]); // Fallback to first item if not found
  }, [id]);

  const handleAskAI = async () => {
    if (!product) return;
    setLoadingAi(true);
    const data = await generateProductInsights(product.name, product.price);
    setAiInsights(data);
    setLoadingAi(false);
  };

  if (!product) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-start space-y-6">
          <h1 className="text-3xl font-serif text-stone-900">{product.name}</h1>
          <p className="text-2xl font-light text-yellow-600">₹{product.price.toLocaleString()}</p>
          <p className="text-stone-600">{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-stone-900 text-white py-3 px-6 rounded-md hover:bg-stone-800 transition"
          >
            Add to Cart
          </button>

          {/* AI Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-stone-50 to-white border border-stone-200 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-serif text-stone-800">✨ AI Assistant</h3>
              {!aiInsights && (
                <button
                  onClick={handleAskAI}
                  disabled={loadingAi}
                  className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 disabled:opacity-50"
                >
                  {loadingAi ? "Analyzing..." : "Ask Gemini"}
                </button>
              )}
            </div>

            {loadingAi && <p className="text-stone-500 animate-pulse">Generating luxury insights...</p>}

            {aiInsights && (
              <div className="space-y-3 animate-fade-in">
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wide">Expert Summary</h4>
                  <p className="text-stone-700 italic">"{aiInsights.summary}"</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wide">Gifting Idea</h4>
                  <p className="text-stone-700">🎁 {aiInsights.giftingIdea}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}