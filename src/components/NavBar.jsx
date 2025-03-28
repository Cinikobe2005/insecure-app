import React from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import CloseHamburger from "../assets/images/icon-close.svg";
import line from "../assets/images/bg-pattern-mobile-nav.svg";
import { useState } from "react";
const NavBar = () => {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  return (
    <>
      <nav className="container  mx-auto p-4 flex font-family-karla uppercase justify-between items-center font-[700] text-sm">
        <img src={logo} alt="" className="cursor-pointer" />
        <ul className="space-x-4 items-center hidden md:flex">
          <li className="cursor-pointer hover:text-[#2B272F] text-[#837D87]">
            How we work
          </li>
          <li className="cursor-pointer hover:text-[#2B272F] text-[#837D87]">
            Blog
          </li>
          <li className="cursor-pointer hover:text-[#2B272F] text-[#837D87]">
            Account
          </li>
          <li className="outline-1 cursor-pointer outline-[#2B272F] hover:bg-[#2B272F] hover:text-white py-3 px-9">
            View Plans
          </li>
        </ul>
        <img
          src={hamburger}
          alt=""
          className="md:hidden cursor-pointer"
          onClick={() => setOffCanvasOpen(true)}
        />
      </nav>

      <div
        className={`fixed z-99 text-2xl top-0 right-0 h-full w-full bg-[#2B272F] text-center text-white shadow-lg transform transition-transform duration-300 ${
          offCanvasOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white py-6 px-4">
          <img src={logo} alt="" />
          <img
            src={CloseHamburger}
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setOffCanvasOpen(false)}
          />
        </div>
        <div className=" flex-col">
          <ul className="mt-5 space-y-9 p-4">
            <li className="cursor-pointer ">How we work</li>
            <li className="cursor-pointer ">Blog</li>
            <li className="cursor-pointer ">Account</li>
            <li className="outline-2 cursor-pointer outline-white  hover:text-white py-3 px-8 ">
              View Plans
            </li>
          </ul>
          <img src={line} alt="" className="w-full mt-[50%]" />
        </div>
      </div>

      {offCanvasOpen && (
        <div
          className="fixed inset-0 "
          onClick={() => setOffCanvasOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
