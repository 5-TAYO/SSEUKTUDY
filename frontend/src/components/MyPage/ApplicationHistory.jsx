import React from "react";
import WithSideLayout from "../common/WithSideLayout";

import "./ApplicationHistory.scss";

function ApplicationHistory() {
  const headerTitle = "스터디 신청 내역";
  const applicationList = [
    {
      id: "0",
      name: "수락 대기중인 스터디1",
      date: "22-04-27 [23:22]"
    },
    {
      id: "1",
      name: "수락 대기중인 스터디2",
      date: "22-04-29 [23:22]"
    }
  ];
  return (
    <WithSideLayout
      title={headerTitle}
      headerComponent={
        <div>
          <button type="button">취소</button>
        </div>
      }
    >
      <div className="application-list ">
        <div className="application-list-header notoMid fs-14">
          <div>
            <input type="checkbox" />
          </div>
          <p>스터디 이름</p>
          <p>신청 날짜</p>
        </div>
        {applicationList.map(application => (
          <div className="application notoReg fs-13" key={application.id}>
            <div>
              <input type="checkbox" />
            </div>
            <p className="application-name">{application.name}</p>
            <p>{application.date}</p>
          </div>
        ))}
      </div>
    </WithSideLayout>
  );
}
export default ApplicationHistory;
