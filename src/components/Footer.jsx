import React from 'react'

const Footer = () => {
  return (
    <>
      <section className='h-auto bg-custom-footer mt-36 text-white'>
        <div className='
        
        md:h-96 m-5 
        flex 
        flex-col
        md:flex-row 
        gap-1 
        justify-between
        mb-12 md:mb-0 
        md:pt-10
        '>
          <div className='h-full md:w-midImg flex md:flex-col gap-5 md:gap-0 mt-5 md:mt-0 mb-5 mb-0'>
            <div className='pb-4 '>
              <h1 className='text-custom-input pb-2'>Enquire</h1>
              <p>info@modohouse.com</p>
              <p>+39 335 6385532</p>
            </div>
            <div >
              <h1 className='text-custom-input pb-2'>Press</h1>
              <p>press@molohouse.com</p>

            </div>
          </div>
          <div className='flex'>
          <div className=' h-full w-36 flex flex-col gap-2'>
            <h1 className='text-custom-input '>Browse</h1>
            <p>Products</p>
            <p>About</p>
            <p>Next</p>
            <p>Contact</p>
          </div>
          <div className='h-full w-36 flex flex-col gap-2'>
            <h1 className='text-custom-input '>Legal</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookie Policy</p>
          </div>
          <div className='h-full w-32'></div>
          <div className='h-full w-36 flex flex-col gap-2'>
            <h1 className='text-custom-input '>Follow Us</h1>
            <p>Instagram</p>
            <p>Pinterest</p>
            <p>LinkedIn</p>
          </div>
          </div>

        </div>
        <div className=' md:h-56  ml-5 mr-5 flex flex-col-reverse  md:flex-row gap-2 pb-10'>
          <div className='md:w-2/3   flex items-end'>
            <img className='md:w-5/6 ' src="img/modo.svg" alt="" />
          </div>
          <div className='hidden md:block w-1/6  content-end text-center '>© 2025</div>
          <div className='md:w-2/3  justify-end flex flex-col gap-4 '>
            <div className=' md:w-96 '>
              Sign up for the latest updates on new collections,
              design insights, and exclusive invitations.</div>
            <div className='flex  md:justify-left gap-2 mb-28 md:mb-0'>

              <input type="text" className='w-full md:w-3/6 h-11 bg-custom-input placeholder:pl-5' placeholder='Enter your email address' />
              <button className='border-solid border-2 h-11 w-32 text-white'>Sing Up</button>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Footer