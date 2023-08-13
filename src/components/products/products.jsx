import React, { useState } from "react";
import plane from "./../../assets/plane.png";
import { ProductsData } from "../../data/products";
import "./products.css";
import {motion} from "framer-motion"
const products = () => {
  const [products, setProducts] = useState(ProductsData);
  const filterProduct = (type) => {
    setProducts(ProductsData.filter((product) => product.type == type));
  };
  return (
    <div className="w-[80%] mb-20 mx-auto">
      <div className="w-full flex justify-center mb-10">
        <div className="relative">
          <img src={plane} alt="" className=" w-32 absolute -left-24 -top-20" />
          <h1 className="font-bold text-3xl">Our Feature Products</h1>
        </div>
      </div>
      <div className="flex  h-96">
        <div className="w-[25%]">
          <ul className=" text-xl">
            <li
              onClick={() => setProducts(ProductsData)}
              className=" py-4 hover:text-pink-500 cursor-pointer"
            >
              All
            </li>
            <li
              onClick={() => filterProduct("skin care")}
              className=" py-4 hover:text-pink-500 cursor-pointer"
            >
              Skin Care
            </li>
            <li
              onClick={() => filterProduct("conditioner")}
              className=" py-4 hover:text-pink-500 cursor-pointer"
            >
              Conditioner
            </li>
            <li
              onClick={() => filterProduct("foundation")}
              className=" py-4 hover:text-pink-500 cursor-pointer"
            >
              Foundation
            </li>
          </ul>
        </div>
        <div className="h-full products flex flex-wrap w-[100%] overflow-y-auto gap-x-14 gap-8">
          {products.map((product, i) => {
            return (
              <div className="p-4 w-[28%] bg-white flex rounded-2xl relative overflow-hidden ">
                <div>
                  <h1 className=" text-xl font-semibold">{product.name}</h1>
                  <p className=" text-xs">{product.detail}</p>
                  <h3 className=" font-bold my-0.5 leading-relaxed text-3xl">
                    {product.price}$
                  </h3>
                  <button className=" py-1 px-2.5 border border-gray-500 rounded-2xl text-[0.65rem]">
                    Shop now
                  </button>
                </div>
                <div className=" absolute bottom-6 h-28 right-3   -rotate-[20deg]">
                  <img src={product.img} className="w-[7rem] " alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default products;
