import React, { useEffect } from "react";
import "./error.css";

function Error({ msg, setError }) {
  return (
    <div className="error-modal " onClick={() => setError((prev) => !prev)}>
      <p className="error-span">{msg}</p>
    </div>
  );
}

export default Error;
