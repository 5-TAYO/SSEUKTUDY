import React, { useState, useRef } from "react";
import "./JoinUserInfo.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { join } from "../../apis/join";
import { finish } from "../../store/join";

function JoinUserInfo() {
  const dispatch = useDispatch();

  const navigate = useNavigate(); // 모두 작성시 회원가입 완료페이지로 이동
  const userId = useSelector(state => state.join.value.userId); // 임의 값
  const userSocial = "normal";
  const [passMessage, setPassMessage] = useState("");
  const [passAgainMessage, setPassAgainMessage] = useState("");
  const [error, setError] = useState("false");
  const [same, setSame] = useState("false");
  const [nickMessage, setNickMessage] = useState("");
  const [nickError, setNickError] = useState("false");
  const nicknameRef = useRef();
  const passRef = useRef();
  const passAgainRef = useRef();

  const checkNickname = e => {
    const regNickname = /[^0-9]{2,10}$/;
    if (regNickname.test(e.target.value) === false) {
      setNickMessage("2자~10자리의 문자로 입력해주세요.");
      setNickError(false);
    } else {
      setNickMessage(" ");
      setNickError(true);
    }
  };
  const checkPass = e => {
    // 8 ~ 16자 영문, 숫자 조합
    const regPass =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    // eslint-disable-next-line no-console
    if (regPass.test(e.target.value) === false) {
      setPassMessage("문자와 특수문자를 혼합하여 8~16자리로 입력해주세요.");
      setError(false);
    } else {
      setPassMessage(" ");
      setError(true);
    }
  };
  const checkPassAgain = () => {
    // eslint-disable-next-line no-console
    // 비밀번호 일치 여부 확인
    if (passRef.current.value !== passAgainRef.current.value) {
      setPassAgainMessage("비밀번호가 일치하지 않습니다.");
      setSame(false);
    } else {
      setPassAgainMessage(" ");
      setSame(true);
    }
  };

  const canJoin = async () => {
    if (setError && setNickError && setSame) {
      // console.log(
      //   userId,
      //   passRef.current.value,
      //   nicknameRef.current.value,
      //   userSocial
      // );

      const userPw = passRef.current.value;
      const userNickname = nicknameRef.current.value;
      const res = await join({ userId, userPw, userNickname, userSocial });

      console.log(res);
      if (res === "SUCCESS") {
        dispatch(finish());
        navigate("/join/finish"); // 다음페이지 이동
      }
    } else {
      // eslint-disable-next-line no-alert
      alert("입력된 값을 다시 한번 확인해주세요");
    }
  };

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
              placeholder={userId}
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
              required
              ref={nicknameRef}
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="notoReg fs-15"
              onChange={checkNickname}
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="info_input_failed notoMid fs-12" />
          {/* 유효성 검사 end */}
          <div
            className={
              nickError
                ? " info_input_failed_green notoMid fs-12"
                : " info_input_failed_red notoMid fs-12 red"
            }
          >
            {nickMessage}
          </div>
        </div>
        {/* nickname input end  */}
        {/* password input start */}
        <div className="info_input_box">
          <p className="info_input_title notoMid fs-16">비밀번호</p>
          <div className=" flex align-center justify-center">
            <input
              required
              ref={passRef}
              type="text"
              placeholder="대소문자, 특수문자를 혼합하여 8~16자리"
              className="notoReg fs-15"
              onChange={checkPass}
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="info_input_failed notoMid fs-12" />
          {/* 유효성 검사 end */}
          <div
            className={
              error
                ? " info_input_failed_green notoMid fs-12"
                : " info_input_failed_red notoMid fs-12 red"
            }
          >
            {passMessage}
          </div>
        </div>
        {/* password input end */}

        {/* password again input start */}

        <div className="info_input_box">
          <p className="info_input_title notoMid fs-16">비밀번호 확인</p>
          <div className=" flex align-center justify-center">
            <input
              required
              ref={passAgainRef}
              type="text"
              placeholder="비밀번호를 한번 더 입력해주세요"
              className=" notoReg fs-15"
              onChange={checkPassAgain}
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="info_input_failed notoMid fs-12" />
          <div
            className={
              same
                ? " info_input_failed_green notoMid fs-12"
                : " info_input_failed_red notoMid fs-12"
            }
          >
            {passAgainMessage}
          </div>
          {/* 유효성 검사 end */}
        </div>
        {/* password again input end  */}
      </div>
      {/* site info input end */}

      {/* info btn start */}
      <div className="flex align-center justify-center">
        <button
          type="button"
          to="/join/finish"
          className="join_info_next_btn notoMid fs-15 flex align-center justify-center"
          onClick={() => {
            canJoin();
          }}
        >
          완료
        </button>
      </div>
      {/* info btn end */}
    </div>
  );
}

export default JoinUserInfo;
