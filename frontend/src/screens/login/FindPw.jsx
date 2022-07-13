import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import "./FindPw.scss";

function FindPw() {
  const emailRef = useRef();
  const codeRef = useRef();

  return (
    <div id="find_pw" className="flex column align-center">
      <div className="pw_text">
        <p className="pw_text_desc notoBold fs-24">이메일을 입력해주세요!</p>
        <p className="pw_text_desc_small notoReg fs-16">
          입력하신 이메일로 인증번호를 보내드릴게요. 받은 인증코드를
          입력해주세요!
        </p>
      </div>
      {/* site pw input start */}
      <div className="pw_input flex column">
        <div>
          <p className="pw_input_title notoReg fs-16">이메일</p>
          <div className="pw_input_box flex align-center justify-center">
            <input
              ref={emailRef}
              type="email"
              placeholder="이메일을 입력하세요"
              className="pw_input_email notoReg fs-15"
            />
          </div>
        </div>
        {/* site pw input start */}

        <div>
          <p className="pw_input_title notoReg fs-16">인증코드</p>
          <div className="pw_input_box flex align-center justify-center">
            <input
              ref={codeRef}
              type="email"
              placeholder="인증 코드를 입력하세요"
              className="pw_input_email notoReg fs-15"
            />
          </div>
        </div>
        {/* 유효성 검사 start */}
        <div className="pw_input_failed notoMid fs-12">
          인증코드가 올바르지 않습니다
        </div>
        {/* 유효성 검사 end */}

        {/* site pw input end */}
      </div>
      {/* site pw input end */}

      {/* pw btn start */}
      <div className="flex align-center justify-center">
        <button
          type="button"
          className="join_pw_next_btn notoMid fs-15 flex align-center justify-center"
        >
          인증코드 보내기
        </button>
      </div>
      {/* pw btn end */}

      {/* text start */}
      <div className="if_text">
        <div className="flex align-center justify-center">
          <p className="if_text_title notoMid fs-12">
            인증 이메일을 받지 못하셨나요?
          </p>
          <button type="button" /* onClick={} */ className="if_text_login_move">
            {/* 재전송 링크 수정하기 */}
            <p className="notoMid fs-12">코드 재전송</p>
          </button>
        </div>
      </div>
      {/* text end */}

      {/* notice start */}
      <div className="notice_pw flex column justify-center">
        <div className="notice_pw_text notoMid fs-12 ">
          * 인증 이메일은 발송 시점으로 부터 3분간 유효합니다.
        </div>
        <div className="notice_pw_text notoMid fs-12 ">
          * 인증 이메일 재발송 시 기존 인증코드는 무효처리되며, 새로 받은
          인증코드로 인증해야 합니다.
        </div>
        <div className="notice_pw_text_em notoMid fs-12 ">
          * 이메일이 도착하지 않았다면 스팸메일함을 확인해주세요!
        </div>
      </div>
      {/* notice end */}
    </div>
  );
}

export default FindPw;
