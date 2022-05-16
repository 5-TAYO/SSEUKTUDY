import React from "react";

function MyPageSideBar() {
  return (
    <div>
      <div className="profile-mini">
        <div className="profile-mini-img">asdd</div>
        <div className="name">이정민</div>
        <div className="email">jmlee907@nate.com</div>
      </div>
      <div className="menu">
        <div className="menu-title">쪽지함</div>
        <div className="sub-menu">
          <div className="sub-mneu-title">받은 쪽지함</div>
          <div className="sub-mneu-title">보낸 쪽지함</div>
          <div className="sub-mneu-title">스터디 단체 쪽지함</div>
        </div>
      </div>
    </div>
  );
}
export default MyPageSideBar;
