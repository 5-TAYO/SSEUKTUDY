import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import LeftArrowIcon from "@images/Left-Arrow.svg";
import { useNavigate } from "react-router-dom";

import "./StudyCreateForm.scss";

function StudyForm({ type }) {
  const navi = useNavigate();
  const placeList = ["온라인", "오프라인", "온/오프라인"];
  const [placeOption, setPlaceOption] = useState("온라인");
  return (
    <div className="study-regist-form flex column align-center">
      <button type="button" onClick={() => navi(-1)} className="back-btn">
        <img src={LeftArrowIcon} alt="뒤로가기" className="back-btn__img" />
      </button>
      <p className="title flex justify-center notoBold fs-28">
        스터디 {type === "create" ? " 개설" : "수정"}하기
      </p>
      <p className="type notoBold fs-16">스터디명</p>
      <input
        className="notoReg fs-15"
        type="text"
        placeholder="스터디 이름을 정해주세요 (최대 15자)"
        maxLength={15}
      />
      <p className="type notoBold fs-16">스터디 소개글</p>
      <input
        className="notoReg fs-15"
        type="text"
        placeholder="스터디원을 모집할 소개글을 작성해주세요 (최대 30자)"
        maxLength={30}
      />
      <p className="type notoBold fs-16">카테고리</p>
      <input
        className="notoReg fs-15"
        type="text"
        placeholder="스터디의 카테고리를 설정해주세요"
        maxLength={15}
      />
      <p className="type notoBold fs-16">목표</p>
      <input
        className="notoReg fs-15"
        type="text"
        placeholder="스터디 이름을 입력해주세요 (최대 15자)"
        maxLength={15}
      />
      <p className="type notoBold fs-16">온/오프라인 구분</p>
      <div className="options flex align-center notoReg fs-15">
        {placeList.map(place => (
          <label htmlFor={place} key={place} className="fs-15">
            <input
              id={place}
              value={place}
              name="place"
              type="radio"
              defaultChecked={place === "온라인"}
              onChange={e => setPlaceOption(e.target.value)}
            />
            {place}
          </label>
        ))}
      </div>
      {placeOption.includes("오프라인") && (
        <>
          <p className="type notoBold fs-16">모임장소</p>
          <input
            className="notoReg fs-15"
            type="text"
            placeholder="장소를 선택해주세요"
            maxLength={15}
            readOnly
          />
        </>
      )}
      <p className="type notoBold fs-16">모임 인원</p>
      <div className="headcount">
        <label htmlFor="max-headcount" className="notoReg fs-15">
          최소
          <select id="max-headcount" className="notoReg fs-15">
            {Array.from({ length: 20 }, (v, i) => i + 1).map(v => (
              <option value={v} key={uuid()}>
                {v}명
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="max-headcount" className="notoReg fs-15">
          최대
          <select id="max-headcount" className="notoReg fs-15">
            {Array.from({ length: 20 }, (v, i) => i + 1).map(v => (
              <option value={v} key={uuid()}>
                {v}명
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="type notoBold fs-16">스터디 기간</p>
      <input
        className="notoReg fs-15"
        type="text"
        placeholder="스터디 진행 기간을 설정해주세요"
        maxLength={15}
      />
      <p className="type notoBold fs-16">스터디 소개</p>
      <textarea
        className="self-intro fs-15"
        rows="8"
        // onChange={e => setSelfIntroCnt(e.target.value.length)}
        readOnly={type === "read"}
      />
      <p className="type notoBold fs-16">사전 질문</p>
      <div className="pre-questions">
        <div className="question">
          <label htmlFor="q1" className="notoMid fs-16">
            <p>질문1</p>
            <input
              id="q1"
              type="text"
              className="fs-15"
              placeholder="신청자에게 물어보고 싶은 질문을 입력해주세요"
            />
          </label>
          <button type="button" className="fs-12">
            삭제
          </button>
        </div>
        <div className="question-plus fs-15">
          <div className="button plus" href="#plus">
            <span className="bg" id="plus" />
            <span className="symbol" />
          </div>
          <p>사전 질문을 추가해주세요</p>
        </div>
      </div>
      {type === "create" ? (
        <button type="button" className="accept-btn btn notoMid fs-16">
          개설 하기
        </button>
      ) : (
        <>
          <button type="button" className="apply-btn btn notoMid fs-16">
            수정 완료
          </button>
          <button type="button" className="apply-btn btn notoMid fs-16">
            스터디 삭제
          </button>
        </>
      )}
    </div>
  );
}

StudyForm.propTypes = {
  type: PropTypes.string.isRequired
};

export default StudyForm;
