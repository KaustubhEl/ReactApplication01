import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("authToken", "dummy_token_123");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-stone-200">
        <h2 className="text-2xl font-serif text-center text-stone-800 mb-6">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-600">Full Name</label>
            <input type="text" required className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-yellow-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-600">Email</label>
            <input type="email" required className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-yellow-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-600">Password</label>
            <input type="password" required className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-yellow-500" />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-stone-800"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-stone-600">
          Already have an account? <Link to="/login" className="text-yellow-600 hover:text-yellow-700">Sign in</Link>
        </p>
      </div>
    </div>
  );
}