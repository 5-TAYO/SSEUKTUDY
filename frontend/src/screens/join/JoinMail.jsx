import React, { useState, useEffect, useRef } from "react";
import "./JoinMail.scss";
import { useNavigate } from "react-router-dom";
import { sendCodeMail, checkCode } from "../../apis/join";

function JoinMail() {
  // const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const numRef = useRef(); // 인증번호 입력 값
  const userId = "pwlsghq@naver.com";

  const [sendBefore, setSendBefore] = useState(true); // 인증코드 보내기 전? -> 버튼 메시지 = 인증코드 전송
  const [btnMessage, setBtnMessage] = useState("인증코드 전송"); // 버튼 메시지 설정
  const [visibleTimer, setVisibleTimer] = useState(false);

  // 버튼클릭
  const clickBtn = async () => {
    // 인증코드 전송 전일 경우엔 인증코드를 전송하고 버튼 텍스트를 교체
    // 버튼 누르자마자 타이머 시작
    if (sendBefore === true) {
      sendCodeMail({ userId }); // 인증번호 전송
      // if (res === "success") {
      // 성공적으로 전송되었을 시
      setBtnMessage("확인");
      setVisibleTimer(true);
      setSendBefore(false);
      // }
      // else{ // 전송에 실패했을 시

      // }
    } else {
      console.log(userId, numRef.current.value);
      const result = await checkCode(userId, numRef.current.value);
      console.log(result);
      if (result.message === "SUCCESS") {
        navigate("/join/userinfo"); // 다음 페이지 이동
      } else {
        setBtnMessage("다시");
      }
    }
  };

  const reSend = async () => {
    // 코드 재전송
    if (sendBefore === false) {
      sendCodeMail({ userId }); // 인증번호 전송
      // if (res === "success") {
      // 성공적으로 전송되었을 시
      setBtnMessage("확인");
      setVisibleTimer(true);
      setSendBefore(false);
      // }
      // else{ // 전송에 실패했을 시

      // }
    }
  };
  return (
    <div id="join_mail" className="flex column align-center">
      <div className="mail_text">
        <p className="mail_text_desc notoBold fs-24">
          인증 이메일을 보냈습니다.
        </p>
        <p className="mail_text_desc_small notoReg fs-16">
          {userId} 에서 이메일을 확인 후 인증코드를 입력해주세요!
        </p>
      </div>

      {/* site mail input start */}
      <div className="mail_input flex column">
        <div>
          <p className="mail_input_title notoReg fs-16">인증코드</p>
          <div className="mail_input_box flex align-center justify-center">
            <input
              ref={numRef}
              type="email"
              placeholder="인증코드를 입력하세요"
              className="mail_input_email notoReg fs-15"
            />
          </div>
        </div>
        {/* 유효성 검사 start */}
        <div className="mail_input_failed notoMid fs-12">
          {/* {min}분 {sec}초 */}
          {visibleTimer && <Timer />}
        </div>
        {/* 유효성 검사 end */}
      </div>
      {/* site mail input end */}

      {/* mail btn start */}
      <div className="flex align-center justify-center">
        <button
          type="button"
          className="join_mail_next_btn notoMid fs-15 flex align-center justify-center"
          onClick={() => {
            clickBtn();
          }}
        >
          {btnMessage}
        </button>
      </div>
      {/* mail btn end */}

      {/* text start */}
      <div className="if_text">
        <div className="flex align-center justify-center">
          <p className="if_text_title notoMid fs-12">
            인증 이메일을 받지 못하셨나요?
          </p>
          <button
            type="button"
            className="if_text_login_move notoMid fs-12 flex align-center justify-center"
            onClick={() => {
              reSend();
            }}
          >
            {/* email 재전송 링크 수정하기 */}
            코드 재전송
          </button>
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

function Timer() {
  // const [min, setMin] = useState(3);
  const [time, setTime] = useState(180);

  // // 타이머
  useEffect(() => {
    // const countdown =\
    if (time !== 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      console.log("시간초과");
    }
    // return () => clearInterval(countdown);
  }, [time]);

  return (
    <div>
      남은 시간 - {Math.floor(time / 60)} 분 {time % 60} 초
    </div>
  );
}
export default JoinMail;
