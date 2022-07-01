import React, { useEffect, useState, useRef } from "react";
import "./CarouselStudyList.scss";
import StudyCardList from "@components/Main/StudyCardList";
import RightArrowIcon from "@images/RightArrow.svg";
import PropTypes from "prop-types";

function CarouselStudyList({ searchConditions }) {
  const [nowPage, setNowPage] = useState(0);
  const [conditionList, setConditionList] = useState([]);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setNowPage(prev => prev + 1);
  };

  const prevSlide = () => {
    setNowPage(prev => prev - 1);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${1 * nowPage}00%)`;
    }
    if (nowPage >= conditionList.length) {
      setConditionList([
        ...conditionList,
        { ...conditionList[0], startItem: nowPage * 9 }
      ]);
    }
  }, [nowPage]);

  useEffect(() => {
    console.log(searchConditions, conditionList);
    setConditionList([searchConditions]);
    setNowPage(0);
  }, [searchConditions]);

  return (
    <div id="carousel-study-list">
      <div className="carousel-wrapper">
        <div className="card-container flex" ref={slideRef}>
          {conditionList &&
            conditionList.map(condition => (
              <StudyCardList searchConditions={condition} />
            ))}
        </div>
      </div>
      {nowPage !== 0 && (
        <button type="button" onClick={prevSlide} className="prevBtn">
          <img src={RightArrowIcon} alt="오른쪽버튼" />
        </button>
      )}
      <button type="button" onClick={nextSlide} className="nextBtn">
        <img src={RightArrowIcon} alt="오른쪽버튼" />
      </button>
    </div>
  );
}

CarouselStudyList.propTypes = {
  searchConditions: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number])
  ).isRequired
};

export default CarouselStudyList;
