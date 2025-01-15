import React from 'react'
import { datosCarr } from '../Datos/datos'




const Carrusel = () => {


  return (
    <>

      <div className='h-96 m-5 mr-6 bg-slate-400'>
        <h1>Our Products</h1> 
        <div className='flex gap-4'>
          {datosCarr.map((item) => (
            <div key={item.id}
              className='
          bg-neutral-700
            h-80
            w-3/4
          '>
              {item.id}
              <img src="https://www.allkpop.com/upload/2022/02/content/072221/1644290513-210217-loona-twitter-update-chuu-documents-1.jpg" alt="" />
              <h1 className='align-text-bottom'>{item.nombre}</h1>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Carrusel