import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@screens/Home";
import Login from "@screens/Login";
import MyPage from "@screens/MyPage";
import Main from "@screens/Main";
import MainNavBar from "@components/common/MainNavBar";

function Router() {
  return (
    <BrowserRouter>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
