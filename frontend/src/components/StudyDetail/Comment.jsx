import React from "react";
import "./Comment.scss";
import UserDuumyIcon from "@images/Profile.svg";
import PropTypes from "prop-types";

function Comment({ data: { userName, regDate, desc } }) {
  return (
    <div id="comment">
      <header className="flex">
        <img className="user-img" src={UserDuumyIcon} alt="유저더미" />
        <div className="user-info flex column">
          <p className="user-info__user-name notoBold fs-14">{userName}</p>
          <p className="user-info__reg-date notoMid fs-13">{regDate}</p>
        </div>
      </header>
      <p className="desc notoMid fs-15">{desc}</p>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};
export default Comment;
