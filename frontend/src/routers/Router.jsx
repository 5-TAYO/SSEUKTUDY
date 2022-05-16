import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@screens/Home";
import Login from "@screens/Login";
import MyPage from "@screens/MyPage";
import MainNavBar from "@components/common/MainNavBar";

function Router() {
  return (
    <>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage/*" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default Router;
