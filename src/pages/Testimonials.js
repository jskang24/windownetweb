import React from "react";
import Navbar from "../components/NavBar/index";
import Testimonial from "../assets/imgs/testimonials.png";
import Footer from "../components/Footer/index";

import "../index.css";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <Navbar />
      <div className="Testimonials_Animation">
        <div className="Statistics">
          <span className="Statistics_Title">STATISTICS</span>
          <div className="Statistics_Stats">
            <div className="Statistics_Stat">
              <span className="Statistics_Major">95%</span>
              <span className="Statistics_Minor">Of users were satisfied</span>
            </div>
            <div className="Statistics_Stat">
              <span className="Statistics_Major">4.75</span>
              <span className="Statistics_Minor">/5 rating by users</span>
            </div>
            <div className="Statistics_Stat">
              <span className="Statistics_Major">90%</span>
              <span className="Statistics_Minor">
                of users found windownet easy to use
              </span>
            </div>
          </div>
        </div>
        <img src={Testimonial} alt="" className="Testimonials_Image" />
        <Footer />
      </div>
    </div>
  );
};

export default Testimonials;
