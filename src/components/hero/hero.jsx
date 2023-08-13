import React from "react";
import Hero from "./../../assets/hero.png";
import "./hero.css";
import { FaShoppingBag } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const hero = () => {
  return (
    <div className="flex  justify-center items-start px-2">
      {/* left content */}
      <div className=" w-[25%] flex flex-col space-y-32 mt-10">
        <div className=" font-semibold text-2xl">
          <h1>SKIN</h1>
          <h1>PROTECTION</h1>
          <h1>CREAM</h1>
        </div>
        <div>
          <h1 className="text-4xl font-bold leading-relaxed ">
            Trendy <br /> Collection{" "}
          </h1>
          <h5 className=" text-md">
            Seedily say has suitable <br /> disposal and boy. <br /> Exercise
            joy man children <br /> rejoiced.
          </h5>
        </div>
      </div>
      {/* middle content */}
      <div className="w-[50%] flex relative  -top-2 left-0 justify-center">
        <motion.div
          initial={{ y: "-2rem" }}
          whileInView={{ y: "0rem" }}
          transition={{ duration: 3, type: "spring" }}
          className="hero-container"
        />
        <motion.div
          initial={{ y: "2rem" }}
          whileInView={{ y: "0rem" }}
          transition={{ duration: 3, type: "spring" }}
          className=" relative z-20 w-[480px]"
        >
          <img src={Hero} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: "-2rem" }}
          whileInView={{ x: "0rem" }}
          transition={{ duration: 3, type: "spring" }}
          className="flex space-x-4  absolute z-30 -right-9 bottom-[24%]"
        >
          <div className="p-3 border-[6px] bg-gray-100 h-14 border-gray-800 flex items-center justify-center w-14 rounded-full">
            <FaShoppingBag className="text-3xl" />
          </div>
          <div className=" space-x-9 p-2.5 hero-signup  bg-gray-50 rounded-2xl self-start flex">
            <h3 className=" text-xs font-light ">
              Best Signup <br />
              Offers
            </h3>
            <div className=" border border-teal-500 w-9 p-2 h-9 flex items-center justify-center rounded-full">
              <HiArrowLongRight className=" text-lg" />
            </div>
          </div>
        </motion.div>
      </div>
      {/* right content */}
      <div className="w-[25%] items-end mt-10  flex flex-col space-y-36">
        <div>
          <h1 className="text-end text-4xl font-bold">1.5m</h1>
          <h5 className=" font-thin">Monthly traffic</h5>
        </div>
        <div>
          <h1 className="text-end text-4xl font-bold">100k</h1>
          <h5 className=" font-thin">Happy Customers</h5>
        </div>
      </div>
    </div>
  );
};

export default hero;
