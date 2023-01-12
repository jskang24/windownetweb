import React from "react";
import WindowNet from "../../assets/imgs/windownet.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_Empty"></div>
      <img src={WindowNet} alt="" className="Footer_Image" height="50px" />
      <span className="Footer_Span">
        A cost saving solution to saving our planet
      </span>
    </div>
  );
};

export default Footer;
