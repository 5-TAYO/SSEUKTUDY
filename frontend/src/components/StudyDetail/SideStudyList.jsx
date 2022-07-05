import React, { useState, useEffect } from "react";
import "./SideStudyList.scss";
import PropTypes from "prop-types";
import { getStudyList } from "@apis/study";
import { categoryList } from "@utils/studyConditions";
import { Link } from "react-router-dom";

function SideStudyList({ title }) {
  const [studyList, setStudyList] = useState();

  useEffect(() => {
    const searchConditions = {
      startItem: 0,
      itemCnt: 9,
      orderType: "studyLike"
    };
    if (categoryList.includes(title)) {
      searchConditions.studyCategoryId = [categoryList.indexOf(title)];
    }
    async function getStudys() {
      const data = await getStudyList(searchConditions);
      setStudyList(data.studyInfoList);
    }
    getStudys();
  }, []);

  return (
    <div id="side-study-list">
      <header>
        <div className="dot" />
        <p className="title notoBold fs-17">{title}</p>
        <p className="notoReg fs-17"> 인기 스터디를 모아봤어요!</p>
      </header>
      <ul>
        {studyList &&
          studyList.map(({ studyId, studyTitle }, ind) => (
            <li className="notoMid fs-12 ellipsis" key={studyId}>
              <Link to={`/study/detail/${studyId}`}>
                {ind + 1}. {studyTitle}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
SideStudyList.propTypes = {
  title: PropTypes.string.isRequired
};
export default SideStudyList;
