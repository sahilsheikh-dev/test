import React from "react";
import "./Innovation.css";
import InnovationImg from "../../../assets/images/Our-Innovation-about-us.webp";

const Innovation = () => {
  return (
    <>
      <div className="feature_container">
        <div className="imageContainer">
          <img
            className="imageContainer_image lazy-hidden"
            src={InnovationImg}
            alt="Our-Innovation-about-us"
            width="685"
            height="640"
          />
        </div>
        <div className="textContainer">
          <h3 className="heading">Our Innovation</h3>
          <p className="text">
            <span>
              At PMEntire, we constantly innovate and develop futuristic
              solutions to help our customers achieve greater operational
              efficiency and productivity. Besides, our intuitive solutions
              enable businesses to forecast and be proactive. Starting as
              pioneers in resource management, today, our products are several
              years ahead of the market.
            </span>
            <br></br>
            <span>
              We foster an innovative culture wherein out-of-the-box ideas are
              encouraged and evaluated. Our range of products is highly
              configurable to fit every customer's unique business needs.
              Additionally, our future releases are decided after carefully
              understanding various client-centric challenges.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Innovation;
