import React, { useEffect, useState, useRef } from "react";
import "./CarouselStudyList.scss";
import StudyCardList from "@components/Main/StudyCardList";
import RightArrowIcon from "@images/RightArrow.svg";

function CarouselStudyList() {
  const [nowPage, setNowPage] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    setNowPage(prev => prev + 1);
  };
  const prevSlide = () => {
    setNowPage(prev => prev - 1);
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${1 * nowPage}00%)`;
    console.log(nowPage);
  }, [nowPage]);
  return (
    <div id="carousel-study-list">
      <div className="carousel-wrapper">
        <div className="card-container flex" ref={slideRef}>
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
          <StudyCardList />
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

export default CarouselStudyList;
