import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';

import LandingPage from './pages/LandingPage.jsx'
import ShopPage from './pages/ShopPage.jsx';
import DocumentationPage from './pages/DocumentationPage.jsx';
import CartPage from './pages/CartPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<LandingPage/>}/>
      <Route path="shop" element={<ShopPage/>}/>
      <Route path="docs" element={<DocumentationPage />} />

      <Route path='cart' element={<CartPage/> }/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)