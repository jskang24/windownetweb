import React from "react";
import Navbar from "../components/NavBar/index";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import Footer from "../components/Footer/index";

import "../index.css";

const Mission = () => {
  return (
    <div>
      <Navbar />
      <div className="Mission">
        <FaQuoteLeft className="Mission_Slogan_Quote_Left" size="30px" />
        <div className="Mission_Slogan_Text_Div">
          <span className="Mission_Slogan_Text">
            Close, Change, <br /> Save, and Sustain
          </span>
        </div>
        <FaQuoteRight className="Mission_Slogan_Quote_Right" size="30px" />
      </div>
      <div className="Mission_WindowNet">
        <span className="Mission_WindowNet_Title">Window Net</span>
      </div>
      <div className="Mission_Team"></div>
      <div className="Mission_Aim"></div>
      <div className="Mission">
        <FaQuoteLeft className="Mission_Slogan_Quote_Left" size="30px" />
        <div className="Mission_Slogan_Text_Div">
          <span className="Mission_Slogan_Text">
            Close, Change, <br /> Save, and Sustain
          </span>
        </div>
        <FaQuoteRight className="Mission_Slogan_Quote_Right" size="30px" />
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
