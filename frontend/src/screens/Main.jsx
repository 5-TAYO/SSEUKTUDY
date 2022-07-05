import React from "react";

import "./Main.scss";
import { Link } from "react-router-dom";
import StudyCardList from "@components/Main/StudyCardList";
import { categoryList } from "@utils/studyConditions";

function Main() {
  const userLikeDummy = [[1], [5]];
  return (
    <div id="main">
      <div className="banner flex">
        <div className="banner-info">
          <p className="banner-info__desc notoBold fs-40">
            나한테 딱 맞는 스터디
            <br />
            스윽터디에서!
          </p>
          <Link
            to="/study/list"
            className="banner-info__btn--move-list notoBold flex align-center justify-center fs-22"
          >
            스터디 구경 가기
          </Link>
        </div>
        <div className="banner-chat flex column align-center justify-center">
          <div className="banner-chats flex column">
            <p className="banner-chats__item flex align-center justify-center notoMid">
              영어 공부좀 하고 싶은데..
            </p>
            <p className="banner-chats__item flex align-center justify-center notoMid">
              괜찮은 스터디 어디서 찾지?
            </p>
            <p className="banner-chats__item flex align-center justify-center notoMid">
              ㅠㅠㅠㅠ
            </p>
          </div>
          <div className="banner-chat-bg">STUDY</div>
        </div>
      </div>
      <main>
        <StudyCardList
          title="지금 인기있는 스터디"
          searchConditions={{
            studyCategoryId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            orderType: "studyView", //
            // orderType: "studyLike",//__fix
            startItem: 0,
            itemCnt: 6
          }}
        />
        <StudyCardList
          title="따끈따근 최근에 생성된 스터디"
          searchConditions={{
            studyCategoryId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            orderType: "studyRegistdate", //
            startItem: 0,
            itemCnt: 6
          }}
        />
        {userLikeDummy &&
          userLikeDummy.map(userLike => {
            const userLikeTitle = `내가 관심있는 ${categoryList[userLike]}스터디`;
            return (
              <StudyCardList
                title={userLikeTitle}
                searchConditions={{
                  studyCategoryId: userLike,
                  orderType: "studyLike", //
                  startItem: 0,
                  itemCnt: 6
                }}
              />
            );
          })}
      </main>
    </div>
  );
}

export default Main;
