import React from "react";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { router } from "./routes";
import "./App.css"; // Assuming you have global styles

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;