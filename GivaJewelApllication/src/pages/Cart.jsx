import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-stone-800 mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-yellow-600 underline">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-serif text-stone-900 mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow border border-stone-200 overflow-hidden">
        <ul className="divide-y divide-stone-200">
          {cartItems.map((item) => (
            <li key={item.id} className="p-4 sm:p-6 flex items-center">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-stone-200">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
              </div>
              <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h3 className="text-base font-medium text-stone-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-stone-500">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-4">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="rounded-md border-stone-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm font-medium text-red-600 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-stone-50 p-6 border-t border-stone-200">
          <div className="flex justify-between text-base font-medium text-stone-900 mb-4">
            <p>Subtotal</p>
            <p>₹{getCartTotal().toLocaleString()}</p>
          </div>
          <Link
            to="/checkout"
            className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-stone-900 hover:bg-stone-800"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}