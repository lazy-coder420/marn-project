import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePag from './Pages/HomePag.jsx';
import Rootlayout from './react router/Rootlayout.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import Contact from './Pages/ContactPage.jsx'
import { Provider } from 'react-redux'
import  store  from '../src/store.js'

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
       <Provider store={store}>  
    <RouterProvider router={router} />,
    </Provider>,

  </StrictMode>,
)
