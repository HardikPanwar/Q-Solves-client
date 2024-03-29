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
import KitDetails from "./pages/Details/KitDetails";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import CommunityDetails from "./pages/Community/CommunityDetails";

import Editor from "./pages/Editor/Editor";


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
      <Route path="/kit" element={<OpenSourceKit />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />

      <Route path="/community/details/:id" element={<CommunityDetails />} />

      <Route path="/kit/create" element={<Editor />} />
      <Route path="/kit/:id" element={<KitDetails />} />

    </Routes>
  );
};

export default AllRoutes;
