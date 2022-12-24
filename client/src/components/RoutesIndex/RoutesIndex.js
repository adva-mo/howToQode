import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Loginpage from "../../pages/loginpage/Loginpage";
import NewSnippetPage from "../../pages/NewSnippet/NewSnippetPage";
import SnippetPage from "../../pages/SnippetPage/SnippetPage";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/homepage" />} />
      <Route path="*" element={<Navigate replace to="/homepage" />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/new-snippet" element={<NewSnippetPage />} />
      <Route path="/snippets/:id" element={<SnippetPage />} />
    </Routes>
  );
}

export default RoutesIndex;
