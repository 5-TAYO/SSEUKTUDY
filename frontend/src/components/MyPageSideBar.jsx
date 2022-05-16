import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Avatar } from "../assets/images/Avatar.svg";
import "./MyPageSideBar.scss";

function MyPageSideBar() {
  return (
    <div className="mypage-sidebar">
      <div className="profile">
        <Avatar className="profile-mini-img" />
        <div className="name fs-24">이정민</div>
        <div className="email fs-12">jmlee907@nate.com</div>
        <div className="email fs-12">프로필 수정</div>
      </div>
      <div className="menu">
        <div className="menu-title fs-16">쪽지함</div>
        <hr />
        <div className="sub-menu">
          <NavLink to="/" className="sub-menu-title fs-13">
            받은 쪽지함
          </NavLink>
          <NavLink to="/" className="sub-menu-title  fs-13">
            보낸 쪽지함
          </NavLink>
        </div>
        <hr />
        <div className="sub-menu">
          <NavLink to="/MyPage" className="sub-menu-title  fs-13">
            스터디 단체 쪽지함
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default MyPageSideBar;
