import React from "react";
import "./JoinUserInfo.scss";
import { Link } from "react-router-dom";

function JoinUserInfo() {
  return (
    <div id="join_info">
      <div className="info_text">
        <p className="info_text_title notoBold fs-24">
          회원정보를 입력해주세요.
        </p>
      </div>

      {/* site info input start */}
      <div className="info_input flex column align-center">
        {/* email input start */}
        <div className="info_input_box">
          <p className="info_input_title notoMid fs-16">이메일</p>
          <div className="flex align-center justify-center">
            <input
              type="email"
              placeholder="jmlee9707@naver.com"
              className="info_input_email notoReg fs-15"
              disabled
            />
          </div>
        </div>
        {/* email input end */}
        {/* nickname input start  */}
        <div className="info_input_box">
          <p className="info_input_title notoMid fs-16">닉네임</p>
          <div className="flex align-center justify-center">
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="notoReg fs-15"
            />
          </div>
        </div>
        {/* nickname input end  */}
        {/* password input start */}
        <div className="info_input_box">
          <p className="info_input_title notoMid fs-16">비밀번호</p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="대소문자, 특수문자를 혼합하여 8~16자리"
              className="notoReg fs-15"
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="info_input_failed notoMid fs-12">
            대소문자, 특수문자를 혼합하여 8~16자리로 입력해주세요.
          </div>
          {/* 유효성 검사 end */}
        </div>
        {/* password input end */}

        {/* password again input start */}

        <div className="info_input_box">
          <p className="info_input_title notoMid fs-16">비밀번호 확인</p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="비밀번호를 한번 더 입력해주세요"
              className=" notoReg fs-15"
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="info_input_failed notoMid fs-12">
            비밀번호가 일치하지 않습니다.
          </div>
          {/* 유효성 검사 end */}
        </div>
        {/* password agagin input end  */}
      </div>
      {/* site info input end */}

      {/* info btn start */}
      <div className="flex align-center justify-center">
        <Link
          to="/join/finish"
          className="join_info_next_btn notoMid fs-15 flex align-center justify-center"
        >
          완료
        </Link>
      </div>
      {/* info btn end */}
    </div>
  );
}

export default JoinUserInfo;
