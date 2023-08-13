import React from "react";
import logo from "./../../assets/logo.png";
import { GrLocation } from "react-icons/gr";
import { BsTelephone, BsLink45Deg } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
const footer = () => {
  return (
    <>
      <div className="flex justify-between border-0 border-t border-gray-100 p-5 px-8">
        <div className="flex items-start space-x-4">
          <img src={logo} className="w-10" alt="" />
          <h1 className=" font-bold">amazon</h1>
        </div>
        <div>
          <h1 className="text-xl text-gray-800 font-medium">Contact Us</h1>
          <ul className="mt-3">
            <li className="flex space-x-5 items-center">
              <GrLocation className="text-xl" />
              <p className=" text-xs text-slate-700 my-2">
                111 north avenue Orlando, FL 32801
              </p>
            </li>
            <li className="flex space-x-5 items-center">
              <BsTelephone className="text-xl" />
              <p className=" text-xs text-slate-700 my-2">352-306-4415</p>
            </li>
            <li className="flex space-x-5 items-center">
              <AiOutlineMail className="text-xl" />
              <p className=" text-xs text-slate-700 my-2">support@amazon.com</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-gray-800 font-medium">Account</h1>
          <ul className="mt-3">
            <li className="flex space-x-5 items-center">
              <HiOutlineLogin className="text-xl" />
              <p className="text-xs text-slate-700 my-2">Sign in</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-gray-800 font-medium">Company</h1>
          <ul className="mt-3">
            <li className="flex space-x-5 items-center">
              <FiUsers className="text-xl" />
              <p className="text-xs text-slate-700 my-2">About us</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-gray-800 font-medium">Resources</h1>
          <ul className="mt-3">
            <li className="flex space-x-5 items-center">
              <BsLink45Deg className="text-xl" />
              <p className="text-xs text-slate-700 my-2">
                Safety Privacy & Terms
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-3 mb-2">
        <h3 className="text-center text-[0.7rem] text-gray-700 ">
          Copyright ©2022 by Amazon, Inc. <br />
          All rights reserved.
        </h3>
      </div>
    </>
  );
};

export default footer;
