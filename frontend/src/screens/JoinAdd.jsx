import React from "react";
import "./JoinAdd.scss";
import { Link } from "react-router-dom";

function JoinAdd() {
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
    <div id="join_add">
      <div className="add_text">
        <p className="add_text_title notoBold fs-24">추가 선택사항</p>
      </div>

      {/* site add input start */}
      <div className="add_input flex column align-center">
        <div className="add_input_box">
          <p className="add_input_title notoMid fs-16">주소</p>
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
              className="join_address_btn notoMid fs-13 flex align-center justify-center"
            >
              도로명 주소 검색
            </button>
          </div>
          {/* 안내문 start */}
          <div className="add_input_notice notoReg fs-12">
            (오프라인 스터디 지원시 참고될 수 있습니다.)
          </div>
          {/* 안내문 end */}
        </div>
        <div className="add_input_box">
          <p className="add_input_title notoMid fs-16">나이</p>
          <div className=" flex align-center justify-center">
            <input
              type="text"
              placeholder="나이를 입력해주세요"
              className="notoReg fs-15"
            />
          </div>
          {/* 안내문 start */}
          <div className="add_input_notice notoReg fs-12">
            (오프라인 스터디 지원시 참고될 수 있습니다.)
          </div>
          {/* 안내문 end */}
        </div>
      </div>
      {/* site add input end */}
      {/* category again input start */}
      <div className="add_category">
        <p className="add_category_title notoMid fs-16">관심 카테고리</p>
        <div className="add_category_options flex">
          {categoryList.map(category => (
            <button
              type="button"
              name="category"
              className="add_category_options_btn notoReg fs-11 flex align-center justify-center"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* category again input end  */}

      {/* add btn start */}
      <div className="flex align-center justify-center">
        <Link
          to="/join/finish"
          className="join_add_next_btn notoMid fs-15 flex align-center justify-center"
        >
          다음
        </Link>
      </div>
      {/* add btn end */}
    </div>
  );
}

export default JoinAdd;
