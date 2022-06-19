import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@screens/Home";
import Login from "@screens/Login";
import Letters from "@screens/Letters";
import MainNavBar from "@components/common/MainNavBar";
import MyPage from "../screens/MyPage";

function Router() {
  return (
    <>
      <MainNavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="letters/*" element={<Letters />} />
        <Route path="mypage/*" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default Router;
