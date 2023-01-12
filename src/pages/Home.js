import React from "react";
import "../index.css";

import logo from "../assets/imgs/windownet.png";
import Navbar from "../components/NavBar/index";

const Home = () => {
  return (
    <div className="Home">
      <div className="NavbarAnimation">
        <Navbar />
      </div>
      <div className="Animation">
        <img src={logo} alt="" height="80%" />
        <span className="Slogan">Close, Change, Save, and Sustain</span>
      </div>
    </div>
  );
};

export default Home;
