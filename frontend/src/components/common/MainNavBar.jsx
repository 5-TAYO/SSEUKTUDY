import React from "react";
import { Link } from "react-router-dom";

function MainNavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/letters">쪽지함</Link>
      <Link to="/mypage">마이페이지</Link>
    </div>
  );
}

export default MainNavBar;
