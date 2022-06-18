import React from "react";
import { Routes, Route } from "react-router-dom";
import Recv from "@components/Recv";
import Send from "@components/Send";
import StudyLetters from "@components/StudyLetters";
import LettersSideBar from "@components/LettersSideBar";
import "./Letters.scss";

function Letters() {
  return (
    <div className="letters-wrapper">
      <LettersSideBar />
      <Routes>
        <Route index path="recv" element={<Recv />} />
        <Route index path="send" element={<Send />} />
        <Route index path="study" element={<StudyLetters />} />
      </Routes>
    </div>
  );
}

export default Letters;
