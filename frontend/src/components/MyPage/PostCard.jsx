import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Avatar } from "@images/Avatar.svg";
import { ReactComponent as Heart } from "@images/Heart.svg";
import { ReactComponent as Eye } from "@images/Eye.svg";
import getCounts from "@utils/getCounts";
import "./PostCard.scss";

function PostCard({
  post: { category, name, content, writer, date, hitCount, likeCount }
}) {
  return (
    <div className="post-card">
      <p className="notoMid fs-12 category">{category.join(" / ")}</p>
      <p className="notoMid fs-22 title">{name}</p>
      <p className="notoMid fs-16 notoReg content">{content}</p>
      <div className="post-card-footer roReg fs-12">
        <div className="post-card-footer-item">
          <Avatar className="avatar" />
          <p>{writer}</p>
          <p>{date}</p>
        </div>
        <div className="post-card-footer-item">
          <Eye className="eye" />
          <p>{getCounts(hitCount)}</p>
        </div>
        <div className="post-card-footer-item">
          <Heart className="heart" />
          <p>{getCounts(likeCount)}</p>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hitCount: PropTypes.number.isRequired,
    likeCount: PropTypes.number.isRequired
  }).isRequired
};

export default PostCard;
