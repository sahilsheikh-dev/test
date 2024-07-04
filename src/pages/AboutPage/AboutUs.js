import React from "react";
import "../AboutPage/AboutUs.css";
import Header from "../../components/AboutUsComponents/Header/Header";
import About from "../../components/AboutUsComponents/About/About";
import History from "../../components/AboutUsComponents/History/History";
import Innovation from "../../components/AboutUsComponents/Innovation/Innovation";

const AboutUs = () => {
  return (
    <>
      <Header />
      <About />
      <section className="feature">
        <History />
        <Innovation />
      </section>
    </>
  );
};

export default AboutUs;
