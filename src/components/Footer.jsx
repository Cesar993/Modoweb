import React from 'react'

const Footer = () => {
  return (
    <>
      <section className='h-auto bg-custom-footer mt-36 text-white'>
        <div className='bg-orange-100 h-96 m-5 flex'>
          <div className='bg-red-300 h-full w-1/2  mt-11'>
            <div className='bg-slate-500 h-full w-1/5 '>
              <div className='pb-4'>
                <h1 className='text-custom-input pb-2'>Enquire</h1>
                <p>info@modohouse.com</p>
                <p>+39 335 6385532</p>
              </div>
              <div >
                <h1 className='text-custom-input pb-2'>Press</h1>
                <p>press@molohouse.com</p>

              </div>
            </div>
          </div>
          <div className='bg-red-500 h-full w-1/2 flex gap-1 justify-end  mt-11 mr-20'>
            <div className='bg-slate-500 h-full w-1/6 flex flex-col gap-2'>
              <h1 className='text-custom-input '>Browse</h1>
              <p>Products</p>
              <p>About</p>
              <p>Next</p>
              <p>Contact</p>
            </div>
            <div className='bg-slate-500 h-full w-1/6 flex flex-col gap-2'>
            <h1 className='text-custom-input '>Legal</h1>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Cookie Policy</p>
            </div>
            <div className='bg-slate-500 h-full w-1/6'></div>
            <div className='bg-slate-500 h-full w-1/6 flex flex-col gap-2'>
            <h1 className='text-custom-input '>Follow Us</h1>
              <p>Instagram</p>
              <p>Pinterest</p>
              <p>LinkedIn</p>
              </div>
          </div>

        </div>
        <div className='bg-orange-500 h-56  ml-5 mr-5 flex gap-2 pb-10'>
          <div className='w-2/3  bg-zinc-500 '>
            <img className='w-5/6  items-center' src="img/modo.svg" alt="" />
          </div>
          <div className='w-1/6 bg-zinc-500 content-end text-center'>© 2025</div>
          <div className='w-2/3 bg-zinc-500 justify-end flex flex-col gap-4'>
            <div className='bg-gray-400 md:w-96'>
              Sign up for the latest updates on new collections,
              design insights, and exclusive invitations.</div>
            <div className='flex bg-slate-800 justify-center gap-2 '>

              <input type="text" className='w-3/6 h-11 bg-custom-input placeholder:pl-5' placeholder='Enter your email address' />
              <button className='border-solid border-2 h-11 w-32 text-white'>Sing Up</button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Footer