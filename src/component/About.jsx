import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="
        flex flex-col md:flex-row
        bg-gray-100
        gap-10
        justify-between
        items-center
        py-16 md:py-30
        px-4 md:px-0
      "
    >
      {/* LEFT COLUMN */}
      <div className="flex-1 md:ml-5" data-aos="fade-up">
        <p
          className="
            text-3xl sm:text-4xl md:text-5xl
            text-green-950
            font-bold
          "
          data-aos="fade-up"
        >
          VIRUDO IS A TEAM OF ENTHUSIASTS PROVIDING A HIGH-QUALITY SOLUTION FOR ALL
          YOUR INTERIOR WORK
        </p>

        <p
          className="
            mt-6 md:mt-10
            text-green-950
            text-base sm:text-lg md:text-xl
          "
          data-aos="fade-up"
        >
          Best to get design with open-plan workstations and communal areas to
          encourage teamwork and creativity and maximizing natural light with
          large windows and reflective surfaces.
        </p>

        {/* BUTTON */}
        <button
          className="
            rounded-full
            bg-amber-400
            py-3
            w-52 sm:w-60
            mt-6
            flex items-center justify-center
            text-green-950
            relative overflow-hidden
          "
          data-aos="fade-up"
        >
          <div className="button-hover-animate w-full text-center">
            {/* Original Content */}
            <span className="button-content current-text text-base sm:text-lg font-bold flex items-center justify-center gap-2">
              ABOUT US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 7l-10 10m0-10h10v10"
                />
              </svg>
            </span>

            {/* Hover Content */}
            <span className="button-content new-text text-base sm:text-lg font-bold flex items-center justify-center gap-2">
              ABOUT US
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 7l-10 10m0-10h10v10"
                />
              </svg>
            </span>
          </div>
        </button>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 relative w-full" data-aos="fade-up">
        {/* IMAGE */}
        <img
          src="./src/assets/img5.jpg"
          className="
            w-full
            h-64 sm:h-80 md:h-[400px]
            object-cover
            rounded-lg
          "
          alt="About image"
        />

        {/* CENTER PLAY BUTTON */}
        <button className="absolute inset-0 flex items-center justify-center cursor-pointer">
          <span
            className="
              bg-white
              text-green-950
              font-bold
              text-sm sm:text-base md:text-lg
              px-4 sm:px-6
              py-2 sm:py-3
              rounded-full
              shadow-lg
              flex items-center gap-3
              transition duration-300
            "
          >
            <FaPlay className="text-green-950 text-lg sm:text-xl" />
            Watch Demo
          </span>
        </button>
      </div>
    </div>
  );
};

export default About;
