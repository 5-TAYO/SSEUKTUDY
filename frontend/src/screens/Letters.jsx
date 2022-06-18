import React from "react";
import { Routes, Route } from "react-router-dom";
import Recv from "@components/Letters/Recv";
import Send from "@components/Letters/Send";
import StudyLetters from "@components/Letters/StudyLetters";
import LettersSideBar from "@components/Letters/LettersSideBar";
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
