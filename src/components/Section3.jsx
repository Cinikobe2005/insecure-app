import React from "react";
import section from "../assets/images/bg-pattern-how-we-work-desktop.svg";
import Section2 from "../assets/images/bg-pattern-how-we-work-mobile.svg";

const Section3 = () => {
  return (
    <section className="container mx-auto font-primary mt-20 mb-35 relative px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between bg-[#2b2237] text-white py-20  px-10 md:py-20 md:px-20  items-center relative">
        <img
          src={section}
          alt=""
          className="absolute top-0 right-0 z-0 hidden md:block md:object-cover h-full"
        />
        <img
          src={Section2}
          alt=""
          className="absolute md:hidden top-0 right-0"
        />
        <h1 className="text-[40px] md:text-[60px] font-normal text-center md:w-[39%] md:text-left leading-10 md:leading-15">
          Find out more about how we work
        </h1>
        <p className="outline-2 cursor-pointer outline-white hover:bg-white hover:text-[#2B272F] py-3 px-10 font-family-karla uppercase font-bold text-[16px] md:text-[18px] mt-6 md:mt-0 relative z-20">
          How we work
        </p>
      </div>
    </section>
  );
};

export default Section3;
