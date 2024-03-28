import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import DocumentationPage from "./pages/DocumentationPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import DocsCategoryPage from "./pages/DocsCategoryPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AppstorePage from "./pages/AppstorePage.jsx";
import UserDashboard from "./components/User/UserDashboard.jsx";
import AddProduct from "./pages/dashboard/AddProduct.jsx";
import ShopHistory from "./pages/dashboard/ShopHistory.jsx";
import UserProfile from "./pages/dashboard/UserProfile.jsx";
import BillingPage from "./pages/dashboard/BillingPage.jsx";

import AppDetailsPage from "./pages/AppDetailsPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/docs",
        element: <DocumentationPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/docs/:id",
        element: <DocsCategoryPage />,
      },
      {
        path: "/apps",
        element: <AppstorePage />,
      },
      {
        path: "/apps/:id",
        element: <AppDetailsPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/user",
        element: <UserDashboard />,
        children: [
          {
            path: "/user/add-product",
            element: <AddProduct />,
            default: true,
          },
          {
            path: "/user/shop-history",
            element: <ShopHistory />,
          },
          {
            path: "/user/profile",
            element: <UserProfile />,
          },
          {
            path: "/user/billing",
            element: <BillingPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
