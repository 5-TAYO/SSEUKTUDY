import React from "react";
import { Route, Routes } from "react-router-dom";
import ApplicationHistory from "../components/MyPage/ApplicationHistory";
import CommunityActivity from "../components/MyPage/CommunityActivity";
import MyStudy from "../components/MyPage/MyStudy";
import StudyManagement from "../components/MyPage/StudyManagement";
import MyPageSideBar from "../components/MyPage/MyPageSideBar";
import Index from "../components/MyPage/Index";
import "./Letters.scss";
import ModifyPersonalInfo from "../components/MyPage/ModifyPersonalInfo";

function MyPage() {
  return (
    <div className="letters-wrapper">
      <MyPageSideBar />
      <Routes>
        <Route index element={<Index />} />
        <Route path="mystudy" element={<MyStudy />} />
        <Route path="community" element={<CommunityActivity />} />
        <Route path="history" element={<ApplicationHistory />} />
        <Route path="management" element={<StudyManagement />} />
        <Route path="info" element={<ModifyPersonalInfo />} />
      </Routes>
    </div>
  );
}
export default MyPage;
