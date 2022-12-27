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
    </div>
  );
}

export default Homepage;
