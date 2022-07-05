import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import loadingSpinner from "@images/LoadingSpinner.svg";
import "./InfinityStudyCardList.scss";
import StudyCardList from "@components/Main/StudyCardList";

function InfinityStudyCardList({ title }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [observerTarget, setObserverTarget] = useState(null);
  const [studyList, setStudyList] = useState([]);
  const [page, setPage] = useState(0);

  const getStduyList = async () => {
    setIsLoading(true);
    // eslint-disable-next-line no-promise-executor-return
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(3000);
    setStudyList([...studyList, 1]);

    // 테스트 코드입니다.
    if (page === 3) {
      setIsEnd(false);
      // setIsEnd(true);
    }
    //
    setIsLoading(false);
  };

  // 옵저버 콜백
  const onIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isLoading) {
        setPage(prev => prev + 1);
      }
    });
  };

  useEffect(() => {
    // console.log("study Modi", studyList);
  }, [studyList]);

  useEffect(() => {
    getStduyList();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
    if (observerTarget) {
      observer.observe(observerTarget);
    }
    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget);
      }
    };
  }, [observerTarget]);
  return (
    <div id="infinity-study-card-list">
      {title && <p className="title">{title}</p>}
      <div className="flex column">
        {studyList.length !== 0 &&
          studyList.map(() => <StudyCardList key={uuid()} />)}
      </div>
      {!isEnd && (
        <div className="flex justify-center">
          {isLoading ? (
            <img
              src={loadingSpinner}
              title="로딩스피너"
              alt="로딩스피너"
              className="loading-spinner"
            />
          ) : (
            <p ref={setObserverTarget} className="observerTarget" />
          )}
        </div>
      )}
    </div>
  );
}

InfinityStudyCardList.defaultProps = {
  title: null
};

InfinityStudyCardList.propTypes = {
  title: PropTypes.string
};
export default InfinityStudyCardList;
