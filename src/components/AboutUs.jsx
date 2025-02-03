import React from 'react'

const AboutUs = () => {
  return (
    <>
    
    <section className='flex flex-col md:flex-row  pt-10 pl-5 md:pt-48 md:pb-48 '>
                <div className=' md:w-56 mr-3 font-medium text-center md:text-left'>About Us</div>
                <div className=' md:w-midImg pr-5 md:pr-20 md:text-4xl text-center md:text-justify text-black'> We craft innovative interior solutions that combine minimalist design with modern functionality, ideal for enhancing contemporary living and commercial spaces.</div>
                <div className=' md:w-mid h-48 flex justify-center md:justify-end md:pl-4  pr-5 md:pr-0'>
                <img  src="/img/plano.svg" alt="" />
              </div>
              <div className=' w-56 mr-3'></div>
            </section>
    </>
  )
}

export default AboutUs