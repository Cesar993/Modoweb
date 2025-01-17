import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='h-auto bg-custom-footer mt-36 '>
     <div className='bg-orange-100 h-96 m-10 flex'> 
        <div className='bg-red-300 h-full w-1/2'>
            <div className='bg-slate-500 h-full w-1/5'>info1</div>
        </div>
        <div className='bg-red-500 h-full w-1/2 flex gap-1 justify-center'>
        <div className='bg-slate-500 h-full w-1/5'>info1</div>
        <div className='bg-slate-500 h-full w-1/5'>info1</div>
        <div className='bg-slate-500 h-full w-1/5'>info1</div>
        </div>

     </div>
     <div className='bg-orange-500 h-56  ml-10 mr-10 flex gap-2'> 
        <div className='w-1/3 bg-zinc-500'>
            <img src="https://cdn.prod.website-files.com/66f6bb2a752e9f87ba2eb126/6703c8cf28eb3be687babfd8_logo-molo--large.svg" alt="" />
        </div>
        <div className='w-1/3 bg-zinc-500'>2025</div>
        <div className='w-1/3 bg-zinc-500'>sing up</div>
     </div>
    </section>
    </>
  )
}

export default Footer