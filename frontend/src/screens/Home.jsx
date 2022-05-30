import React from "react";
import { Link } from "react-router-dom";
import DummyImg from "@images/HomeDummy.png";
import "./Home.scss";

function Home() {
  return (
    <div id="Home">
      <div className="banner flex column align-center">
        <p align="center" className="banner__desc notoBold fs-40 desc">
          스터디 개설부터 참여까지 나한테 딱 맞는 스터디
        </p>
        <p className="banner__title notoBlack fs-60">스윽터디</p>
        <div className="banner__btn-container flex">
          <Link
            className="banner__btn banner__btn--regist notoMid flex align-center justify-center fs-18"
            to="/study/regist"
          >
            스터디 개설하기
          </Link>
          <Link
            className="banner__btn notoMid flex align-center justify-center fs-18"
            to="/study"
          >
            스터디 구경하기
          </Link>
        </div>
        <img className="banner__img" src={DummyImg} alt="" />
      </div>
      <main className="main flex column align-center">
        <p align="center" className="main__desc notoBold fs-32">
          자, 이제부터
          <br />
          스윽터디에 대해 알려드릴게요
        </p>
        <p className="main__desc--emphasis notoBold fs-24">집중</p>
      </main>
    </div>
  );
}

export default Home;
