import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StudyCard from "./StudyCard";
import "./StudyCardList.scss";
import { getStudyList } from "../../apis/study";

function StudyCardList({
  title,
  searchConditions,
  handleStudyCount,
  handleStudyMaxPage
}) {
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    async function getAndSetStudyList() {
      const data = await getStudyList(searchConditions);
      const { studyInfoList } = data;
      if (studyInfoList.length % 3 === 2) {
        studyInfoList.push({ dummy: true });
      }
      setStudyList(studyInfoList);
      console.log(data);
      if (handleStudyCount) {
        handleStudyCount(data.studyCnt);
      }
      if (handleStudyMaxPage) {
        handleStudyMaxPage(Math.floor(data.studyCnt / 9));
      }
    }
    getAndSetStudyList();
  }, [searchConditions]);

  return (
    <div className="study-card-list fs-32 notoBold">
      {title && <p className="title">{title}</p>}
      <div className="card-container flex">
        {studyList.length !== 0 &&
          studyList.map(studyInfo => <StudyCard studyInfo={studyInfo} />)}
      </div>
    </div>
  );
}

StudyCardList.defaultProps = {
  title: null,
  handleStudyCount: null,
  handleStudyMaxPage: null
};

StudyCardList.propTypes = {
  title: PropTypes.string,
  searchConditions: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
  handleStudyCount: PropTypes.func,
  handleStudyMaxPage: PropTypes.func
};
export default StudyCardList;
