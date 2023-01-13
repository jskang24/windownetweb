import React from "react";
import Navbar from "../components/NavBar/index";
import Loc from "../assets/imgs/location.png";

import "../index.css";

const Info = () => {
  return (
    <div className="Info">
      <Navbar />
      <img src={Loc} alt="" className="Info_Image" />
    </div>
  );
};

export default Info;
