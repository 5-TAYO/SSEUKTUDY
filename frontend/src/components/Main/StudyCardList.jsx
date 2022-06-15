import React from "react";
import StudyCard from "./StudyCard";
import "./StudyCardList.scss";

function StudyCardList() {
  const dummy = {
    category: "영어 / 외국어 / OPIC",
    title: "스터디이름_TAYO",
    desc: `2학기 싸피 플젝 생각해서 빡세게 프로젝트 할 스터디원 구합니다! 2학기
    싸피 플젝 생각해서 빡세게 프로젝트 할 스터디원 구합니다! 2학기 싸피 플젝
    생각해서 빡세게 프로젝트 할 스터디원 구합니다! 2학기 싸피 플젝 생각해서
    빡세게 프로젝트 할 스터디원 구합니다! 2학기 싸피 플젝 생각해서 빡세게
    프로젝트 할 스터디원 구합니다!`,
    like: "9999",
    view: "9999999"
  };
  return (
    <div className="study-card-list fs-32 notoBold">
      <p className="title">지금 인기있는 스터디</p>
      <div className="card-container flex">
        <StudyCard data={dummy} />
        <StudyCard data={dummy} />
        <StudyCard data={dummy} />
        <StudyCard data={dummy} />
        <StudyCard data={dummy} />
        <StudyCard data={dummy} />
      </div>
    </div>
  );
}

export default StudyCardList;
