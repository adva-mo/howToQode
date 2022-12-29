import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage page-container">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
      />
      <div className="flex-row-between">
        <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "/assets/hero-image.png"}
        />
        <h1 className="hero-h1">
          COMMUNITY <br /> for Your Coding Challenges
        </h1>
      </div>
    </div>
  );
}

export default Homepage;
