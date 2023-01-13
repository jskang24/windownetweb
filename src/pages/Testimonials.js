import React from "react";
import Navbar from "../components/NavBar/index";

import "../index.css";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <Navbar />
      <div className="Statistics">
        <span className="Statistics_Title">STATISTICS</span>
        <div className="Statistics_Stats">
          <div className="Statistics_Stat">
            <span className="Statistics_Major">100%</span>
            <span className="Statistics_Minor">Of users were satisfied</span>
          </div>
          <div className="Statistics_Stat">
            <span className="Statistics_Major">5.0</span>
            <span className="Statistics_Minor">/5 rating by users</span>
          </div>
          <div className="Statistics_Stat">
            <span className="Statistics_Major">100%</span>
            <span className="Statistics_Minor">
              of users found windownet easy to use
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
