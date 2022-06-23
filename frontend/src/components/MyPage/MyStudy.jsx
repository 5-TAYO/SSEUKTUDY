import React from "react";

import NoContent from "../common/NoContent";
import WithSideLayout from "../common/WithSideLayout";
import "./MyStudy.scss";

function MyStudy() {
  const headerTitle = "나의 스터디";
  const studyList = [
    {
      id: "0",
      name: "프론트 부수기",
      category: ["개발", "코딩", "js"],
      headCount: 0,
      startDate: "2020.02.11",
      endDate: "2022.09.11",
      place: "온라인",
      state: "모집중"
    },
    {
      id: "1",
      name: "프론트 부수기",
      category: ["개발", "코딩", "js"],
      headCount: 0,
      startDate: "2020.02.11",
      endDate: "2022.09.11",
      place: "온라인",
      state: "모집중"
    }
  ];
  return (
    <WithSideLayout title={headerTitle}>
      <div className="my-study-header">
        <button
          className="my-study-header-item notoMid fs-14 active"
          type="button"
        >
          전체
        </button>
        <button className="my-study-header-item notoMid fs-14" type="button">
          진행중인 스터디
        </button>
        <button className="my-study-header-item notoMid fs-14" type="button">
          종료된 스터디
        </button>
      </div>

      {studyList.length > 0 ? (
        <div className="my-study-list">
          {studyList.map(study => (
            <div className="my-study-card fs-12" key={study.id}>
              <div className="my-study-card-info">
                <p className="category notoMid">{study.category.join(" / ")}</p>
                <p className="title notoMid fs-22">{study.name}</p>
              </div>
              <div className="divider" />
              <div className="my-study-card-info">
                <p className="duration">
                  스터디 기간 : {study.startDate} ~ {study.endDate}
                </p>
                <p className="place">스터디 장소 : {study.place}</p>
              </div>
              <div className="divider" />
              <div className="my-study-card-info">
                <p className="headcount">참여 인원 : {study.headCount}</p>
                <div>
                  현재 상태 : <span className="state">{study.state}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoContent
          msg="관리할 스터디가 존재하지 않습니다"
          btnMsg="추천 스터디 보러가기"
        />
      )}
    </WithSideLayout>
  );
}
export default MyStudy;
