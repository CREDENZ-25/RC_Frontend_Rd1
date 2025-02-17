import React from 'react';
import { Button } from 'pixel-retroui';
import 'pixel-retroui/dist/index.css';

const Navbar = () => {
  return (
    <div className="w-full fixed top-[10px] left-0 flex flex-row justify-between items-center px-12 bg-transparent z-50">
      {/* Logo aligned with start of questions */}
      <h3 className="text-[#FFD1E8] text-3xl sm:text-2xl font-bold tracking-wide text-left shadow-custom">
        RC
      </h3>

      {/* Right Side: Instructions & Logout */}
      <div className="flex flex-row items-center space-x-6 sm:space-x-10">
        {/* Instructions Link */}
        <a className="text-[#FFD1E8] text-base sm:text-lg font-bold tracking-wider shadow-custom hover:underline" href="">
          INSTRUCTIONS
        </a>

        {/* Logout Button */}
        <div className="w-28 sm:w-36">
          <Button
            bg="#ca5f93"
            textColor="#e2b3cc"
            borderColor="#232f43"
            shadowcolor="#451c44"
            className="w-full h-10 sm:h-12 flex justify-center items-center shadow-custom"
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#e2b3cc"
                stroke="#4a1237"
                strokeWidth="9"
                paintOrder="stroke fill"
                className="font-MyCustomFont lg:text-5xl sm:text-3xl"
              >
                LOGOUT
              </text>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
