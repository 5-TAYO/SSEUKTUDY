import React from "react";
import PropTypes from "prop-types";
import StudyCard from "./StudyCard";
import "./StudyCardList.scss";

function StudyCardList({ title }) {
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
      {title && <p className="title">{title}</p>}
      <div className="card-container flex">
        <StudyCard data={{ ...dummy, id: 1 }} />
        <StudyCard data={{ ...dummy, id: 2 }} />
        <StudyCard data={{ ...dummy, id: 3 }} />
        <StudyCard data={{ ...dummy, id: 4 }} />
        <StudyCard data={{ ...dummy, id: 5 }} />
        <StudyCard data={{ ...dummy, id: 6 }} />
        <StudyCard data={{ ...dummy, id: 4 }} />
        <StudyCard data={{ ...dummy, id: 5 }} />
        <StudyCard data={{ ...dummy, id: 6 }} />
      </div>
    </div>
  );
}

StudyCardList.defaultProps = {
  title: null
};

StudyCardList.propTypes = {
  title: PropTypes.string
};
export default StudyCardList;
