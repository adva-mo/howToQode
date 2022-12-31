import React from "react";
import AI from "../../components/AI/AI";

function AIpage() {
  return (
    <div className="page-container">
      <img
        className="test"
        src={process.env.PUBLIC_URL + "/assets/Ellipse1.png"}
        alt=""
        key={"1"}
      />
      <img
        className="test2"
        src={process.env.PUBLIC_URL + "/assets/Ellipse2.png"}
        alt=""
        key={"2"}
      />
      <div className=" secondary-box page-title-container">
        <h2 className="page-title">Ask our experts anything about coding!</h2>
      </div>
      <AI />
    </div>
  );
}

export default AIpage;
