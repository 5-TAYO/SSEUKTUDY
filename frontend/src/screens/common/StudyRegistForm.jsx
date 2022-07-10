import React, { useState, useEffect, useCallback } from "react";
import "./StudyRegistForm.scss";
import { useNavigate, useParams } from "react-router-dom";
import LeftArrowIcon from "@images/Left-Arrow.svg";
import UserDuumyIcon from "@images/Profile.svg";
// import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import { getUserInfo } from "@apis/user";
import { getStudyPreQuestions, joinStudy, getStudyMembers } from "@apis/member";
import PreQuestion from "../../components/common/PreQuestion";
import LimitedTextarea from "../../components/common/LimitedTextarea";

function StudyRegistForm({ type }) {
  const navi = useNavigate();
  const { studyId } = useParams();
  const { userId } = useParams();
  const [form, setForm] = useState({});
  const [preQuestions, setPreQuestions] = useState();

  const handleAnswers = useCallback((id, answer) => {
    setForm(prev => ({
      ...prev,
      preQuestions: { ...prev.preQuestions, [id]: answer }
    }));
  }, []);

  const handleIntro = useCallback(content => {
    setForm(prev => ({ ...prev, userIntroduction: content }));
  });

  const submitForm = async () => {
    let allAnswer = true;
    const keys = Object.keys(form.preQuestions);
    for (let i = 0; i < keys.length; ) {
      if (form.preQuestions[keys[i]] === "") allAnswer = false;
      i += 1;
    }
    if (form.userIntroduction === "") allAnswer = false;
    if (allAnswer) {
      const res = await joinStudy(form);
      if (res === "SUCCESS") {
        console.log("등록 성공!!");
        // 라우팅 해주세용--! 어디로 할까요..
      }
    }
  };
  useEffect(() => {
    async function getUserData() {
      const { userInfo } = await getUserInfo();
      return userInfo;
    }
    async function getPreQ() {
      const res = await getStudyPreQuestions(studyId);
      return res.data;
    }

    async function joinInit() {
      const res = await Promise.all([getUserData(), getPreQ()]);
      const [userInfo, studyPreQuestions] = res;
      const initAnswers = {};
      studyPreQuestions.forEach(preQ => {
        initAnswers[preQ.questionId] = "";
      });
      setForm({
        ...form,
        studyId,
        userId: userInfo.userId,
        userNickname: userInfo.userNickname,
        preQuestions: initAnswers
      });
      setPreQuestions(studyPreQuestions);
    }

    async function readInit() {
      const res = await getStudyMembers(studyId);
      const data = res.find(
        member => member.userId === userId && member.studyId === studyId * 1
      );
      setForm({
        ...form,
        userId: data.userId,
        userNickname: data.userNickname,
        userIntroduction: data.userIntroduction
      });
      setPreQuestions(data.questionInfoAnswerDtos);
    }

    if (type === "regist") {
      joinInit();
    } else {
      readInit();
    }
  }, []);

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
        <div className="user__name notoBold fs-24">{form.userNickname}</div>
      </div>
      <p className="type notoBold fs-16">아이디</p>
      <input
        className="notoReg fs-15"
        type="text"
        defaultValue={form.userId}
        disabled={type === "regist"}
        readOnly
      />
      <p className="type notoBold fs-16">닉네임</p>
      <input
        className="notoReg fs-15"
        type="text"
        defaultValue={form.userNickname}
        disabled={type === "regist"}
        readOnly={type === "read"}
      />
      <p className="type notoBold fs-16">자기소개</p>
      <LimitedTextarea
        readOnly={type === "read"}
        maxCnt={30}
        setIntro={handleIntro}
        initValue={form.userIntroduction}
      />
      <p className="type question-title notoBold fs-16">사전 질문 답변</p>
      {preQuestions &&
        preQuestions.map((ques, i) => (
          <PreQuestion
            order={i + 1}
            key={ques.questionId}
            question={ques.questionContent}
            questionId={ques.questionId}
            type={type}
            setAnswer={handleAnswers}
            questionAnswer={ques.questionAnswer}
          />
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
        <button
          type="button"
          className="apply-btn btn notoMid fs-16"
          onClick={submitForm}
        >
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
