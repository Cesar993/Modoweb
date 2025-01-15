import React from 'react'
import SimpleParallax from "simple-parallax-js";
import Carrusel from './Carrusel';
export const Hero = () => {
    return (
        <>
            <div className='bg-slate-400  mt-20 ml-5 mr-9 h-auto'>
                <div className='pt-2 '>
                    <img className='w-full' src="https://cdn.prod.website-files.com/66f6bb2a752e9f87ba2eb126/66fea072dc084e284d0758f2_asset-hero-text.svg" alt="" />
                </div>
                <div className="pt-8 h-hero">
                    <SimpleParallax 
                    maxTransition={40} 
                    scale={1.2}
                    delay={1} 
                    transition="cubic-bezier(0,0,0,1)"
                    >
                        <img className=" h-hero w-full " 
                        src="/img/hero.jpeg" alt="image" />
                    </SimpleParallax>
                <div className=' ml-20  absolute bg-slate-300 bottom-0 w-auto h-auto flex flex-col  items-center text-white text-2xl '>
                    <p className="drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">We stand for a rich legacy of Italian design,</p>
                    <p className="drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">continually evolving to shape the future </p>
                    <p className="drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">of interior spaces.</p>
                </div>
                </div>

            </div>


            <Carrusel/>


        </>
    )
}
