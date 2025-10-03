import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../pages/home/Home'
import { Error404 } from '../../layouts/Error404'

import RootLayout from '../../layouts/RootLayout'
import { CategoryPage } from '../../pages/CategoryPage'

import ProductDetail from '../../features/products/pages/ProductDetail'
// import ProfileLayout from '../../layouts/profileLayout'
// import Addresses from '../../features/profile/components/Addresses'
// import { Orders } from '../../features/profile/components/Orders'


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
          path: 'categories/:id',
          element: <CategoryPage />
        },
        {
          path: 'product-detail/:id',
          element: <ProductDetail />
        }

      ],
    },
    // {
    //   path: '/profile',
    //   element: <ProfileLayout />,
    //   children:[
    //     {
    //       path:'',
    //       element:<ProfileOverview />
    //     },
    //     {path:'addresses',
    //       element:<Addresses />
    //     },
    //     {path:'orders',
    //       element:<Orders />
    //     }
    //   ]
      
    // }

  ]
  )




  return (
    <RouterProvider router={appRouter} />
  )
}

export default AppRoutes