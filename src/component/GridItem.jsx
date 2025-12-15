import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const GridItem = ({ image, title, price }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  return (
    <div
      className="group cursor-none border border-gray-300
                 p-3 sm:p-4"
      data-aos="fade-up"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden bg-white">
        <img
          src={image}
          alt={title}
          className="w-full
                     h-48 sm:h-56
                     object-cover
                     transition-transform duration-300
                     group-hover:scale-110"
        />

        {/* CUSTOM CURSOR (DESKTOP ONLY) */}
        {show && (
          <div
            className="hidden md:flex
                       pointer-events-none absolute z-20
                       items-center justify-center
                       w-14 h-14 md:w-16 md:h-16
                       rounded-full
                       bg-yellow-400 text-black
                       transition-transform duration-100"
            style={{
              left: pos.x - 32,
              top: pos.y - 32,
            }}
          >
            <FiArrowUpRight size={26} />
          </div>
        )}
      </div>

      {/* TEXT */}
      <h2 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">
        {title}
      </h2>
      <p className="text-base sm:text-lg font-bold text-green-900">
        {price}
      </p>
    </div>
  );
};

export default GridItem;
