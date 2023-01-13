import React from "react";
import Navbar from "../components/NavBar/index";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import Footer from "../components/Footer/index";

import "../index.css";

const Mission = () => {
  return (
    <div>
      <Navbar />
      <div className="Mission_Animation">
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
          <div className="Divider" />
          <span className="Mission_WindowNet_Title">Window Net</span>
          <div className="Mission_Empty" />
          <span className="Mission_WindowNet_Text">
            Climate change is the next turning point for mankind. Whether we
            turn towards complete destruction or technological advancement lies
            in the hands of the current world and it is the collective
            responsibility of mankind to alter the direction of humanity towards
            a more sustainable future. Hence, our team aims to contribute to
            this collective effort by making urban environments environmentally
            sustainable through reducing excessive air conditioning.
          </span>
        </div>
        <div className="Mission_Team">
          <div className="Divider" />
          <span className="Mission_WindowNet_Title">The Team</span>
          <div className="Mission_Team_Image"></div>
          <span className="Mission_WindowNet_Text">
            Climate change is the next turning point for mankind. Whether we
            turn towards complete destruction or technological advancement lies
            in the hands of the current world and it is the collective
            responsibility of mankind to alter the direction of humanity towards
            a more sustainable future. Hence, our team aims to contribute to
            this collective effort by making urban environments environmentally
            sustainable through reducing excessive air conditioning.
          </span>
        </div>
        <div className="Mission_Aim">
          <div className="Divider" />
          <span className="Mission_WindowNet_Title">
            A cost saving solution to saving our planet
          </span>
        </div>
        <div className="Mission_Column">
          <div className="Column">
            <div className="Mission_Empty2" />
            <span className="Mission_Benefits">Environmental Benefits</span>
            <div className="Mission_Empty2" />
            <span className="Mission_WindowNet_Text">
              Climate change is the next turning point for mankind. Whether we
              turn towards complete destruction or technological advancement
              lies in the hands of the current world and it is the collective
              responsibility of mankind to alter the direction of humanity
              towards a more sustainable future. Hence, our team aims to
              contribute to this collective effort by making urban environments
              environmentally sustainable through reducing excessive air
              conditioning.
            </span>
          </div>
          <div className="Column">
            <div className="Mission_Empty2" />
            <span className="Mission_Benefits">Economic Benefits</span>
            <div className="Mission_Empty2" />
            <span className="Mission_WindowNet_Text">
              Climate change is the next turning point for mankind. Whether we
              turn towards complete destruction or technological advancement
              lies in the hands of the current world and it is the collective
              responsibility of mankind to alter the direction of humanity
              towards a more sustainable future. Hence, our team aims to
              contribute to this collective effort by making urban environments
              environmentally sustainable through reducing excessive air
              conditioning.
            </span>
          </div>
        </div>
        <div className="Divider2" />
        <div className="Mission">
          <FaQuoteLeft className="Mission_Slogan_Quote_Left" size="30px" />
          <div className="Mission_Slogan_Text_Div">
            <span className="Mission_Slogan_Text">
              Close, Change, <br /> Save, and Sustain
            </span>
          </div>
          <FaQuoteRight className="Mission_Slogan_Quote_Right" size="30px" />
        </div>
        <div className="Mission_Empty2" />
        <Footer />
      </div>
    </div>
  );
};

export default Mission;
