import React from "react";
import NoContent from "../common/NoContent";
import WithSideLayout from "../common/WithSideLayout";

import "./StudyManagement.scss";

function StudyManagement() {
  const headerTitle = "스터디 관리";
  const studyList = [
    {
      id: "0",
      name: "프론트 부수기",
      category: ["개발", "코딩", "js"],
      headCount: 0,
      state: "모집중",
      members: [
        {
          id: "jmlee9707",
          state: "대기중",
          role: "지원자"
        }
      ]
    }
  ];
  return (
    <WithSideLayout title={headerTitle}>
      {studyList.length > 0 ? (
        <div className="study-list">
          <div className="study-list-header notoMid fs-14">
            <p>스터디 이름</p>
            <p>카테고리</p>
            <p>인원</p>
            <p>상태</p>
            <p>수정</p>
          </div>
          {studyList.map(study => (
            <div className="study notoReg fs-13" key={study.id}>
              <p>{study.name}</p>
              <p>{study.category.join(",")}</p>
              <p>{study.headCount}</p>
              <p>{study.state}</p>
              <div className="actions">
                <button type="button">수정하기</button>
                <button type="button">스터디 삭제</button>
              </div>
            </div>
          ))}
          <hr className="divider" />

          <div className="subheader">
            <h2 className="notoMid fs-28">스터디원 관리</h2>
          </div>
          <div className="member-list">
            <div className="member-list-header notoMid fs-14">
              <p>스터디 이름</p>
              <p>아이디</p>
              <p>역할</p>
              <p>상태</p>
              <p>행동</p>
            </div>
            {studyList.map(study =>
              study.members.map(member => (
                <div className="member  notoReg fs-13" key={member.id}>
                  <p>{study.name}</p>
                  <p>{member.id}</p>
                  <p>{member.role}</p>
                  <p>{member.state}</p>
                  <div className="actions">
                    <button type="button">쪽지 보내기</button>
                    <button type="button">지원서 열람하기</button>
                  </div>
                </div>
              ))
            )}
          </div>
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
export default StudyManagement;
