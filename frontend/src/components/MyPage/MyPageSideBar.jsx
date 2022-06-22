import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Avatar } from "@images/Avatar.svg";
import "@components/Letters/LettersSideBar.scss";

function MyPageSideBar() {
  return (
    <div className="letters-sidebar notoMid">
      <div className="profile">
        <Avatar className="profile-mini-img" />
        <h2 className="name fs-24 notoBold">이정민</h2>
        <p className="email fs-12">jmlee907@nate.com</p>
        <p className="edit fs-12">프로필 수정</p>
      </div>
      <div className="menu">
        <h3 className="menu-title fs-16">마이페이지</h3>
        <hr />
        <div className="sub-menu">
          <NavLink to="mystudy" className="sub-menu-title fs-13">
            나의 스터디
          </NavLink>
          <NavLink to="community" className="sub-menu-title  fs-13">
            커뮤니티 활동
          </NavLink>
        </div>
        <hr />
        <div className="sub-menu">
          <NavLink to="info" className="sub-menu-title  fs-13">
            개인 정보 설정
          </NavLink>
          <NavLink to="history" className="sub-menu-title  fs-13">
            스터디 신청 내역
          </NavLink>
          <NavLink to="management" className="sub-menu-title  fs-13">
            스터디 관리
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default MyPageSideBar;
