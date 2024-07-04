import React from "react";
import "./Navbar.css";
import Logo from "../../../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header_logoContainer">
          <img src={Logo} width="150" height="75" alt="PMEntire's logo" />
        </div>
        <div className="header_navContainer">
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_list__items whiteText">
                <a href="/">About Us</a>
              </li>
              <li className="nav_list__items whiteText">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
