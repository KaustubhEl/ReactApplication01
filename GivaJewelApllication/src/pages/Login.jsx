import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate API Call
    if (email && password) {
      localStorage.setItem("authToken", "dummy_token_123");
      // Dispatch a storage event so other components know auth changed immediately if needed
      window.dispatchEvent(new Event("storage"));
      navigate("/products");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-stone-200">
        <h2 className="text-2xl font-serif text-center text-stone-800 mb-6">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-600">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-600">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-stone-600">
          New here? <Link to="/register" className="text-yellow-600 hover:text-yellow-700">Create an account</Link>
        </p>
      </div>
    </div>
  );
}