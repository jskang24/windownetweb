import React from "react";
import Navbar from "../components/NavBar/index";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import Analysis from "../assets/imgs/analysis.png";
import Comparison from "../assets/imgs/comparison.png";
import Footer from "../components/Footer/index";
import More from "../assets/imgs/more.jpg";
import Video from "../assets/videos/video.mp4";

import "../index.css";

const OurProduct = () => {
  return (
    <div>
      <Navbar />
      <div className="Product">
        <div className="Mission">
          <FaQuoteLeft className="Mission_Slogan_Quote_Left" size="30px" />
          <div className="Mission_Slogan_Text_Div">
            <span className="Mission_Slogan_Text">
              Close, Change, <br /> Save, and Sustain
            </span>
          </div>
          <FaQuoteRight className="Mission_Slogan_Quote_Right" size="30px" />
        </div>
        <div className="Product_Intro">
          <div className="Divider" />
          <span className="Product_Title">Our Product</span>
        </div>
        <div className="Product_Column">
          <video className="Product_Column1" controls>
            <source src={Video} type="video/mp4"></source>
          </video>
          <div className="Product_Column2">
            <span className="Product_Col_Text">
              For urban dwellers willing to take a greener step, Window Net
              provides sustainable Internet of Things (IoT) services at an
              affordable price for versatile urban environments. Quick and easy
              to install, Window Net fosters an incomparable convenient
              experience to customers while saving energy.
            </span>
            <div className="Mission_Empty2" />
            <span className="Product_Col_Text">
              For full product video, go to
              <a
                href="https://youtu.be/2tSeAnJUtu8"
                className="Product_video_style"
              >
                this link
              </a>
            </span>
          </div>
        </div>
        <div className="Product_Model">
          <div className="Divider" />
          <span className="Product_Title">Models</span>
        </div>
        <div className="Mission_Column">
          <div className="Column">
            <div className="Mission_Empty2" />
            <span className="Mission_Benefits">Model A</span>
            <div className="Product_Empty" />
            <span className="Mission_WindowNet_Text">
              1 * Central Node <br />1 * Air Conditioner Node <br />2 * Window
              Node
            </span>
            <div className="Product_Empty" />
            <span className="Product_Model_Description">
              Short Description of Product
            </span>
            <div className="Mission_Empty2" />
            <span className="Product_Model_Price">
              From <br />
              $27.99 or ₩35,000
            </span>
          </div>
          <div className="Column">
            <div className="Mission_Empty2" />
            <span className="Mission_Benefits">Model B</span>
            <div className="Product_Empty" />
            <span className="Mission_WindowNet_Text">
              1 * Central Node <br />1 * Air Conditioner Node <br />5 * Window
              Node
            </span>
            <div className="Product_Empty" />
            <span className="Product_Model_Description">
              Short Description of Product
            </span>
            <div className="Mission_Empty2" />
            <span className="Product_Model_Price">
              From <br />
              $51.99 or ₩65,000
            </span>
          </div>
        </div>
        <div className="Product_Market">
          <div className="Divider" />
          <span className="Product_Title">Learning from Mistakes</span>
        </div>
        <img src={Analysis} alt="" className="Product_Image" />
        <div className="Product_Market">
          <div className="Divider" />
          <span className="Product_Title">Comparison Chart</span>
        </div>
        <img src={Comparison} alt="" className="Product_Image" />
        <div className="Product_Market">
          <div className="Divider" />
          <span className="Product_Title">More about our Product</span>
        </div>
        <div className="Mission_Empty2" />
        <img src={More} alt="" className="Product_Image" />
        <div className="Mission_Empty2" />
        <Footer />
      </div>
    </div>
  );
};

export default OurProduct;
