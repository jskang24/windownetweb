import React from "react";
import Navbar from "../components/NavBar/index";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import Footer from "../components/Footer/index";
import TeamPhoto from "../assets/imgs/teamphoto.JPG";

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
        <div className="Mission_Motto">
          <div className="Divider" />
          <span className="Mission_WindowNet_Title">Motto</span>
          <div className="Mission_Empty" />
          <span className="Mission_WindowNet_Motto_Title">
            "Close, Change, Save, and Sustain"
          </span>
          <div className="Mission_Empty" />
          <span className="Mission_WindowNet_Motto_Title">Close</span>
          <span className="Mission_WindowNet_Motto_Text">
            windows when the AC is on
          </span>
          <div className="Mission_Empty3" />
          <span className="Mission_WindowNet_Motto_Title">Change</span>
          <span className="Mission_WindowNet_Motto_Text">
            the world for the better
          </span>
          <div className="Mission_Empty3" />
          <span className="Mission_WindowNet_Motto_Title">Save</span>
          <span className="Mission_WindowNet_Motto_Text">
            excess electricity bills & the natural environment
          </span>
          <div className="Mission_Empty3" />
          <span className="Mission_WindowNet_Motto_Title">Sustain</span>
          <span className="Mission_WindowNet_Motto_Text">
            urban environments & electricity consumption
          </span>
        </div>

        <div className="Mission_Team">
          <div className="Divider" />
          <span className="Mission_WindowNet_Title">The Team</span>
          <div className="Mission_Team_Image_Container">
            <img alt="" src={TeamPhoto} className="Mission_Team_Image" />
          </div>
          <span className="Mission_WindowNet_Text">
            Window network started from Jinwoo after attending a lecture on
            sustainable development and green building to achieve financial
            efficiency and environmental sustainability. Then talented students
            in various areas joined the cause and collectively refined the
            framework into “Window Net”. Jinwoo, a mathematician with interests
            in urban environments and design, contributed to the conceptual
            ideas and design of the project. Joonseok, a computer scientist,
            created the overarching software network and website using his
            experience in freelance app and web development. Sehun and Yongwon,
            two physicists with a passion for theoretical physics and electrical
            engineering, respectively, are responsible for developing the
            mainboard and interconnecting circuits that were the key to our
            innovation. Junghwan, an economist and marketer with a keen interest
            in finance, shaped Window Net as a business ready for the
            competitive market using his experiences in previous pitching
            competitions.
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
              In the modern urban environment, electricity consumption is
              increasing as the urban population increases due to natural growth
              and migration. To reduce the consumption of electricity,
              WindowNet's product alerts the user when both the air conditioner
              is on and the window is opened as well as giving an option of
              automatically turning off the air conditioner through the client
              application. By saving electricity with our product, the amount of
              greenhouse gas and pollutants being emitted will be significantly
              reduced, contributing positively to the environment.
            </span>
          </div>
          <div className="Column">
            <div className="Mission_Empty2" />
            <span className="Mission_Benefits">Economic Benefits</span>
            <div className="Mission_Empty2" />
            <span className="Mission_WindowNet_Text">
              By purchasing WindowNet's product, electricity bills can be saved
              by flexibly switching the status of the air conditioner when
              necessary. Unlike other IoT systems competing in the market,
              WindowNet's service does not require unification of products made
              by a single company. Additionally, the app itself is free to use
              after purchasing the product model and itself is minimalistic and
              convenient: able turn on and off, which can be used anywhere,
              without any limitation on user access.
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
