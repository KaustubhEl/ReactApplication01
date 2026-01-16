import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

// Import your page components
// (If these files don't exist yet, create basic placeholder files for them)
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// A wrapper to protect routes like Checkout
const ProtectedRoute = ({ children }) => {
  // Check for auth token (adjust key based on your Auth logic)
  const isAuthenticated = localStorage.getItem("authToken"); 
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Main Layout with Header/Footer placeholders
const AppLayout = () => (
  <div className="app-layout">
    {/* <Header /> goes here */}
    <main className="container">
      <Outlet />
    </main>
    {/* <Footer /> goes here */}
  </div>
);

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);