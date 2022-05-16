import React from "react";
import { Routes, Route } from "react-router-dom";
import Recv from "@components/Recv";
import MyPageSideBar from "@components/MyPageSideBar";
import "./MyPage.scss";

function MyPage() {
  return (
    <>
      <MyPageSideBar />
      <Routes>
        <Route index path="recv" element={<Recv />} />
      </Routes>
    </>
  );
}

export default MyPage;
