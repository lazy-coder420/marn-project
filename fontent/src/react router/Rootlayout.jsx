import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar' 
import Footer from '../Components/Footer'
import { Outlet } from "react-router";

const Rootlayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Rootlayout
