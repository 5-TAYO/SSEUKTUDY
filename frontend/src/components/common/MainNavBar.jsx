import React from "react";
import { Link } from "react-router-dom";

function MainNavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/MyPage">Login</Link>
    </div>
  );
}

export default MainNavBar;
