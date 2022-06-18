import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Avatar } from "@images/Avatar.svg";
import "./LettersSideBar.scss";

function LettersSideBar() {
  return (
    <div className="letters-sidebar notoMid">
      <div className="profile">
        <Avatar className="profile-mini-img" />
        <h2 className="name fs-24 notoBold">이정민</h2>
        <p className="email fs-12">jmlee907@nate.com</p>
        <p className="edit fs-12">프로필 수정</p>
      </div>
      <div className="menu">
        <h3 className="menu-title fs-16">쪽지함</h3>
        <hr />
        <div className="sub-menu">
          <NavLink to="recv" className="sub-menu-title fs-13">
            받은 쪽지함
          </NavLink>
          <NavLink to="send" className="sub-menu-title  fs-13">
            보낸 쪽지함
          </NavLink>
        </div>
        <hr />
        <div className="sub-menu">
          <NavLink to="study" className="sub-menu-title  fs-13">
            스터디 단체 쪽지함
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default LettersSideBar;
