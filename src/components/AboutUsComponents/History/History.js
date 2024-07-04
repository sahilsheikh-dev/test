import React from "react";
import "./History.css";
import HistoryImg from "../../../assets/images/history-about-us.webp";

const History = () => {
  return (
    <>
      <div className="feature_container">
        <div className="textContainer">
          <h3 className="heading">History</h3>
          <p className="text">
            <span>
              Saviom is the brainchild of 4 passionate and visionary
              entrepreneurs who aspired to develop a product for increasing
              business efficiency. Starting as a bootstrapped business in 1999
              from a Sydney suburban garage, today we are a name to reckon with
              in resource management.
            </span>
            <br></br>
            <span>
              Riding on the success of our ERM solution, we were motivated to
              come up with our next offering in the PSA space. There is constant
              growth in this space, and we believe we can make a difference in
              solving the pertinent challenges faced by professional service
              organizations today.
            </span>
          </p>
        </div>
        <div className="imageContainer">
          <img
            className="imageContainer_image lazy-hidden"
            src={HistoryImg}
            alt="history-about-us"
            width="685"
            height="621"
          />
        </div>
      </div>
    </>
  );
};

export default History;
