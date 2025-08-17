import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../../layouts/pages/Home'
import { Error404 } from '../../layouts/Error404'
import { Dummy } from '../../layouts/pages/Dummy'
import RootLayout from '../../layouts/RootLayout'

const AppRoutes = () => {



  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error404 />,
      children: [
        { path: "/", element: <Home /> },
        { path: "d", element: <Dummy /> },
      ],
    },
    
  ]
  )




  return (
    <RouterProvider router={appRouter} />
  )
}

export default AppRoutes