import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import Community from "./pages/Community/Community";
import ExpertChat from "./pages/ExpertChat/ExpertChat";
import OpenSourceKit from "./pages/OpenSourceKit/OpenSourceKit";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/Auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/community" element={<Community />} />
      <Route path="/expert-chat" element={<ExpertChat />} />
      <Route path="/chat-bot" element={<OpenSourceKit />} />
    </Routes>
  );
};

export default AllRoutes;
