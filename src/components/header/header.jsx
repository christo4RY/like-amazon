import React from "react";
import logo from "../../assets/logo.png";
import { BsMinecartLoaded } from "react-icons/bs";
const header = () => {
  return (
    <div className="flex justify-between mt-8 items-center">
      {/* logo */}
      <div className="flex space-x-4 items-center">
        <img src={logo} className=" w-10 h-10" alt="amazon" />
        <h1 className=" font-bold">amazon</h1>
      </div>
      {/* navbar menu */}
      <div className="flex items-center justify-end">
        <ul className="flex  space-x-8 items-center justify-end">
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Scales</li>
          <li>ENG</li>
          <li className=" w-[17%]">
            <input
              type="text"
              placeholder="Search"
              className=" p-2 rounded-md  text-sm w-full "
            />
          </li>
          <li>
            <BsMinecartLoaded className=" h-6 w-6" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
