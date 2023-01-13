import React from "react";
import "./Navbar.css";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

import Bar from "./Bar";
import WindowNet from "../../assets/imgs/windownetlogo.jpg";

const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-family: "Gudea", sans-serif;
  font-size: 20px;
  &.active {
    font-weight: "bold";
  }
`;

const HomeLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-family: "Gudea", sans-serif;
  font-weight: bold;
  font-size: 28px;
  &.active {
    font-weight: "bold";
  }
`;

const Navbar = () => {
  return (
    <div className="Nav">
      <Bar />
      <div className="Title">
        <HomeLink to="/" activeStyle>
          <img className="Logo" src={WindowNet} alt="" />
          Window Net
        </HomeLink>
      </div>
      <div className="NavMenu">
        <NavLink to="/mission" activeStyle>
          Mission
        </NavLink>
        <NavLink to="/product" activeStyle>
          Product
        </NavLink>
        <NavLink to="/testimonials" activeStyle>
          Testimonials
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
