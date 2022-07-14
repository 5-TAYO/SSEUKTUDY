import React, { useState, useRef } from "react";
import "./Join.scss";
import KakaoIcon from "@images/Kakao.svg";
import NaverIcon from "@images/Naver.svg";
import GoogleIcon from "@images/Google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { duplicateEmail } from "../../apis/join";
import { join } from "../../store/join";

function Join() {
  const dispatch = useDispatch(); // action qhsorl

  // 오류메시지 상태 저장
  const [emailMessage, setEmailMessage] = useState("");
  const [error, setError] = useState("false");
  const navigate = useNavigate();
  const inputRef = useRef();
  // const userJoin = useSelector(state => state.join.value);

  // 유효성 검사
  const checkEmail = e => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // eslint-disable-next-line no-console
    if (regEmail.test(e.target.value) === false) {
      setEmailMessage("잘못된 이메일 형식입니다.");
      setError(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setError(true);
    }
    // console.log("이메일 유효성 검사 :: ", regEmail.test(e.target.value));
  };

  const canJoin = async () => {
    // console.log(inputRef.current.value);
    const result = await duplicateEmail(inputRef.current.value);
    // console.log(setEmail);

    // fail succcess
    if (result === "JOINED") {
      setEmailMessage("이미 존재하는 이메일입니다.");
      setError(false);
    } else if (result === "FAIL") {
      setEmailMessage("존재하지 않는 이메일 입니다.");
      setError(false);
    } else {
      dispatch(join({ userId: inputRef.current.value }));
      navigate("/join/mail");
    }
  };

  return (
    <div id="join" className="flex column">
      <div className="join_text">
        <p className="join_text_desc notoBold fs-24">환영합니다!</p>
        <p className="join_text_desc_small notoReg fs-16">
          인사말을 함 써볼까요. 뭐라고 쓸까나?
        </p>
      </div>
      {/* button start */}
      <div className="join_social_btn flex column align-center">
        <button
          type="button"
          className="join_social_btn_kakao flex align-center justify-center"
        >
          <img
            className="join_social_btn_kakao_icon"
            src={KakaoIcon}
            alt="카카오"
          />
          <span className="join_social_btn_kakao_text notoMid fs-15">
            카카오로 시작하기
          </span>
        </button>

        <button
          type="button"
          className="join_social_btn_naver flex align-center justify-center"
        >
          <img
            className="join_social_btn_naver_icon"
            src={NaverIcon}
            alt="네이버"
          />
          <span className="join_social_btn_naver_text notoMid fs-15">
            네이버로 시작하기
          </span>
        </button>

        <button
          type="button"
          className="join_social_btn_google flex align-center justify-center"
        >
          <img
            className="join_social_btn_google_icon"
            src={GoogleIcon}
            alt="구글"
          />
          <span className="join_social_btn_google_text notoMid fs-15">
            구글로 시작하기
          </span>
        </button>
      </div>
      {/* button end */}
      <div className="join_or flex align-center justify-center">
        <span className="join_or_line" />
        <div className="join_or_text notoBold fs-14">또는</div>
        <span className="join_or_line" />
      </div>

      {/* site join input start */}
      <div className="join_input flex column">
        <div>
          <p className="join_input_title notoReg fs-16">
            이메일로 회원가입하기
          </p>
          <div className="join_input_box flex align-center justify-center">
            <input
              ref={inputRef}
              type="email"
              placeholder="이메일을 입력하세요"
              className="join_input_email notoReg fs-15"
              onChange={checkEmail}
            />
          </div>
        </div>
        {/* 유효성 검사 start */}
        <div
          className={
            error
              ? " join_input_failed_green notoMid fs-12"
              : " join_input_failed_red notoMid fs-12 red"
          }
        >
          {emailMessage}
        </div>

        {/* 유효성 검사 end */}
      </div>

      {/* site join input end */}

      {/* join btn start */}
      <div className="flex align-center justify-center">
        <button
          type="button"
          className="join_main_next_btn notoMid fs-15 flex align-center justify-center"
          onClick={() => {
            canJoin();
          }}
        >
          다음
        </button>
      </div>
      {/* join btn end */}

      {/* text start */}
      <div className="if_text ">
        <div className="if_text_join flex align-center justify-center">
          <p className="if_text_title notoMid fs-12">이미 계정이 있으신가요?</p>
          <Link to="/login" className="if_text_login_move">
            <p className="notoMid fs-12"> 로그인</p>
          </Link>
        </div>
      </div>
      {/* text end */}
    </div>
  );
}

export default Join;
