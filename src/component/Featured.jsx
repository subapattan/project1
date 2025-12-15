import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import GridItem from "./GridItem";

// Images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img5.jpg";

const Featured = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const rowItems = [
    { price: "$30.00", title: "Modern Chair", image: img1 },
    { price: "$30.00", title: "Modern Chair", image: img2 },
    { price: "$30.00", title: "Modern Chair", image: img3 },
    { price: "$30.00", title: "Modern Chair", image: img4 },
    { price: "$30.00", title: "Modern Chair", image: img5 },
    { price: "$30.00", title: "Modern Chair", image: img6 },
  ];

  return (
    <div className="pt-16 md:pt-20 bg-gray-100">
      {/* HEADING */}
      <div className="text-center mb-14 md:mb-20 px-4">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl
                     text-green-950 font-bold tracking-tighter"
          data-aos="fade-up"
        >
          FEATURED PRODUCTS
        </h1>

        <p
          className="text-green-950 text-base sm:text-lg md:text-xl
                     pt-4 md:pt-8 tracking-wider"
          data-aos="fade-up"
        >
          Blandit makes products aligned with your amazing interior design
          customized with elite taste.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {rowItems.map((item, index) => (
            <GridItem
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
