import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "@screens/Main";
import Header from "@components/Header";
import MyPageSideBar from "@components/MyPageSideBar";

import "@styles/reset.css";
import "@styles/_typography.scss";
import "@styles/_common.scss";
import "@styles/font.css";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Main />} />
        <Route path="mypage" element={<MyPageSideBar />} />
      </Route>
    </Routes>
  );
}

export default App;
