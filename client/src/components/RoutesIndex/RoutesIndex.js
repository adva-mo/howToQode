import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Loginpage from "../../pages/loginpage/Loginpage";

function RoutesIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="*" element={<Navigate replace to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default RoutesIndex;
