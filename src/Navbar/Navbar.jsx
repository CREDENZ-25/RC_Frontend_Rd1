import React from 'react';
import { Button } from 'pixel-retroui';
import 'pixel-retroui/dist/index.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div style={{marginBottom:'20px'}} >
        {/* Logo */}
        
          <h3 className='rc'>RC</h3>
        
        {/* Links */}
        
          <a className="leaderboard" href="">INSTRUCTIONS</a>
          
          
        
        {/* Logout Button */}
        <Button
          bg="#ca5f93"
          textColor="#e2b3cc"
          borderColor="#232f43"
          shadowcolor="#451c44"
          className='text-outline'
          style={{ width: "120px", height: "35px",position:'absolute', top:'40px', left:'1285px', }}
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full bg--200"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#e2b3cc"
              stroke="#4a1237"
              strokeWidth="2"
              paintOrder="stroke fill"
              style={{ fontFamily: 'MyCustomFont', textDecoration: 'none' }}
              className="custom-shadow3 font-normal lg:text-[6vw] max-lg:text-[2vh]"
            >
              LOGOUT
            </text>
          </svg>
        </Button>
      </div>
    </>
  );
};

export default Navbar;
