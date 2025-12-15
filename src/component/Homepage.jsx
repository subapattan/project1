// Homepage.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowUpRight } from "react-icons/fi";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

const Homepage = () => {
  const isMobile = useScreenSize();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row h-full md:h-screen m-0">

        {/* Top-right hamburger */}
        <a href="#Homepage">
          <div className="absolute top-2 right-2 md:top-6 md:right-6 w-15 h-15 bg-yellow-400 rounded-full flex flex-col justify-center items-center gap-1 shadow-md z-50">
            <div className="w-8 h-1 bg-green-950"></div>
            <div className="w-8 h-1 bg-green-950"></div>
          </div>
        </a>

        {/* Left Column */}
        <div className="w-full md:w-1/2 bgc p-6 flex flex-col justify-center">
          <h2 className="text-5xl italic sm:text-4xl md:text-5xl text-white font-semibold mb-2">
            <a href='#Homepage'>Virudo<span className='text-yellow-400 p-2'>.</span></a>
          </h2>

          <p className='text-white sm:text-3xl md:text-5xl lg:text-6xl mt-40 font-bold' data-aos={isMobile ? 'fade-up' : 'fade-right'}>
            COMFORT IN THE REFRESHING INTERIOR.
          </p>

          <p className='text-gray-400 font-bold text-xl mt-10' data-aos={isMobile ? 'fade-up' : 'fade-right'}>
            Rebuild for simplicity & speed, so you can spend time listening to great podcasts
          </p>

          {/* LET'S TALK Button (bigger width) */}
          <button
            className="rounded-full bg-amber-400 py-3 w-48 mt-5 flex items-center justify-center text-green-950 relative overflow-hidden whitespace-nowrap"
            data-aos='fade-up'
          >
            <div className="button-hover-animate w-full text-center" data-aos='fade-up'>
              {/* Original Content */}
              <span className="button-content current-text text-lg font-bold flex items-center gap-2">
                LET'S TALK
                <FiArrowUpRight className="text-green-950 text-lg" />
              </span>

              {/* Hover Content */}
              <span className="button-content new-text text-lg font-bold flex items-center gap-2">
                LET'S TALK
                <FiArrowUpRight className="text-green-950 text-lg" />
              </span>
            </div>
          </button>
        </div>

        {/* Spinning Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-800 rounded-full z-8 shadow-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-yellow-400 transform rotate-45 z-20"></div>
          <div className="absolute inset-0 flex items-center justify-center animate-spin-slow m-3">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                />
              </defs>
              <text fill="white" fontSize="20" fontWeight="bold" letterSpacing="6">
                <textPath href="#circlePath">
                  MODERN INTERIOR DESIGN STUDIO
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="w-full md:w-1/2 bgi bg-cover bg-center p-6 min-h-[500px] md:min-h-full"
          data-aos={isMobile ? 'fade-up' : 'fade-left'}
        ></div>

      </div>
    </div>
  );
};

export default Homepage;
