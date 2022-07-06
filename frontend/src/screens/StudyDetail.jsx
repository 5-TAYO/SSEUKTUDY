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
import { getStudyDetail } from "@apis/study";
import { categoryList } from "@utils/studyConditions";
import SideStudyList from "@components/StudyDetail/SideStudyList";
import CommentInput from "@components/StudyDetail/CommentInput";

function StudyDetail() {
  const [studyInfo, setStudyInfo] = useState();
  const [commentInfoList, setCommentInfoList] = useState();
  const navi = useNavigate();
  const { id: studyId } = useParams();

  const getStudyInfo = async () => {
    const data = await getStudyDetail(studyId);
    setStudyInfo(data.studyInfoDto);
    setCommentInfoList(data.commentInfoList);
  };

  useEffect(() => {
    getStudyInfo();
    // 초기에 정보 받아오기
  }, [studyId]);

  return (
    <div id="study-detail" className="flex">
      <aside>
        <button type="button" onClick={() => navi(-1)}>
          <img src={LeftArrowIcon} alt="뒤로가기" className="back-btn" />
        </button>
      </aside>
      <article>
        <header className="header">
          {studyInfo && (
            <>
              <p className="title notoBold fs-24">{studyInfo.studyTitle}</p>
              <div className="info flex align-center">
                <div className="user flex align-center">
                  <img
                    src={UserDuumyIcon}
                    alt="유저더미"
                    className="user__img"
                  />
                  <p className="user__name notoMid fs-16">
                    {studyInfo.studyLeaderId}
                  </p>
                </div>
                <p className="deadline notoReg fs-16">
                  마감일 : ---바인딩해주세요!!
                </p>
              </div>
            </>
          )}
        </header>
        {studyInfo && (
          <main>
            <p className="study-info-title notoMid fs-20">스터디 정보</p>
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
                  {studyInfo.studyStartdate} ~ {studyInfo.studyEnddate}
                </p>
              </div>
              <div className="flex info-line">
                <p className="info-line__title notoMid fs-14">목표</p>
                <p className="info-line__data notoReg fs-14">
                  {studyInfo.studyGoals}
                </p>
              </div>
              <div className="flex info-line">
                <p className="info-line__title notoMid fs-14">카테고리</p>
                <p className="info-line__data notoReg fs-14">
                  {categoryList[studyInfo.studyCategoryId]}
                </p>
              </div>
            </div>
            <p className="study-detail notoReg fs-15">
              {studyInfo.studyContent}
            </p>
            <div className="flex justify-center">
              <Link
                className="regist-btn flex align-center justify-center notoMid fs-16"
                to={`/study/join/${studyInfo.studyId}`}
              >
                신청하기
              </Link>
            </div>
            <div className="icon-container flex align-center">
              <img className="icon" src={RedLikeIcon} alt="좋아요수" />
              <div className="icon-cnt fs-12 roReg">
                {getCounts(`${studyInfo.studyLike}`)}
              </div>
              <img className="icon" src={ViewIcon} alt="조회수" />
              <div className="icon-cnt fs-12 roReg">
                {getCounts(`${studyInfo.studyView}`)}
              </div>
            </div>
          </main>
        )}
        {commentInfoList && (
          <footer>
            <p className="title notoBold fs-16">
              {studyInfo.studyCommentCount}개의 댓글이 있습니다.
            </p>
            <CommentInput
              studyId={studyInfo.studyId}
              getStudyInfo={getStudyInfo}
            />
            <div>
              {commentInfoList.map(comment => (
                <>
                  <Comment data={comment} key={uuid()} />
                  {comment.downComment &&
                    comment.downComment.map(recomment => (
                      <Comment data={recomment} key={uuid()} />
                    ))}
                </>
              ))}
            </div>
          </footer>
        )}
      </article>
      <aside>
        {studyInfo && (
          <>
            <SideStudyList title={categoryList[studyInfo.studyCategoryId]} />
            <SideStudyList title="가장" />
          </>
        )}
      </aside>
    </div>
  );
}

export default StudyDetail;
