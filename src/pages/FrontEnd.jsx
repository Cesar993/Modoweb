import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Carrusel from '../components/Carrusel'
import Baner from '../components/Baner'
import Footer from '../components/Footer'
import Solu from '../components/Solu'
import MidImg from '../components/MidImg'
import AboutUs from '../components/AboutUs'

const FrontEnd = () => {
  return (
    <>
    <div className='bg-custom-page h-auto f'>
        <Nav/>
        <Outlet/>
        <Carrusel />
        <Baner/>
        <AboutUs/>
        <Solu/>
        <MidImg/>
        <Footer/>
    </div>
    </>
  )
}

export default FrontEnd