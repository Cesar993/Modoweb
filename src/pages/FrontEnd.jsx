import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Carrusel from '../components/Carrusel'
import Baner from '../components/Baner'

const FrontEnd = () => {
  return (
    <>
    <div className='bg-custom-page h-auto f'>
        <Nav/>
        <Outlet/>
        <Carrusel />
        <Baner/>
        <footer className='h-auto bg-custom-page'>Soy un Footer</footer>
    </div>
    </>
  )
}

export default FrontEnd