import React, { useState, useEffect } from 'react'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      /* posicion del scroll */
      const currentScrollY = window.scrollY;
      /* console.log(currentScrollY) */
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      }
      else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    };

    window.addEventListener('scroll', handleScroll);


    return () =>
      window.removeEventListener('scroll', handleScroll)

  }, [lastScrollY])


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/*  <nav
        className='
    h-20 
    border-b-4 
    flex
    flex-col 
    md:flex-row 
    gap-6 
    items-center 
    pt-1 
    md:pl-5 
    md:pr-5 
    font-medium 
    md:text-custom-nav
    text-2xl
    '> */}
      <nav
        className={`fixed top-0 left-0 w-full
        h-20 
     
    flex
    flex-col 
    md:flex-row 
    gap-6 
    items-center 
    pt-1 
    md:pl-5 
    md:pr-5 
    font-medium 
    md:text-custom-nav
    text-2xl
    
    bg-custom-page
    transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* Botón para dispositivos móviles */}
        <div className='flex justify-center  pt-5 w-full md:hidden '>
          <button className='text-2xl  w-12' onClick={toggleMenu}>{menuOpen ? '✖' : '☰'}</button>
          <img
            className="h-10 object-contain   w-96 mr-9"
            src="/img/navModo.svg"            
            alt="Logo"
          />
        </div>

        {/* Contenido del menú */}
        <div
          className={` w-full flex-col md:flex md:flex-row items-center gap-6 mt-3 md:mt-0 ${menuOpen ? 'flex' : 'hidden'
            }`}
        >
          {/* Menú izquierdo */}
          <div className="bg-custom-page w-full h-screen absolute md:static md:h-auto md:w-auto flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <a href="">Products</a>
            <a href="">About</a>
            <a href="">News</a>
          </div>

        </div>


        <div className='  w-full  justify-center h-5 hidden md:flex '>
          <img src="/img/navModo.svg" alt="" />
        </div>
        <div className=' w-full  justify-end gap-10 hidden md:flex '>
          <a href="">Contact</a>
          <a href="">EN</a>
        </div>

      </nav>
    </>
  )
}

export default Nav