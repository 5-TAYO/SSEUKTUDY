import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StudyCard from "./StudyCard";
import "./StudyCardList.scss";
import { getStudyList } from "../../apis/study";

function StudyCardList({ title, searchConditions }) {
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    async function getAndSetStudyList() {
      const data = await getStudyList(searchConditions);
      setStudyList(data);
      console.log(data);
    }
    getAndSetStudyList();
  }, [searchConditions]);

  return (
    <div className="study-card-list fs-32 notoBold">
      {title && <p className="title">{title}</p>}
      <div className="card-container flex">
        {studyList &&
          studyList.map(studyInfo => <StudyCard studyInfo={studyInfo} />)}
      </div>
    </div>
  );
}

StudyCardList.defaultProps = {
  title: null
};

StudyCardList.propTypes = {
  title: PropTypes.string,
  searchConditions: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired
};
export default StudyCardList;
