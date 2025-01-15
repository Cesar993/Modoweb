import React from 'react'

export const Hero = () => {
    return (
        <>
            <div className='bg-slate-400  mt-20 md:ml-5 md:mr-6 h-auto'>
                <div className='pt-2 '>
                    <img className='w-full hidden md:flex ' src="https://cdn.prod.website-files.com/66f6bb2a752e9f87ba2eb126/66fea072dc084e284d0758f2_asset-hero-text.svg" alt="" />
                    <div className='md:hidden flex flex-col text-center text-4xl font-medium'>

                    <h1 >HERITAGE CRAFTED </h1>
                    
                     <h1> FOR MODERN SPACES</h1>
                    </div>
                </div>
                <div className="pt-8 h-hero-cel md:h-hero bg-slate-500 overflow-hidden">

                    <img
                        className="w-full h-full md:object-cover md:object-bottom"
                        src="/img/hero.jpeg"
                        alt="image"
                    />


                </div>

            </div>


            


        </>
    )
}
