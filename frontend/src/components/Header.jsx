import React from "react";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default Header;
