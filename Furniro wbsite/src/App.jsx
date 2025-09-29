import React from 'react'
import Navbar from './Section/Navbar/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Landing from './Section/Landing/Landing'
import Contact from './Section/Contact/Contact'
import Shop from './Section/Shop/Shop'
import Blog from './Section/Blog/Blog'
import AuthPage from './Section/Account/AuthPage'
import ProductDetails from './Section/Products/ProductDetails'
import WishList from './Section/Products/WishList'
import Search from './Section/Products/Search'
import { ToastContainer } from 'react-toastify'
import CartPage from './Section/CartPage/CartPage'
import CheckOut from './Section/CartPage/CheckOut'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path='shop' element={<Shop />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
      <Route path='account' element={<AuthPage />} />
      <Route path='search' element={<Search />} />
      <Route path=':slug/:id' element={<ProductDetails />} />
      <Route path='heart' element={<WishList />} />
      <Route path='cart' element={<CartPage />} />
      <Route path='checkout' element={<CheckOut />} />
    </Route>
  )
)

export default function App() {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}
