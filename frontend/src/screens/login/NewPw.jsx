import React from "react";
import { Link } from "react-router-dom";
import "./NewPw.scss";

function NewPw() {
  return (
    <div id="new_pw">
      <div className="new_pw_text">
        <p className="new_pw_text_title notoBold fs-24">
          새로운 비밀번호를 입력해주세요 :)
        </p>
      </div>

      {/* site new_pw input start */}
      <div className="new_pw_input flex column align-center">
        {/* password input start */}
        <div className="new_pw_input_box">
          <p className="new_pw_input_title notoMid fs-16">비밀번호</p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="대소문자, 특수문자를 혼합하여 8~16자리"
              className="notoReg fs-15"
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="new_pw_input_failed notoMid fs-12">
            대소문자, 특수문자를 혼합하여 8~16자리로 입력해주세요.
          </div>
          {/* 유효성 검사 end */}
        </div>
        {/* password input end */}

        {/* password again input start */}

        <div className="new_pw_input_box">
          <p className="new_pw_input_title notoMid fs-16">비밀번호 확인</p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="비밀번호를 한번 더 입력해주세요"
              className=" notoReg fs-15"
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="new_pw_input_failed notoMid fs-12">
            비밀번호가 일치하지 않습니다.
          </div>
          {/* 유효성 검사 end */}
        </div>
        {/* password agagin input end  */}
      </div>
      {/* site new_pw input end */}

      {/* new_pw btn start */}
      <div className="flex align-center justify-center">
        <Link
          to="/main"
          className="join_new_pw_next_btn notoMid fs-15 flex align-center justify-center"
        >
          비밀번호 재설정
        </Link>
      </div>
      {/* new_pw btn end */}
    </div>
  );
}

export default NewPw;
