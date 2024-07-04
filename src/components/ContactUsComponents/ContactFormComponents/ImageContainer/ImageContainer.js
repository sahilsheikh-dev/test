import React from "react";
import "./ImageContainer.css";
import LazyImg from "../../../../assets/images/contact-main-img.webp";

const ImageContainer = () => {
  return (
    <>
      <div className="imageContainer">
        <img
          className="lazy-hidden"
          src={LazyImg}
          alt="contact-main-img"
          width="685"
          height="765"
        />
      </div>
    </>
  );
};

export default ImageContainer;
