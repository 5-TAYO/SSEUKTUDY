import React from "react";
import "./StudyCard.scss";
import ViewIcon from "@images/View.svg";
import RedLikeIcon from "@images/Like_Red.svg";
import getCounts from "@utils/getCounts";
import PropTypes from "prop-types";

function StudyCard({ data: { category, title, desc, like, view } }) {
  return (
    <div className="card flex column">
      <p className="card-category notoMid fs-12">{category}</p>
      <p className="card-title notoMid fs-22">{title}</p>
      <p className="card-desc notoReg fs-16">{desc}</p>
      <div className="icon-container flex align-center roReg fs-12">
        <img className="icon" src={ViewIcon} alt="조회수" />
        <div className="icon-cnt">{getCounts(view)}</div>
        <img className="icon" src={RedLikeIcon} alt="좋아요수" />
        <div className="icon-cnt">{getCounts(like)}</div>
      </div>
    </div>
  );
}
StudyCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired
};
export default StudyCard;
