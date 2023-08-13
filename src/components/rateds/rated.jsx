import React from "react";
import testimonialHero from "./../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { TestimonialsData } from "../../data/testimonials";
const rated = () => {
  return (
    <>
      <div className="flex items-end px-3 mb-5 ">
        <div className=" w-[25%]">
          <h1 className="font-bold uppercase text-3xl leading-loose mb-2">
            Top rated
          </h1>
          <p className=" font-light text-sm">
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </p>
        </div>
        <div className="w-[55%] flex justify-center">
          <img className=" w-[400px]" src={testimonialHero} alt="" />
        </div>
        <div className=" w-[20%] text-end">
          <h1 className=" text-3xl font-bold uppercase leading-loose mb-2">
            100k
          </h1>
          <p className="font-light text-sm">HAPPY CUSTOMERS WITH US</p>
        </div>
      </div>
      <div className="mb-5 w-full">
        <h1 className=" uppercase text-3xl font-bold mb-5 text-center">reviews</h1>
        <div>
          <Swiper
          className=" w-[100%] h-[24rem] p-[2.5rem]"
            spaceBetween={30}
            slidesPerView={3}
          >
            {TestimonialsData.map((person, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className=" p-6 px-10 bg-white rounded-lg relative ">
                    <img src={person.image} alt="" className="w-14 absolute z-[99] -top-[15%] left-[42%]"/>
                    <h5 className="text-[0.8rem] text-gray-500 text-center pt-3">
                      {person.comment}
                    </h5>
                    <hr className="my-4" />
                    <h3 className="text-sm text-center">{person.name}</h3>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default rated;
