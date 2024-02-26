import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import LandingPage from './pages/LandingPage.jsx'
import ShopPage from './pages/ShopPage.jsx';
import DocumentationPage from './pages/DocumentationPage.jsx';
import DocsCategoryPage from './pages/DocsCategoryPage.jsx';
import RegisterPage from "./pages/RegisterPage.jsx";
import AppstorePage from './pages/AppstorePage.jsx';
import UserDashboard from './components/User/UserDashboard.jsx';
import AddProduct from './pages/dashboard/AddProduct.jsx';
import ShopHistory from './pages/dashboard/ShopHistory.jsx';
import UserProfile from './pages/dashboard/UserProfile.jsx';
import BillingPage from './pages/dashboard/BillingPage.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="docs" element={<DocumentationPage />} />
      <Route path="docs/:id" element={<DocsCategoryPage />} />
      <Route path="Apps" element={<AppstorePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="user" element={<UserDashboard/>}>
        <Route index element={<UserDashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="shop-history" element={<ShopHistory />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="billing" element={<BillingPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
