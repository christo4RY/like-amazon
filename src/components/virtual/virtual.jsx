import React from "react";
import ReactCompareImage from "react-compare-image";
import shade from "./../../assets/shade.png";
import before from "./../../assets/before.png"
import after from "./../../assets/after.png"
const virtual = () => {
  return (
    <div className="flex justify-between my-28 w-[80%] mx-auto">
      <div>
        <h1 className=" uppercase text-3xl font-bold">virtual try-on</h1>
        <h3 className="my-9 leading-10 text-2xl">
          NEVER BUY THE WRONG <br /> SHADE AGAIN!
        </h3>
        <div>
          <h5 className=" text-[1.6rem] font-bold">Try Now!</h5>
          <img src={shade} className=" w-40" alt="" />
        </div>
      </div>
      <div className="w-[48%]">
        <ReactCompareImage leftImage={before} rightImage={after} />;
      </div>
    </div>
  );
};

export default virtual;
