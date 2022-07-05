import React from "react";
import { Link } from "react-router-dom";
import DummyImg from "@images/HomeDummy.png";
import IconLogoImg from "@images/IconLogo.svg";
import "./Home.scss";
import PropTypes from "prop-types";

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
            to="/study/list"
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
        <div className="main__card-cotainer flex">
          <HomeDescCard
            title="직접만들고"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique varius penatibus tellus leo nibh arcu. "
          />
          <HomeDescCard
            title="직접만들고"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique varius penatibus tellus leo nibh arcu. "
          />
          <HomeDescCard
            title="직접만들고"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique varius penatibus tellus leo nibh arcu. "
          />
        </div>
        <div className="logo-container flex align-center">
          <div className="logo flex align-center justify-center">
            <img className="logo-img" src={IconLogoImg} alt="" />
          </div>
          <div className="p-container flex column">
            <p className="logo-desc-top fs-32 notoBold">
              완벽한 스터디를 위하여
            </p>
            <p className="logo-desc-bottom fs-32 notoBold">스윽터디</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function HomeDescCard({ title, desc }) {
  return (
    <div className="main__desc-card flex column align-center">
      <p className="title notoBold fs-28">{title}</p>
      <div className="line" />
      <p align="center" className="desc notoReg fs-18">
        {desc}
      </p>
    </div>
  );
}

HomeDescCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Home;
