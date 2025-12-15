import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import RowItem from "./RowItem";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const items = [
    { number: "01", title: "OUTDOOR" },
    { number: "02", title: "OFFICE ROOM" },
    { number: "03", title: "LIVING ROOM" },
    { number: "04", title: "BED ROOM" },
    { number: "05", title: "KITCHEN ROOM" },
  ];

  return (
    <div className="pt-24 md:pt-40 bg-green-950">
      {/* HEADING */}
      <div className="text-center mb-16 md:mb-30">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl
                     text-white font-bold tracking-tighter"
          data-aos="fade-up"
        >
          OUR PROJECTS
        </h1>

        <p
          className="text-white text-base sm:text-lg md:text-xl
                     pt-4 md:pt-8 tracking-wider"
          data-aos="fade-up"
        >
          Create a spacious and connected living area by integrating the kitchen,
          dining, and living rooms.
        </p>
      </div>

      {/* ROW ITEMS */}
      <div className="flex justify-center px-4 md:px-0">
        <div className="w-full max-w-full">
          {items.map((item, index) => (
            <RowItem
              key={index}
              number={item.number}
              title={item.title}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
