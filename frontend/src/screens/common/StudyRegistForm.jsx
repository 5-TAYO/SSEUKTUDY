import React, { useState } from "react";
import "./StudyRegistForm.scss";
import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "@images/Left-Arrow.svg";
import UserDuumyIcon from "@images/Profile.svg";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import PreQuestion from "../../components/common/PreQuestion";

function StudyRegistForm({ type }) {
  const navi = useNavigate();
  const [selfIntroCnt, setSelfIntroCnt] = useState(0);
  const dummyQue = ["질문111111", "네카라갈수있?", "SKT VS KAKAO"];
  return (
    <div id="study-regist-form" className="flex column align-center">
      <button type="button" onClick={() => navi(-1)} className="back-btn">
        <img src={LeftArrowIcon} alt="뒤로가기" className="back-btn__img" />
      </button>
      <p className="title flex justify-center notoBold fs-28">
        스터디 {type === "read" ? "열람" : "신청"}하기
      </p>
      <div className="user">
        <img src={UserDuumyIcon} alt="유저더미" className="user__img" />
        <div className="user__name notoBold fs-24">이정민</div>
      </div>
      <p className="type notoBold fs-16">이메일</p>
      <input
        className="notoReg fs-15"
        type="text"
        defaultValue="jinhoJJANG@naver.com"
        disabled={type === "regist"}
        readOnly
      />
      <p className="type notoBold fs-16">닉네임</p>
      <input
        className="notoReg fs-15"
        type="text"
        defaultValue="jinhoJJANG"
        readOnly={type === "read"}
      />
      <p className="type notoBold fs-16">자기소개</p>
      <textarea
        className="self-intro fs-15"
        rows="8"
        onChange={e => setSelfIntroCnt(e.target.value.length)}
        readOnly={type === "read"}
      />
      <p className="self-intro-cnt notoLight fs-12">{selfIntroCnt} / 300</p>
      <p className="type question-title notoBold fs-16">사전 질문 답변</p>
      {dummyQue.map((q, i) => (
        <PreQuestion order={i + 1} question={q} key={uuid()} type={type} />
      ))}
      {type === "read" ? (
        <>
          <button type="button" className="accept-btn btn notoMid fs-16">
            수락 하기
          </button>
          <button type="button" className="refuse-btn btn notoMid fs-16">
            거절 하기
          </button>
        </>
      ) : (
        <button type="button" className="apply-btn btn notoMid fs-16">
          신청 하기
        </button>
      )}
    </div>
  );
}

StudyRegistForm.propTypes = {
  type: PropTypes.string.isRequired
};

export default StudyRegistForm;
