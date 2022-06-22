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
      <div className="finish_text flex column align-center justify-center">
        <div className="finish_text_title flex align-center justify-center notoBold fs-28">
          [닉네임] 님, 환영합니다.
          <br /> 회원가입을 완료하였습니다!
        </div>
        <div className="finish_text_desc flex align-center justify-center notoReg fs-16">
          이제 스윽터디에서 다양한 팀원들과 함께 <br />
          목표를 잡고 꾸준하게 공부해보세요.
          <br />
          목표까지, 스윽터디가 함께 할게요!
        </div>
      </div>
      <div className="flex align-center justify-center">
        <Link
          to="/"
          className="finish_btn notoMid fs-15 flex align-center justify-center"
        >
          스윽터디 하러가기
        </Link>
      </div>
    </div>
  );
}

export default JoinFinish;
