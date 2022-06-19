import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "@screens/Home";
import Login from "@screens/Login";
import Join from "@screens/Join";
import JoinMail from "@screens/JoinMail";
import JoinUserInfo from "@screens/JoinUserInfo";
import JoinAdd from "@screens/JoinAdd";
import JoinFinish from "@screens/JoinFinish";
import MyPage from "@screens/MyPage";
import Main from "@screens/Main";
import StudyList from "@screens/StudyList";
import FindPw from "@screens/FindPw";
import StudyDetail from "@screens/StudyDetail";
import MainNavBar from "@components/common/MainNavBar";
import StudyRegistForm from "@screens/common/StudyRegistForm";

function Router() {
  return (
    <BrowserRouter>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/study/list" element={<StudyList />} />
        <Route path="/study/detail/:id" element={<StudyDetail />} />
        <Route
          path="/study/join/:id"
          element={<StudyRegistForm type="regist" />}
        />
        <Route
          path="/study/join/read/:id" // fix__ 진합이형이 라우팅해주세요
          element={<StudyRegistForm type="read" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/mail" element={<JoinMail />} />
        <Route path="/join/userinfo" element={<JoinUserInfo />} />
        <Route path="/join/finish" element={<JoinFinish />} />
        <Route path="/join/add" element={<JoinAdd />} />
        <Route path="/find/pw" element={<FindPw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
