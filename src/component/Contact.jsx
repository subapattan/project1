import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="pt-24 md:pt-40 bg-green-950">

      {/* Logo / Title */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-5xl italic sm:text-4xl md:text-5xl text-white font-semibold mb-6">
          <a href="#Homepage">
            Virudo<span className="text-yellow-400 p-2">.</span>
          </a>
        </h2>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-6">

        <div className="flex flex-col gap-3">
        <Item title="LINKS"/>
        <Item desc="About" />
        <Item desc="Projects" />
        <Item desc="Blog" />
        <Item desc="Contact Us"  />
      </div>

      {/* Column 2 – 6 items */}
      <div className="flex flex-col gap-3">
        <Item title="LEGAL" />
        <Item desc="Project Single" />
        <Item desc="Blog single"  />
        <Item desc="Privacy Policy"  />
        <Item desc="Terms of Condition" />
        <Item desc="License"  />
      </div>

      {/* Column 3 – 4 items */}
      <div className="flex flex-col gap-3">
        <Item title="SOCIAL"  />
        <Item desc="Facebook" />
        <Item desc="Instagram" />
        <Item desc="LinkedIn"  />
      </div>
      </div>
      <div className="border-t border-gray-500 p-5 mt-5 text-center">
        <p className="text-gray-500">&copy; 2025 | All rights Reserved</p>
      </div>
    </div>
  );
};

/* Reusable Item Card */
const Item = ({ title, desc }) => {
  return (
    <div
      data-aos="fade-up"
      className="text-left text-white w-50 md:ml-70" 
    >
      {title && (
        <h3 className="text-lg font-bold mb-2 cursor-pointer">
          {title}
        </h3>
      )}

      {desc && (
        <p className="text-lg text-white/70 hover:ml-10 hover:text-yellow-400 transition-all cursor-pointer">
          {desc}
        </p>
      )}
    </div>




  );
};

export default Contact;
