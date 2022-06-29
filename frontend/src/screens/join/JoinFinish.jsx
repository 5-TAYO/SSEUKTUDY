import React from "react";
import "./JoinFinish.scss";
import { Link } from "react-router-dom";
import FinalIcon from "@images/Final.png";

function JoinFinish() {
  return (
    <div id="join_finish">
      <div className="flex align-center justify-center">
        <img src={FinalIcon} alt="가입완료" className="join_finish_image" />
      </div>
      <div className="finish_text">
        <div className="finish_text_title flex align-center justify-center notoBold fs-28">
          [닉네임] 님, 환영합니다.
          <br /> 회원가입을 완료하였습니다!
        </div>
        <div className="finish_text_desc flex column align-center justify-center notoReg fs-16">
          <p>이제 스윽터디에서 다양한 팀원들과 함께</p>
          <p> 목표를 잡고 꾸준하게 공부해보세요.</p>
          <p>
            목표까지, <span className="notoBold">스윽터디</span>가 함께 할게요!
          </p>
        </div>
      </div>
      <div className="flex column align-center justify-center">
        <Link
          to="/main"
          className="finish_btn notoMid fs-15 flex align-center justify-center"
        >
          스윽터디 하러가기
        </Link>
        <Link
          to="/join/add"
          className="more_info_btn notoMid fs-15 flex align-center justify-center"
        >
          추가 정보 작성하기
        </Link>
      </div>
    </div>
  );
}

export default JoinFinish;
