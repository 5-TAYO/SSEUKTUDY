import React, { useState } from "react";
import "./StudyRegistForm.scss";
import { useNavigate } from "react-router-dom";
import LeftArrowIcon from "@images/Left-Arrow.svg";
import UserDuumyIcon from "@images/Profile.svg";

function StudyRegistForm() {
  const navi = useNavigate();
  const [selfIntroCnt, setSelfIntroCnt] = useState(0);

  return (
    <div id="study-regist-form" className="flex column align-center">
      <button type="button" onClick={() => navi(-1)} className="back-btn">
        <img src={LeftArrowIcon} alt="뒤로가기" className="back-btn__img" />
      </button>
      <p className="title flex justify-center notoBold fs-28">
        스터디 신청하기
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
        disabled
      />
      <p className="type notoBold fs-16">닉네임</p>
      <input className="notoReg fs-15" type="text" defaultValue="jinhoJJANG" />
      <p className="type notoBold fs-16">자기소개</p>
      <textarea
        className="self-intro fs-15"
        rows="8"
        onChange={e => setSelfIntroCnt(e.target.value.length)}
      />
      <p className="self-intro-cnt notoLight fs-12">{selfIntroCnt} / 300</p>
      <p className="type notoBold fs-16">사전 질문 답변</p>
    </div>
  );
}

export default StudyRegistForm;
