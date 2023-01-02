import React from "react";
import "./error.css";

function Error({ msg, setError }) {
  return (
    <div className="error-modal " onClick={() => setError((prev) => !prev)}>
      <div className="error-p-wrapper">
        <p className="error-span">{msg}</p>
      </div>
    </div>
  );
}

export default Error;
