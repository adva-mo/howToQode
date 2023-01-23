import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage page-container ">
      <div className="flex-row-between animation-title-container">
        {/* <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "/assets/hero-image.png"}
          alt=""
        /> */}
        <div className="space">
          <div className="earth"></div>
          <div className="moon"></div>
        </div>
        <div className="secondary-box">
          <h1 className="page-title welcome-title"> Welcome</h1>
          <h3 className="page-title">to the Programming Help Community</h3>
          <div>
            <p
              className="page-title welcome-title turkiz-font"
              style={{ padding: " 1rem 0" }}
            >
              How to Qode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
