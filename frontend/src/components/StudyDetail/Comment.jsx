/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from "react";
import "./Comment.scss";
import UserDuumyIcon from "@images/Profile.svg";
import PropTypes from "prop-types";

function Comment({ data: { userName, regDate, desc } }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useRef();

  const clickUserInfo = e => {
    if (tooltipVisible) {
      tooltipRef.current.style.display = "none";
      setTooltipVisible(false);
    } else {
      tooltipRef.current.style.display = "flex";
      setTooltipVisible(true);
      tooltipRef.current.style.top = `${e.clientY + window.pageYOffset}px`;
      tooltipRef.current.style.left = `${e.clientX + window.pageXOffset}px`;
    }
  };

  return (
    <div id="comment">
      <header className="flex">
        <img
          className="user-img"
          src={UserDuumyIcon}
          alt="유저더미"
          onClick={clickUserInfo}
        />
        <div className="user-info flex column">
          <p
            className="user-info__user-name notoBold fs-14"
            onClick={clickUserInfo}
          >
            {userName}
          </p>
          <p className="user-info__reg-date notoMid fs-13">{regDate}</p>
        </div>
      </header>
      <p className="desc notoMid fs-15">{desc}</p>
      <div
        id="tooltip"
        className="flex align-center justify-center notoMid fs-14"
        ref={tooltipRef}
      >
        쪽지보내기
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};
export default Comment;
