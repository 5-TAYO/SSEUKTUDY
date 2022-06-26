import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderLogoImg from "@images/HeaderLogo.svg";
import "./MainNavBar.scss";

function MainNavBar() {
  const activeTabClassName = active => {
    const prefix = "left-nav__link fs-16 btn--";
    return active ? `${prefix}active` : `${prefix}unactive`;
  };
  return (
    <nav id="MainNavBar" className="flex align-center">
      <Link to="/">
        <img className="title" alt="스윽터디로고" src={HeaderLogoImg} />
      </Link>
      <div className="nav-container flex justify-space-between">
        <nav className="left-nav notoBold">
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/main"
          >
            홈
          </NavLink>
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/study/regist"
          >
            스터디개설
          </NavLink>
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/study/list"
          >
            스터디찾기
          </NavLink>
          <NavLink
            className={({ isActive }) => activeTabClassName(isActive)}
            to="/guide"
          >
            가이드
          </NavLink>
        </nav>
        <nav className="right-nav notoReg">
          <Link className="right-nav__link fs-16" to="/login">
            로그인
          </Link>
          <Link className="right-nav__link fs-16" to="/join">
            회원가입
          </Link>
        </nav>
      </div>
    </nav>
  );
}

export default MainNavBar;
