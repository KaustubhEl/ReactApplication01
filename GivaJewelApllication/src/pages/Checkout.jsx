import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    zip: "",
    card: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! Thank you for shopping with GivaJewels.");
    clearCart();
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-serif text-center text-stone-900 mb-8">Checkout</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 mb-6">
        <h2 className="text-lg font-medium text-stone-900 mb-4">Order Summary</h2>
        <div className="flex justify-between text-stone-600 border-t pt-4">
          <span>Total Amount</span>
          <span className="font-bold text-stone-900">₹{getCartTotal().toLocaleString()}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-stone-200">
        <h2 className="text-lg font-medium text-stone-900">Shipping Details</h2>
        
        <div>
          <label className="block text-sm font-medium text-stone-700">Street Address</label>
          <input required name="address" onChange={handleChange} className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2 border" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700">City</label>
            <input required name="city" onChange={handleChange} className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2 border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700">Zip Code</label>
            <input required name="zip" onChange={handleChange} className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2 border" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">Card Details (Simulation)</label>
          <input required name="card" placeholder="0000 0000 0000 0000" onChange={handleChange} className="mt-1 block w-full border-stone-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 px-3 py-2 border" />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none"
        >
          Pay & Place Order
        </button>
      </form>
    </div>
  );
}