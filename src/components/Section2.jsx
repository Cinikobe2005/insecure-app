import React from "react";
import image1 from "../assets/images/icon-snappy-process.svg";
import image2 from "../assets/images/icon-affordable-prices.svg";
import image3 from "../assets/images/icon-people-first.svg";

const Section2 = () => {
  const data = [
    {
      id: 1,
      image: image1,
      heading: "Snappy Process",
      subText:
        "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
    },
    {
      id: 2,
      image: image2,
      heading: "Affordable Prices",
      subText:
        "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      id: 3,
      image: image3,
      heading: "People First",
      subText:
        "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    },
  ];

  return (
    <section className="container w-full mx-auto px-3 py-20  flex flex-col font-[kara]">
      <div className="bg-gray-500 h-[0.5px] w-[150px] lg:w-[180px] mx-auto lg:ml-0"></div>

      <h1 className="py-10 text-center lg:text-start text-5xl lg:text-7xl font-semibold">
        We're different
      </h1>

      <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-2 pt-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <img src={item.image} alt={item.heading} className="mb-4" />
            <h2 className="text-3xl font-semibold py-3">{item.heading}</h2>
            <p className="text-gray-400 mt-2 px-6 lg:pl-0 text-lg lg:text-xl">
              {item.subText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
