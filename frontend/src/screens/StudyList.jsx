import React, { useState } from "react";
import "./StudyList.scss";
import StudyCardList from "@components/Main/StudyCardList";
import SearchIcon from "@images/Search.svg";
import StudyListUpIcon from "@images/StudyListUp.svg";

function StudyList() {
  const [listUpCon, setListUpcon] = useState("likes");

  const placeList = ["전체", "온라인", "오프라인", "온/오프라인"];
  const categoryList = [
    "전체",
    "IT",
    "프론트",
    "백엔드",
    "IT1",
    "프론트1",
    "백엔드1",
    "IT2",
    "프론트2",
    "백엔드2",
    "IT3",
    "프론트3",
    "백엔드3",
    "IT4",
    "프론트4",
    "백엔드4"
  ];
  const handleListUpCon = e => {
    console.log(listUpCon);
    setListUpcon(e.target.value);
  };
  const autoResizeInput = e => {
    e.target.style.width = "0px";
    const width = e.target.scrollWidth;
    e.target.style.width = `${width + 2}px`; // fix__
  };
  const showCalPicker = e => {
    e.target.showPicker();
  };

  return (
    <div id="study-list">
      <div className="banner flex align-center justify-center">광고</div>
      <div className="condition">
        <div className="condition__place flex">
          <p className="title">온/오프라인</p>
          <div className="options flex align-center">
            {placeList.map(place => (
              <label htmlFor={place} key={place}>
                <input
                  id={place}
                  value={place}
                  name="place"
                  type="radio"
                  defaultChecked={place === "온/오프라인"}
                />
                {place}
              </label>
            ))}
          </div>
        </div>
        <div className="condition__category flex">
          <p className="title">카테고리</p>
          <div className="options flex align-center">
            {categoryList.map(category => (
              <label htmlFor={category} key={category}>
                <input
                  id={category}
                  value={category}
                  name="category"
                  type="radio"
                  defaultChecked={category === "전체"}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        <div className="condition__period">
          <p className="title">스터디기간</p>
          <input type="date" onClick={showCalPicker} />
          <p className="tilde">~</p>
          <input type="date" onClick={showCalPicker} />
        </div>
        <div className="condition__search flex align-center">
          <img
            className="condition__search__icon"
            src={SearchIcon}
            alt="돋보기"
          />
          <input
            type="text"
            className="condition__search__input notoMid fs-20"
            placeholder="스터디를 찾아보세요"
            onChange={autoResizeInput}
          />
          <button
            type="button"
            className="condition__search__btn notoBold fs-16 flex align-center justify-center"
          >
            검색
          </button>
        </div>
      </div>
      <div className="list-up">
        <header className="flex align-center notoMid">
          <img className="list-up__icon" src={StudyListUpIcon} alt="" />
          <p className="list-up__title fs-20">스터디 모아보기</p>
          <p className="list-up__cnt fs-16 notoMid">총</p>
          <p className="list-up__cnt--emp fs-16 notoMid">27859603</p>
          <p className="list-up__cnt fs-16 notoMid">개</p>
          <select
            className="list-up__selector notoMid fs-16"
            name="selector"
            onChange={handleListUpCon}
          >
            <option value="likes">좋아요순</option>
            <option value="views">조회수순</option>
            <option value="regDate">등록일순</option>
          </select>
        </header>
        <StudyCardList />
      </div>
    </div>
  );
}

export default StudyList;
