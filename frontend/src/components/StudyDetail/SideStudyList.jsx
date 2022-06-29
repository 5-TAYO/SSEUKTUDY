import React from "react";
import "./SideStudyList.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SideStudyList({ data: { title, studyList } }) {
  return (
    <div id="side-study-list">
      <header>
        <div className="dot" />
        <p className="title notoBold fs-17">{title}</p>
        <p className="notoReg fs-17"> 인기 스터디를 모아봤어요!</p>
      </header>
      <ul>
        {studyList.map(({ id, name }, ind) => (
          <li className="notoMid fs-12 ellipsis" key={id}>
            <Link to={`/study/detail/${id}`}>
              {ind + 1}. {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
SideStudyList.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        )
      )
    ])
  ).isRequired
};
export default SideStudyList;
