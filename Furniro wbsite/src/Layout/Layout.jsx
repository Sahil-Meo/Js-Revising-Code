import React from 'react'
import Navbar from '../Section/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Section/Footer/Footer'
import ScrollToTop from '../Components/StaticInfo/ScrollToTop'
import CartDrawer from '../Section/Products/CartDrawer'

const Layout = () => {
     return (
          <>
               <ScrollToTop />
               <Navbar />
               <CartDrawer />
               <Outlet />
               <Footer />
          </>
     )
}

export default Layout
