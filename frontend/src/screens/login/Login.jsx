import React, { useRef } from "react";
import "./Login.scss";
import KakaoIcon from "@images/Kakao.svg";
import NaverIcon from "@images/Naver.svg";
import GoogleIcon from "@images/Google.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/user";

function Login() {
  const dispatch = useDispatch();
  const userIdRef = useRef();
  const userPwRef = useRef();
  return (
    <div id="login" className="flex column">
      <div className="login_text">
        <p className="login_text_desc notoBold fs-24">
          환영합니다!
          <br />
          로그인을 부탁드려요!!
        </p>
      </div>
      {/* button start */}
      <div className="login_social_btn flex column align-center">
        <button
          type="button"
          className="login_social_btn_kakao flex align-center justify-center"
        >
          <img
            className="login_social_btn_kakao_icon"
            src={KakaoIcon}
            alt="카카오"
          />
          <span className="login_social_btn_kakao_text notoMid fs-15">
            카카오로 시작하기
          </span>
        </button>

        <button
          type="button"
          className="login_social_btn_naver flex align-center justify-center"
        >
          <img
            className="login_social_btn_naver_icon"
            src={NaverIcon}
            alt="네이버"
          />
          <span className="login_social_btn_naver_text notoMid fs-15">
            네이버로 시작하기
          </span>
        </button>

        <button
          type="button"
          className="login_social_btn_google flex align-center justify-center"
        >
          <img
            className="login_social_btn_google_icon"
            src={GoogleIcon}
            alt="구글"
          />
          <span className="login_social_btn_google_text notoMid fs-15">
            구글로 시작하기
          </span>
        </button>
      </div>
      {/* button end */}
      <div className="login_or flex align-center justify-center">
        <span className="login_or_line" />
        <div className="login_or_text notoBold fs-14">또는</div>
        <span className="login_or_line" />
      </div>

      {/* site login input start */}
      <div className="login_input flex column">
        <div>
          <p className="login_input_title notoReg fs-16">이메일</p>
          <div className="login_input_box flex align-center justify-center">
            <input
              ref={userIdRef}
              type="email"
              placeholder="이메일을 입력하세요"
              className="login_input_email notoReg fs-15"
            />
          </div>
        </div>
        <div>
          <p className="login_input_title notoReg fs-16">비밀번호</p>
          <div className="login_input_box flex align-center justify-center">
            <input
              type="text"
              placeholder="비밀번호를 입력하세요"
              className="login_input_pw notoReg fs-15"
            />
          </div>
        </div>
        {/* 유효성 검사 start */}
        <div className="login_input_failed notoMid fs-12">
          이메일 형식이 올바르지 않습니다.
        </div>
        {/* 유효성 검사 end */}
      </div>
      {/* site login input end */}

      {/* login btn start */}
      <div className="flex align-center justify-center">
        <button
          type="button"
          className="login_btn notoMid fs-15"
          onClick={() => {
            dispatch(
              login({
                userId: userIdRef.current.value,
                userPw: userPwRef.current.value,
                userSocial: "normal"
              })
            );
          }}
        >
          로그인
        </button>
      </div>
      {/* login btn end */}

      {/* text start */}
      <div className="if_text ">
        <div className="if_text_join flex align-center justify-center">
          <p className="if_text_title notoMid fs-12">아직 계정이 없으신가요?</p>
          <Link to="/join" classname="if_text_join_move">
            <p className="notoMid fs-12"> 회원가입</p>
          </Link>
        </div>
        <div className="if_text_find flex align-center justify-center">
          <p className="if_text_title notoMid fs-12">
            비밀번호를 잊어버리셨나요?
          </p>
          <Link to="/find/pw" classname="if_text_find_move">
            <p className="notoMid fs-12"> 비밀번호 찾기</p>
          </Link>
        </div>
      </div>
      {/* text end */}
    </div>
  );
}

export default Login;
