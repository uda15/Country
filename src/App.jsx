import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/AddProducts'
import Country from './pages/Product'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Component/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import './App.css'


const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        errorElement : <ErrorPage />,
        children: [
          {
        path: '/',
        element:<Home />
      }, 
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/contact',
        element: <Add />
      },
      {
        path: '/country',
        element: <Country />
      }
        ] 
      },
      
    ]
  )
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App