import React from "react";

import "../index.css";

import Navbar from "../components/NavBar/index";
import Footer from "../components/Footer/index";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="Contact">
        <div className="Contact_Slogan">
          <div className="Contact_Empty" />
          <span className="Contact_Text">
            Close, Change, <br /> Save, and Sustain
          </span>
        </div>
        <div className="Contact_Support">
          <div className="Contact_Empty" />
          <span className="Contact_Text">
            Support At The <br /> Ready
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
