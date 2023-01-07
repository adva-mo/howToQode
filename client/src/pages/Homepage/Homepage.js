import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage page-container Homepage-page-container">
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
          <h1 className="page-title welcome-title"> Welcome</h1>
          <h3 className="page-title">to the Programming Help Community</h3>
          <h1 className="page-title turkiz-font">How to Qode </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
