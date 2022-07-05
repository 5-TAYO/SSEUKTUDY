import React, { useState, useEffect } from "react";
import "./StudyList.scss";
import CarouselStudyList from "@components/Main/CarouselStudyList";
import SearchIcon from "@images/Search.svg";
import StudyListUpIcon from "@images/StudyListUp.svg";

function StudyList() {
  const placeList = ["전체 ", "온라인", "오프라인"];
  const categoryList = [
    "개발",
    "어학",
    "자격증",
    "공시",
    "입시",
    "편입",
    "취준",
    "면접",
    "취미",
    "독서",
    "SNS",
    "기타"
  ];
  const [searchConditions, setSearchConditions] = useState({
    studyCategoryId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    orderType: "studyLike",
    itemCnt: 9
  });
  const [categorys, setCategorys] = useState(categoryList);
  const [studyCount, setStudyCount] = useState();

  const handleSearchConditions = (type, value) => {
    const newCondition = {};
    newCondition[type] = value;
    if (type === "studyType" && value === "전체 ") newCondition[type] = null;
    if (JSON.stringify(searchConditions[type]) === JSON.stringify(value))
      return;
    setSearchConditions({ ...searchConditions, ...newCondition });
  };

  const handleSetCategory = e => {
    if (e.target.checked) {
      setCategorys([...categorys, e.target.value]);
    } else {
      setCategorys(categorys.filter(category => category !== e.target.value));
    }
  };

  const handleAllCategory = e => {
    if (e.target.checked) {
      setCategorys([...categoryList]);
    } else {
      setCategorys([]);
    }
  };

  useEffect(() => {
    let newCategoryIndex = categorys.map(val => {
      if (categoryList.includes(val)) return categoryList.indexOf(val);
      return null;
    });
    if (newCategoryIndex.length === 0) newCategoryIndex = [13];
    handleSearchConditions("studyCategoryId", newCategoryIndex);
  }, [categorys]);

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
            {placeList.map(item => (
              <label htmlFor={item} key={item}>
                <input
                  id={item}
                  value={item}
                  name="place"
                  type="radio"
                  defaultChecked={item === "전체 "}
                  onChange={e =>
                    handleSearchConditions("studyType", e.target.value)
                  }
                />
                {item}
              </label>
            ))}
          </div>
        </div>
        <div className="condition__category flex">
          <p className="title">카테고리</p>
          <div className="options flex align-center">
            <label htmlFor="전체">
              <input
                id="전체"
                value="전체"
                name="category"
                type="checkbox"
                checked={
                  categorys.length === 0 ? false : categorys.length === 12
                }
                onChange={handleAllCategory}
              />
              전체
            </label>
            {categoryList.map(category => (
              <label htmlFor={category} key={category}>
                <input
                  id={category}
                  value={category}
                  name="category"
                  type="checkbox"
                  checked={categorys.includes(category)}
                  onChange={handleSetCategory}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        <div className="condition__period">
          <p className="title">스터디기간</p>
          <input
            type="date"
            onClick={showCalPicker}
            onChange={e => handleSearchConditions("startDate", e.target.value)}
            value={searchConditions.startDate}
          />
          <p className="tilde">~</p>
          <input
            type="date"
            onClick={showCalPicker}
            onChange={e => handleSearchConditions("endDate", e.target.value)}
            value={searchConditions.endDate}
          />
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
            onChange={e => handleSearchConditions("studyTitle", e.target.value)}
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
          <p className="list-up__cnt--emp fs-16 notoMid">{studyCount}</p>
          <p className="list-up__cnt fs-16 notoMid">개</p>
          <select
            className="list-up__selector notoMid fs-16"
            name="selector"
            onChange={e => handleSearchConditions("orderType", e.target.value)}
            value={searchConditions.order}
          >
            <option value="studyLike">좋아요순</option>
            <option value="studyView">조회수순</option>
            <option value="studyRegistdate">등록일순</option>
          </select>
        </header>
        <CarouselStudyList
          searchConditions={searchConditions}
          handleStudyCount={setStudyCount}
        />
      </div>
    </div>
  );
}

export default StudyList;
