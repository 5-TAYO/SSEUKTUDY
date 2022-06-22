import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import WithSideLayout from "../common/WithSideLayout";

import "./ModifyPersonalInfo.scss";

function Index() {
  const [isChecked, setIsChecked] = useState(false);
  const headerTitle = "개인정보 설정";
  return (
    <WithSideLayout title={headerTitle}>
      {isChecked ? (
        <ModifyPersonalInfo />
      ) : (
        <CheckPass onClick={setIsChecked} />
      )}
    </WithSideLayout>
  );
}
function ModifyPersonalInfo() {
  const categoryList = [
    "관심X",
    "IT",
    "프론트",
    "백엔드",
    "IT1",
    "프론트1",
    "백엔드1",
    "IT2",
    "프론트2",
    "백엔드2",
    "IT3",
    "프론트3"
  ];
  return (
    <div className="mypage_compo">
      <div className="mypage_compo_line" />

      {/* 정보 입력 시작 */}
      <div className="mypage_compo_edit flex column align-center">
        {/* email input start */}
        <div className="mypage_compo_edit_box">
          <p className="mypage_compo_edit_box_title notoMid fs-16">이메일</p>
          <div className="flex align-center justify-center">
            <input
              type="email"
              placeholder="jmlee9707@naver.com"
              className="mypage_compo_edit_email notoReg fs-15"
            />
          </div>
        </div>
        {/* email input end */}
        {/* nickname input start  */}
        <div className="mypage_compo_edit_box">
          <p className="mypage_compo_edit_box_title notoMid fs-16">닉네임</p>
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
        <div className="mypage_compo_edit_box">
          <p className="mypage_compo_edit_box_title notoMid fs-16">비밀번호</p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="대소문자, 특수문자를 혼합하여 8~16자리"
              className="notoReg fs-15"
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="mypage_compo_edit_box_failed notoMid fs-12">
            대소문자, 특수문자를 혼합하여 8~16자리로 입력해주세요.
          </div>
          {/* 유효성 검사 end */}
        </div>
        {/* password input end */}

        {/* password again input start */}

        <div className="mypage_compo_edit_box">
          <p className="mypage_compo_edit_box_title notoMid fs-16">
            비밀번호 확인
          </p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="비밀번호를 한번 더 입력해주세요"
              className=" notoReg fs-15"
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="mypage_compo_edit_box_failed notoMid fs-12">
            비밀번호가 일치하지 않습니다.
          </div>
          {/* 유효성 검사 end */}
        </div>
        {/* password agagin input end  */}
        <div className="mypage_compo_edit_box">
          <p className="mypage_compo_edit_box_title notoMid fs-16">주소</p>
          <div className="flex align-center justify-center">
            <input
              type="text"
              placeholder="주소를 검색하여 주세요"
              className="notoReg fs-15"
            />
          </div>
          <div className="flex align-center justify-center">
            <button
              type="button"
              className="edit_address_btn notoMid fs-13 flex align-center justify-center"
            >
              도로명 주소 검색
            </button>
          </div>
          {/* 안내문 start */}
          <div className="mypage_compo_edit_notice notoReg fs-12">
            (오프라인 스터디 지원시 참고될 수 있습니다.)
          </div>
          {/* 안내문 end */}
        </div>
        <div className="mypage_compo_edit_box">
          <p className="mypage_compo_edit_box_title notoMid fs-16">나이</p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="나이를 입력해주세요"
              className="notoReg fs-15"
            />
          </div>
          {/* 안내문 start */}
          <div className="mypage_compo_edit_notice notoReg fs-12">
            (오프라인 스터디 지원시 참고될 수 있습니다.)
          </div>
          {/* 안내문 end */}
        </div>

        {/* category again input start */}
        <div className="edit_category">
          <p className="edit_category_title notoMid fs-16">관심 카테고리</p>
          <div className="edit_category_options flex">
            {categoryList.map(category => (
              <button
                key={uuid()}
                type="button"
                name="category"
                className="edit_category_options_btn notoReg fs-11 flex align-center justify-center"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* category again input end  */}

        <div className="flex align-center justify-center">
          <Link
            to="/mypage"
            className="edit_btn notoMid fs-15 flex align-center justify-center"
          >
            수정
          </Link>
        </div>
      </div>
    </div>
  );
}

function CheckPass({ onClick }) {
  return (
    <div className="check_pass">
      <div className="check_pass_line" />
      <div className="check_pass_edit">
        <div className="check_pass_edit_box flex column justify-center">
          <p className="check_pass_edit_box_title notoMid fs-16">
            비밀번호 확인
          </p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="비밀번호를 한번 더 입력해주세요"
              className=" notoReg fs-15"
            />
          </div>
          {/* 유효성 검사 start */}
          <div className="check_pass_edit_box_failed notoMid fs-12">
            비밀번호가 일치하지 않습니다.
          </div>
          {/* 유효성 검사 end */}
        </div>
        <div className="flex align-center justify-center">
          <button
            type="button"
            // to="/info" // 후에 비밀번호 확인 후 처리 로직 필요
            onClick={() => onClick(true)}
            className="edit_btn notoMid fs-15 flex align-center justify-center"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

CheckPass.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Index;
