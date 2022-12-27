import React from "react";
import AI from "../../components/AI/AI";

function AIpage() {
  return (
    <div className="page-container">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
      />
      <AI />
    </div>
  );
}

export default AIpage;
