import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../pages/Home'
import { Error404 } from '../../layouts/Error404'
import { Dummy } from '../../pages/Dummy'
import RootLayout from '../../layouts/RootLayout'
import { CategoryPage } from '../../pages/CategoryPage'

import ProductDetail from '../../features/products/ProductDetail'

const AppRoutes = () => {



  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "d",
          element: <Dummy />
        },
        {
          path: 'category',
          element: <CategoryPage />
        },
        {
          path: 'product-deatil',
          element: <ProductDetail />
        }

      ],
    },

  ]
  )




  return (
    <RouterProvider router={appRouter} />
  )
}

export default AppRoutes