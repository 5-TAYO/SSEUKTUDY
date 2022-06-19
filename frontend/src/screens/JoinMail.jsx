import React from "react";
import "./JoinMail.scss";
import { Link } from "react-router-dom";

function JoinMail() {
  return (
    <div id="join_mail" className="flex column align-center">
      <div className="mail_text">
        <p className="mail_text_desc notoBold fs-24">
          인증 이메일을 보냈습니다.
        </p>
        <p className="mail_text_desc_small notoReg fs-16">
          메일함에서 인증 이메일을 확인 후 받은 인증코드를 입력해주세요!
        </p>
      </div>

      {/* site mail input start */}
      <div className="mail_input flex column">
        <div>
          <p className="mail_input_title notoReg fs-16">인증코드</p>
          <div className="mail_input_box flex align-center justify-center">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="mail_input_email notoReg fs-15"
            />
          </div>
        </div>
        {/* 유효성 검사 start */}
        <div className="mail_input_failed notoMid fs-12">
          인증코드가 올바르지 않습니다
        </div>
        {/* 유효성 검사 end */}
      </div>
      {/* site mail input end */}

      {/* mail btn start */}
      <div className="flex align-center justify-center">
        <Link
          to="/join/userinfo"
          className="join_mail_next_btn notoMid fs-15 flex align-center justify-center"
        >
          다음
        </Link>
      </div>
      {/* mail btn end */}

      {/* text start */}
      <div className="if_text">
        <div className="flex align-center justify-center">
          <p className="if_text_title notoMid fs-12">
            인증 이메일을 받지 못하셨나요?
          </p>
          <Link to="/login" classname="if_text_login_move">
            {/* email 재전송 링크 수정하기 */}
            <p className="notoMid fs-12"> 이메일 재전송</p>
          </Link>
        </div>
      </div>
      {/* text end */}

      {/* notice start */}
      <div className="notice_mail flex column justify-center">
        <div className="notice_mail_text notoMid fs-12 ">
          * 인증 이메일은 발송 시점으로 부터 3분간 유효합니다.
        </div>
        <div className="notice_mail_text notoMid fs-12 ">
          * 인증 이메일 재발송 시 기존 인증코드는 무효처리되며, 새로 받은
          인증코드로 인증해야 합니다.
        </div>
        <div className="notice_mail_text_em notoMid fs-12 ">
          * 이메일이 도착하지 않았다면 스팸메일함을 확인해주세요!
        </div>
      </div>
      {/* notice end */}
    </div>
  );
}

export default JoinMail;
