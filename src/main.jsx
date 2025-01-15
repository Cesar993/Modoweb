import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import FrontEnd from './pages/FrontEnd.jsx'
import Home from './pages/Home.jsx'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const router = createBrowserRouter(
[
  {
    path:'/',
    element: <FrontEnd/>,
    children: [
      {
        index: true,
        
        element:<Home/>
      }
    ]
  }
]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
