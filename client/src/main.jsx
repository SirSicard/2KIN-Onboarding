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
import CartPage from './pages/CartPage.jsx';
import DocsCategoryPage from './pages/DocsCategoryPage.jsx';
import RegisterPage from "./pages/RegisterPage.jsx";
import AppstorePage from './pages/AppstorePage.jsx';
import AppDetailsPage from "./pages/AppDetailsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="docs" element={<DocumentationPage />} />
      <Route path='cart' element={<CartPage/> }/>
      <Route path="docs/:id" element={<DocsCategoryPage />} />
      <Route path="apps" element={<AppstorePage/>}/>
      <Route path="apps/:id" element={<AppDetailsPage/>}/>
      <Route path="register" element={<RegisterPage />} />
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
