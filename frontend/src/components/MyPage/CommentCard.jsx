import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Avatar } from "@images/Avatar.svg";

import "./CommentCard.scss";

function CommentCard({ comment: { name, content, writer, date } }) {
  return (
    <div className="post-card">
      <p className="notoMid fs-22 title">{name}</p>
      <p className="notoMid fs-16 content">{content}</p>
      <div className="post-card-footer roReg fs-12">
        <div className="post-card-footer-item">
          <Avatar className="avatar" />
          <p>{writer}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default CommentCard;
