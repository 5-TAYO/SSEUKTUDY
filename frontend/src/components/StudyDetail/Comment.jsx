/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from "react";
import "./Comment.scss";
import UserDuumyIcon from "@images/Profile.svg";
import PropTypes from "prop-types";
import ReCommentArrow from "@images/ReCommentArrow.svg";
import CommentIcon from "@images/Comment.svg";
import CommentInput from "@components/StudyDetail/CommentInput";
import SendLetterModal from "@components/Letters/SendLetterModal";

function Comment({
  data: {
    upCommentId,
    userNickname,
    modifyTime,
    registTime,
    commentDetail,
    studyId,
    getStudyInfo,
    commentId,
    userId
  }
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
        {upCommentId === 0 && (
          <button
            type="button"
            className="reply-btn fs-15 notoMid flex align-center"
            onClick={() => setOpenInput(!openInput)}
          >
            <img src={CommentIcon} alt="답글달기" /> 답글 달기
          </button>
        )}

        {openInput && (
          <CommentInput
            studyId={studyId}
            upCommentId={commentId}
            getStudyInfo={getStudyInfo}
          />
        )}
        <button
          id="tooltip"
          type="button"
          className="flex align-center justify-center notoMid fs-14"
          ref={tooltipRef}
          onClick={() => setOpenModal(true)}
        >
          쪽지보내기
        </button>
        <SendLetterModal
          open={openModal}
          close={() => setOpenModal(false)}
          target={userId}
        />
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
      PropTypes.array
    ])
  ).isRequired
};
export default Comment;
