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
        <div className="space">
          <div className="earth"></div>
          <div className="moon"></div>
        </div>
        <div className="secondary-box">
          <h1 className="page-title welcome-title"> Welcome</h1>
          <h3 className="page-title">to the Programming Help Community</h3>
          <div>
            <h1
              className="page-title turkiz-font"
              style={{ padding: " 1rem 0" }}
            >
              How to{" "}
              <div className="shift turkiz-font">
                <img
                  alt="Q"
                  className="q-img"
                  src="https://firebasestorage.googleapis.com/v0/b/sharry-1319e.appspot.com/o/QODE%2FASSETS%2FScreen%20Shot%202023-01-04%20at%205.28.15%20PM_prev_ui.png?alt=media&token=638f374e-e17a-46cf-8e6e-e70317864c48"
                />
                ode{" "}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
