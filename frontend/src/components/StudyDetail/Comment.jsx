/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from "react";
import "./Comment.scss";
import UserDuumyIcon from "@images/Profile.svg";
import PropTypes from "prop-types";
import ReCommentArrow from "@images/ReCommentArrow.svg";

function Comment({
  data: { upCommentId, userNickname, modifyTime, registTime, commentDetail }
}) {
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
    <div className="flex">
      {upCommentId !== 0 && (
        <img className="recomment-arrow" src={ReCommentArrow} alt="대댓글" />
      )}
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
              {userNickname}
            </p>
            <p className="user-info__reg-date notoMid fs-13">
              {modifyTime ? `${modifyTime}+수정됨` : registTime}
            </p>
          </div>
        </header>
        <p className="desc notoMid fs-15">{commentDetail}</p>
        <div
          id="tooltip"
          className="flex align-center justify-center notoMid fs-14"
          ref={tooltipRef}
        >
          쪽지보내기
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired
};
export default Comment;
