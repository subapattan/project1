import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Trends = () => {
  return (
    <div className="max-w-full py-30 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* COLUMN 1 */}
        <div className="flex flex-col gap-6 px-4">
          <h1
            className="text-4xl md:text-6xl text-green-950 font-bold"
            data-aos="fade-up"
          >
            KEEP UP TO DATE WITH NEW TRENDS
          </h1>

          {/* IMAGE */}
          <div
            className="relative group pt-10 cursor-pointer overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src="./src/assets/img3.jpg"
              alt="trend"
              className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* FLOAT CARD — BOTTOM CENTER */}
            <div
              className="
                absolute
                bottom-4
                
                left-1/2
                -translate-x-1/2
                w-[90%]
                bg-yellow-400
                p-4 md:p-5
                flex justify-between items-start gap-4
              "
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-xl font-bold text-gray-500">
                  JANUARY 12, 2025
                </h2>
                <p className="text-base md:text-2xl text-green-950 group-hover:text-white">
                  The Art of Comfort: Choosing the perfect sofa for your Living Room
                </p>
              </div>

              <FiArrowUpRight className="text-white text-3xl md:text-4xl transition-all group-hover:scale-150" />
            </div>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-6 px-4">

          <div data-aos="fade-up">
            <p className="md:pl-60 text-base md:text-xl font-semibold">
              Blandit blog digest based on interior design, layout, materials,
              home decor requirements etc.
            </p>

            
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between items-start p-6 md:p-10 bg-green-950 group cursor-pointer"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-xl font-bold text-gray-400">
                  JANUARY 12, 2025
                </h2>
                <p className="text-lg md:text-2xl text-gray-100 group-hover:text-yellow-400">
                  The Art of Comfort: Choosing the perfect sofa for your Living Room
                </p>
              </div>

              <FiArrowUpRight className="text-white text-3xl md:text-4xl transition-all group-hover:scale-150" />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Trends;
