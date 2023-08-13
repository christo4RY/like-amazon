import React from "react";
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductsData } from "../../data/products";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./carousel.css";

const carousel = () => {

  return (
    <div className=" relative">
      <Swiper
      
       modules={[Navigation]}
       spaceBetween={40}
       slidesPerView={3}
       navigation
      >
        {ProductsData?.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="p-4 bg-white flex rounded-lg relative overflow-hidden">
                <div>
                  <h1 className=" text-xl font-semibold">{product.name}</h1>
                  <p className=" text-xs">{product.detail}</p>
                  <h3 className=" font-bold my-1 leading-loose text-3xl">
                    {product.price}$
                  </h3>
                  <button className=" py-1 px-2.5 border border-gray-500 rounded-2xl text-[0.65rem]">
                    Shop now
                  </button>
                </div>
                <div className=" absolute bottom-10 h-28 right-3   -rotate-[20deg]">
                    <img src={product.img} className="w-[7rem] " alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default carousel;
