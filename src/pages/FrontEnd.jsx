import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Carrusel from '../components/Carrusel'
import Baner from '../components/Baner'
import Footer from '../components/Footer'
import Solu from '../components/Solu'
import MidImg from '../components/MidImg'
import AboutUs from '../components/AboutUs'
import MidFra from '../components/MidFra'

const FrontEnd = () => {

  const titulo1 = 'MMLO House'
  const texto1 = ' At the heart of our identity is Molo House, a curated space that brings our vision to life.'

  const titulo2 = 'Our Heritage'
  const texto2 = ' Rooted in Sacile, Italy, a region known for design excellence, we draw on decades of craftsmanship and modern thinking to shape exclusive interiors.'
  

  
  return (
    <>
    <div className='bg-custom-page h-auto f'>
        <Nav/>
        <Outlet/>
        <Carrusel />
        <Baner/>
        <AboutUs/>
        <Solu/>
        <MidFra titulo={titulo1} texto={texto1}/>
        <MidImg/>
        <MidFra titulo={titulo2} texto={texto2}/>

        <Footer/>
    </div>
    </>
  )
}

export default FrontEnd