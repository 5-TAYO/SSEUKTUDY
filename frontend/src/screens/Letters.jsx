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
        <Route path="/" element={<Recv />} />
        <Route path="recv" element={<Recv />} />
        <Route path="send" element={<Send />} />
        <Route path="study" element={<StudyLetters />} />
      </Routes>
    </div>
  );
}

export default Letters;
