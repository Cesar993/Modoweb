import React from 'react';
import { datosCarr } from '../Datos/datos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container ml-1 mr-7 pt-20 ">
      <h1 className='ml-4 pb-9 font-medium '>Our Products</h1>
      <Slider {...settings}>
        {datosCarr.map((item) => (
          <div
            key={item.id}
            className=" h-84 flex-shrink-0 p-1 "
          >
            <div
              className="
                h-60 
                w-full 
                ml-4
                
              "
            >
              <img
                className="object-cover h-full w-full "
                src={item.img}
                alt=""
              />
            </div>
            <div className=' flex gap-2'>
            <h1 className="align-text-bottom pt-4 font-medium ml-4">
              {item.nombre}
            </h1>
            <h2 className='pt-4'>{item.sub}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;

