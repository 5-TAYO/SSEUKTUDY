import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@screens/Home";
import Login from "@screens/login/Login";
import Letters from "@screens/Letters";
import Join from "@screens/join/Join";
import JoinMail from "@screens/join/JoinMail";
import JoinUserInfo from "@screens/join/JoinUserInfo";
import JoinAdd from "@screens/join/JoinAdd";
import JoinFinish from "@screens/join/JoinFinish";
import MyPage from "@screens/MyPage";
import Main from "@screens/Main";
import StudyList from "@screens/StudyList";
import FindPw from "@screens/login/FindPw";
import NewPw from "@screens/login/NewPw";
import StudyDetail from "@screens/StudyDetail";
import MainNavBar from "@components/common/MainNavBar";
import StudyRegistForm from "@screens/common/StudyRegistForm";
import StudyForm from "@screens/common/StudyCreateForm";

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
            path="join/read/:id"
            element={<StudyRegistForm type="read" />}
          />
          <Route path="regist" element={<StudyForm type="create" />} />
        </Route>

        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        <Route path="/find/pw" element={<FindPw />} />
        <Route path="find/newpw" element={<NewPw />} />
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
