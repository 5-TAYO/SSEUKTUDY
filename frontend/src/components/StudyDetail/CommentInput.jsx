import React, { useEffect, useRef } from "react";
import "./CommentInput.scss";
import UserDuumyIcon from "@images/Profile.svg";
import PropTypes from "prop-types";
import { createComment } from "@apis/comment";

function CommentInput({ studyId, upCommentId, getStudyInfo }) {
  const commentInput = useRef();

  const autoResizeTextarea = () => {
    if (commentInput) {
      commentInput.current.style.height = 0;
      const height = commentInput.current.scrollHeight;
      commentInput.current.style.height = `${height + 2}px`; // fix__
    }
  };

  useEffect(() => {
    if (commentInput.current && commentInput.current.value !== "") {
      commentInput.current.value = "";
      autoResizeTextarea();
    }
  }, []);

  const onClickRegistBtn = async () => {
    const res = await createComment({
      studyId,
      upCommentId,
      commentDetail: commentInput.current.value
    });
    commentInput.current.value = "";
    autoResizeTextarea();

    if (res === "SUCCESS") {
      getStudyInfo();
    }
  };
  return (
    <div className="comment-input flex">
      <img
        src={UserDuumyIcon}
        alt="유저더미"
        className="comment-input__user-img"
      />
      <textarea
        onChange={autoResizeTextarea}
        className="comment-input__input fs-16 notoMid"
        ref={commentInput}
      />
      <button
        type="button"
        className="comment-input__regist-btn notoBold fs-16"
        onClick={onClickRegistBtn}
      >
        등록
      </button>
    </div>
  );
}

CommentInput.defaultProps = {
  upCommentId: null,
  getStudyInfo: null
};

CommentInput.propTypes = {
  studyId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  upCommentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getStudyInfo: PropTypes.func
};

export default CommentInput;
