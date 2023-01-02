import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ExplorePage from "../../pages/QuestionsPage/QuestionsPage";
import Homepage from "../../pages/Homepage/Homepage";
import Loginpage from "../../pages/loginpage/Loginpage";
import NewSnippetPage from "../../pages/NewSnippet/NewSnippetPage";
import SnippetPage from "../../pages/SnippetPage/SnippetPage";
import UserProfilePage from "../../pages/userProfilePage/UserProfilePage";
import AIpage from "../../pages/AIpage/AIpage";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/new-snippet" element={<NewSnippetPage />} />
      <Route path="/snippets/:id" element={<SnippetPage />} />
      <Route path="/profile/:id" element={<UserProfilePage />} />
      <Route path="/ai" element={<AIpage />} />
    </Routes>
  );
}

export default RoutesIndex;
