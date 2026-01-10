import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePag from './Pages/HomePag.jsx';
import Rootlayout from './react router/Rootlayout.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import Contact from './Pages/ContactPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: HomePag },
       { path: "shop", Component: ProductPage },
       { path: "Contact", Component: Contact },
      
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
