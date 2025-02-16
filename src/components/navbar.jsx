import React from "react";
import { Button } from "pixel-retroui";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="title">RC</div>
      <div className="elements">
        <div>
          <a href="#LEADERBOARD">LEADERBOARD</a>
        </div>
        <div>
          <a href="#RESULT">RESULT</a>
        </div>
        <div>
          <a href="#LOGOUT">
            <Button
              className="logout"
              bg="#ca5f93"
              textColor="#e2b3cc"
              borderColor="#232f43"
              shadowColor="#451c44"
            >
              LOGOUT
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
