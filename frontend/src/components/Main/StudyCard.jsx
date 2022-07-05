import React from "react";
import "./StudyCard.scss";
import ViewIcon from "@images/View.svg";
import RedLikeIcon from "@images/Like_Red.svg";
import getCounts from "@utils/getCounts";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function StudyCard({
  studyInfo: {
    studyCategoryId: category,
    studyTitle: title,
    studyIntroduction: desc,
    studyLike: like,
    studyView: view,
    studyId: id,
    dummy
  }
}) {
  const categoryList = [
    "",
    "개발",
    "어학",
    "자격증",
    "공시",
    "입시",
    "편입",
    "취준",
    "면접",
    "취미",
    "독서",
    "SNS",
    "기타"
  ];
  const url = `/study/detail/${id}`;
  return dummy ? (
    <div className="card dummy" />
  ) : (
    <Link className="card flex column" to={url}>
      <p className="card-category notoMid fs-12">{categoryList[category]}</p>
      <p className="card-title notoMid fs-22">{title}</p>
      <p className="card-desc notoReg fs-16">{desc}</p>
      <div className="icon-container flex align-center roReg fs-12">
        <img className="icon" src={ViewIcon} alt="조회수" />
        <div className="icon-cnt">{getCounts(view)}</div>
        <img className="icon" src={RedLikeIcon} alt="좋아요수" />
        <div className="icon-cnt">{getCounts(like)}</div>
      </div>
    </Link>
  );
}
StudyCard.propTypes = {
  studyInfo: PropTypes.objectOf(PropTypes.string).isRequired
};
export default StudyCard;
