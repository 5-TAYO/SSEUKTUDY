import React, { useState, useEffect } from "react";
import "./StudyDetail.scss";
import LeftArrowIcon from "@images/Left-Arrow.svg";
import UserDuumyIcon from "@images/Profile.svg";
import getCounts from "@utils/getCounts";
import ViewIcon from "@images/View.svg";
import RedLikeIcon from "@images/Like_Red.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import Comment from "@components/StudyDetail/Comment";
import { v4 as uuid } from "uuid";
import SideStudyList from "../components/StudyDetail/SideStudyList";

function StudyDetail() {
  const [studyInfo, setStudyInfo] = useState();
  useEffect(() => {
    // 초기에 정보 받아오기
    setStudyInfo({
      studyType: "오프라인",
      studyPlace: "경기도 성남시 분당구 판교역",
      studyUserMin: 4,
      studyUserMax: 8,
      studyStartDate: "2022-04-29",
      studyEndDate: "2022-05-22"
    });
  }, []);
  const navi = useNavigate();
  const { id: studyId } = useParams();
  const dummy = [
    {
      userName: "정민",
      regDate: "2022-04-27 18:31:31",
      desc: "혹시 모집완료됐나요?"
    },
    {
      userName: "정민",
      regDate: "2022-04-27 18:35:13",
      desc: "혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?혹시 모집완료됐나요?"
    },
    {
      userName: "정민",
      regDate: "2022-04-27 18:55:31",
      desc: "예?"
    }
  ];
  const sideDummy = [
    {
      title: "개발",
      studyList: [
        { id: 1, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 2, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 3, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 4, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 5, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 6, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 7, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        {
          id: 8,
          name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?11132131111321311113213111132131"
        }
      ]
    },
    {
      title: "최근 가장",
      studyList: [
        { id: 1, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 2, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 3, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 4, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 5, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 6, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 7, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" },
        { id: 8, name: "네이버 갈까요? 토스 갈까요? 카카오 갈까요?" }
      ]
    }
  ];
  return (
    <div id="study-detail" className="flex">
      <aside>
        <button type="button" onClick={() => navi(-1)}>
          <img src={LeftArrowIcon} alt="뒤로가기" className="back-btn" />
        </button>
      </aside>
      <article>
        <header className="header">
          <p className="title notoBold fs-24">
            네카라쿠배
            네카라쿠배네카라쿠배네카라쿠배네카라쿠배네카라쿠배네카라쿠배
            네카라쿠배네카라쿠배네카라쿠배 ----{studyId}번째글!!
          </p>
          <div className="info flex align-center">
            <div className="user flex align-center">
              <img src={UserDuumyIcon} alt="유저더미" className="user__img" />
              <p className="user__name notoMid fs-16">JinHoJJang</p>
            </div>
            <p className="deadline notoReg fs-16">마감일 : 2022-04-29</p>
          </div>
        </header>
        <main>
          <p className="study-info-title notoMid fs-20">스터디 정보</p>
          {studyInfo && (
            <div className="study-info">
              <div className="flex info-line">
                <p className="info-line__title notoMid fs-14">유형</p>
                <p className="info-line__data notoReg fs-14">
                  {studyInfo.studyType}
                </p>
              </div>
              <div className="flex info-line">
                <p className="info-line__title notoMid fs-14">장소</p>
                <p className="info-line__data notoReg fs-14">
                  {studyInfo.studyPlace}
                </p>
              </div>
              <div className="flex info-line">
                <p className="info-line__title notoMid fs-14">인원</p>
                <p className="info-line__data notoReg fs-14">
                  최소 {studyInfo.studyUserMin} / 최대 {studyInfo.studyUserMax}{" "}
                  명
                </p>
              </div>
              <div className="flex info-line">
                <p className="info-line__title notoMid fs-14">기간</p>
                <p className="info-line__data notoReg fs-14">
                  {studyInfo.studyStartDate} ~ {studyInfo.studyEndDate}
                </p>
              </div>
            </div>
          )}
          <p className="study-detail notoReg fs-15">
            스터디 내용 : 스터디 소개 : 네카라쿠배말고 취업잘하고 싶다!! 스터디
            규칙: 잔디 안심는 놈 처벌 주의사항: 빠지지 말자
            ....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
          </p>
          <div className="flex justify-center">
            <Link
              className="regist-btn flex align-center justify-center notoMid fs-16"
              to="/study/regist"
            >
              신청하기
            </Link>
          </div>
          <div className="icon-container flex align-center">
            <img className="icon" src={RedLikeIcon} alt="좋아요수" />
            <div className="icon-cnt fs-12 roReg">{getCounts(1231231213)}</div>
            <img className="icon" src={ViewIcon} alt="조회수" />
            <div className="icon-cnt fs-12 roReg">{getCounts(9999999)}</div>
          </div>
        </main>
        <footer>
          <p className="title notoBold fs-16">2222개의 댓글이 있습니다.</p>
          <div className="comment flex">
            <img
              src={UserDuumyIcon}
              alt="유저더미"
              className="comment__user-img"
            />
            <input type="text" className="comment__input" />
            <button
              type="button"
              className="comment__regist-btn notoBold fs-16 "
            >
              등록
            </button>
          </div>
          {dummy.map(comment => (
            <Comment data={comment} key={uuid()} />
          ))}
        </footer>
      </article>
      <aside>
        {sideDummy.map(studyDummy => (
          <SideStudyList data={studyDummy} key={uuid()} />
        ))}
      </aside>
    </div>
  );
}

export default StudyDetail;
