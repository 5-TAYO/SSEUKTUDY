import React from "react";
import WithSideLayout from "../common/WithSideLayout";

import "./Index.scss";

function Index() {
  const headerTitle = "나의 활동";
  return (
    <WithSideLayout title={headerTitle}>
      <div className="activity">
        <div className="activity-item">
          <p className="cnt roBold  fs-36">0</p>
          <p className="activity-item-title notoMid fs-14">내가 쓴 글</p>
        </div>
        <div className="divider" />
        <div className="activity-item">
          <p className="cnt roBold  fs-36">0</p>
          <p className="activity-item-title notoMid fs-14">내가 쓴 댓글</p>
        </div>
        <div className="divider" />
        <div className="activity-item">
          <p className="cnt roBold  fs-36">0</p>
          <p className="activity-item-title notoMid fs-14">좋아요 한 글</p>
        </div>
      </div>
    </WithSideLayout>
  );
}

export default Index;
