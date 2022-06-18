import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@screens/Home";
import Login from "@screens/Login";
import MyPage from "@screens/MyPage";
import Main from "@screens/Main";
import StudyList from "@screens/StudyList";
import StudyDetail from "@screens/StudyDetail";
import MainNavBar from "@components/common/MainNavBar";

function Router() {
  return (
    <BrowserRouter>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/study/list" element={<StudyList />} />
        <Route path="/study/detail/:id" element={<StudyDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
