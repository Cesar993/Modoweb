import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Carrusel from '../components/Carrusel'

const FrontEnd = () => {
  return (
    <>
    <div className='bg-custom-page h-auto f'>
        <Nav/>
        <Outlet/>
        <Carrusel />
        <footer className='h-auto bg-custom-page'>Souy un Footer</footer>
    </div>
    </>
  )
}

export default FrontEnd