import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@screens/Home";
import Login from "@screens/Login";
import Letters from "@screens/Letters";
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
import StudyForm from "../screens/common/StudyCreateForm";

function Router() {
  return (
    <>
      <MainNavBar />

      <Routes>
        {/* 홈 & 메인 */}
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />

        {/* 스터디 */}
        <Route path="study/*">
          <Route path="list" element={<StudyList />} />
          <Route path="detail/:id" element={<StudyDetail />} />
          <Route path="join/:id" element={<StudyRegistForm type="regist" />} />
          <Route
            path="join/read/:id" // fix__ 진합이형이 라우팅해주세요
            element={<StudyRegistForm type="read" />}
          />
          <Route path="regist" element={<StudyForm type="create" />} />
        </Route>

        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        <Route path="/find/pw" element={<FindPw />} />
        {/* 마이페이지 */}
        <Route path="/mypage/*" element={<MyPage />} />

        {/* 쪽지함 */}
        <Route path="/letters/*" element={<Letters />} />

        {/* 회원가입 */}
        <Route path="/join/*">
          <Route index element={<Join />} />
          <Route path="mail" element={<JoinMail />} />
          <Route path="userinfo" element={<JoinUserInfo />} />
          <Route path="finish" element={<JoinFinish />} />
          <Route path="add" element={<JoinAdd />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
