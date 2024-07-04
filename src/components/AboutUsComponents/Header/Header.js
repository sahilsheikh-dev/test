import React from "react";
import "./Header.css";
import BgImg from "../../../assets/images/dots-6.svg";

const Header = () => {
  return (
    <>
      <section className="banner aboutUs" style={{ background: BgImg }}>
        <h1 className="heading">
          PMEntire Helps Redefine Your <span>Business Efficiency</span>
        </h1>
      </section>
    </>
  );
};

export default Header;
