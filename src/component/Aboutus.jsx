import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pt-24 md:pt-40 bg-[#efebe3]">

      {/* 🔹 TOP SECTION */}
      <div className="text-center mb-16 md:mb-30">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl
                     text-green-950 font-bold tracking-tighter"
          data-aos="fade-up"
        >
          HOW IT WORKS
        </h1>

        <p
          className="text-green-900 text-base sm:text-lg md:text-xl
                     pt-4 md:pt-8 tracking-wider"
          data-aos="fade-up"
        >
          Rebuilt for simplicity & speed, so you can spend time listening to great podcasts
        </p>
      </div>

      {/* 🔹 SECOND ROW */}
      <div className="flex flex-col lg:flex-row
                      gap-12 md:gap-20
                      justify-around px-6">

        {/* LEFT COLUMN */}
        <div className="flex-1">

          {/* STEP 01 */}
          <div
            className="flex border-b border-gray-500
                       gap-x-6 md:gap-x-10
                       mb-12 md:mb-20
                       pb-6 md:pb-8
                       min-h-[160px] md:min-h-[240px]"
            data-aos="fade-up"
          >
            <div className="p-4 w-24 font-semibold text-green-900">
              Step 01
            </div>

            <div className="text-green-900">
              <h1 className="text-2xl md:text-4xl font-bold pb-2 md:pb-4">
                PLANNING
              </h1>
              <p className="text-base md:text-xl">
                Align performance tracking with the overarching and understand
                the client's vision, needs, and performance
              </p>
            </div>
          </div>

          {/* STEP 02 */}
          <div
            className="flex border-b border-gray-500
                       gap-x-6 md:gap-x-10
                       mb-12 md:mb-20
                       pb-6 md:pb-8
                       min-h-[160px] md:min-h-[240px]"
            data-aos="fade-up"
          >
            <div className="p-4 w-24 font-semibold text-green-900">
              Step 02
            </div>

            <div className="text-green-900">
              <h1 className="text-2xl md:text-4xl font-bold pb-2 md:pb-4">
                ESTIMATING
              </h1>
              <p className="text-base md:text-xl">
                Align performance tracking with the overarching and understand
                the client's vision, needs, and performance
              </p>
            </div>
          </div>

          {/* STEP 03 */}
          <div
            className="flex gap-x-6 md:gap-x-10
                       pb-6 md:pb-10
                       min-h-[160px] md:min-h-[240px]"
            data-aos="fade-up"
          >
            <div className="p-4 w-24 font-semibold text-green-900">
              Step 03
            </div>

            <div className="text-green-900">
              <h1 className="text-2xl md:text-4xl font-bold pb-2 md:pb-4">
                BUILDING
              </h1>
              <p className="text-base md:text-xl">
                Align performance tracking with the overarching and understand
                the client's vision, needs, and performance
              </p>
            </div>
          </div>

        </div>

        {/* 🔹 RIGHT COLUMN (IMAGE) */}
        <div className="flex-1 flex justify-center items-start" data-aos="fade-up">
          <img
            src="/src/assets/img5.jpg"
            alt="How it works"
            className="
              w-full max-w-md md:max-w-lg
              h-auto
              object-cover
            "
          />
        </div>

      </div>
    </div>
  );
};

export default Aboutus;
