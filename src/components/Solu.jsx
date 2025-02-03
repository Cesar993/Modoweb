import React from 'react'

const Solu = () => {
    return (
        <>
            <section className='flex flex-col md:flex-row  pt-10 md:pl-5  '>
                <div className=' w-56  mr-3 ml-5 md:ml-0 font-medium'>Our soultions</div>
                <div className='m-5 md:m-0 sm:w-full content-end md:w-midImg md:pr-20  '> 
                    <img className='sm:96 ' src="/img/solu.jpg" alt="" />
                    </div>
                <div className=' md:w-mid  flex items-center pl-5 md:pl-0'>
                    <div className='flex flex-col h-auto w-full  gap-10 text-xl'>
                        <h1 className='text-4xl'>Door Systems</h1>
                        <h2>A range of modern door solutions that combine minimalist design with practical functionality, enhancing any interior space.</h2>
                        <div className='flex flex-row w-auto gap-5'>
                            <div className='flex flex-col justify-start gap-5 '>
                                <h2>LINEA</h2>
                                <h2>TERRA</h2>
                                <h2>FORMA</h2>

                            </div>
                            <div className='flex flex-col justify-start gap-5 '>
                                <h3>System</h3>
                                <h3>Hinged Doors</h3>
                                <h3>Swing Doors</h3>
                            </div>


                        </div>
                        <button className='border-solid border-black border-2 h-11 w-52 text-black'>Explore our products</button>
                    </div>
                </div>
                <div className=' w-56  mr-3'></div>
            </section>

            
            <section className='flex flex-col md:flex-row  pt-10 md:pl-5 '>
                <div className=' w-56  mr-3 ml-5 md:ml-0 font-medium '>Our soultions</div>
                <div className='m-5 md:m-0 md:hidden sm:w-full content-end md:w-midImg md:pl-20   '> <img className='sm:96 ' src="/img/img-front.avif" alt="" /></div>

                <div className=' md:w-mid  flex items-center m-5 md:m-0 '>
                    <div className='flex flex-col h-auto w-full  gap-10 text-xl'>
                    <h1 className='text-4xl'>Modular Interior Systems</h1>
                    <h2>Flexible and customizable storage and partitioning solutions, designed to adapt to a variety of environments.</h2>
                        <div className='flex flex-row w-auto gap-5'>
                            <div className='flex flex-col justify-start gap-5 '>
                            <h2>LUMINE</h2>
                            <h2>ORRIZONTE</h2>

                            </div>
                            <div className='flex flex-col justify-start gap-5 '>
                            <h3>Modular System</h3>
                            <h3>Wall-mounted shelving</h3>
                            </div>


                        </div>
                        <button className='border-solid border-black border-2 h-11 w-52 text-black'>Explore our products</button>
                    </div>
                </div>
                <div className='hidden md:block sm:w-full content-end md:w-midImg md:pl-20   '> <img className='sm:96 ' src="/img/img-front.avif" alt="" /></div>
                <div className=' w-56  mr-3'></div>
            </section>




        </>
    )
}

export default Solu