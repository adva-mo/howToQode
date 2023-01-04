import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage page-container Homepage-page-container">
      {/* <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
        alt=""
        key="2"
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
        alt=""
        key="1"
      /> */}
      <div className="flex-row-between">
        {/* <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "/assets/hero-image.png"}
          alt=""
        /> */}
        <div class="space">
          <div class="earth"></div>
          <div class="moon"></div>
        </div>
        <div className="secondary-box">
          <h1 className="page-title"> Welcome</h1>
          <h3 className="page-title">to the Programming Help Community</h3>
          <h1 className="page-title turkiz-font">How to Qode </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
