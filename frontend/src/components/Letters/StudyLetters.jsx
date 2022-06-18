import React from "react";
import "./Recv.scss";

function StudyLetters() {
  return (
    <div className="recv-wrapper">
      <div className="recv-header">
        <div className="recv-header-left">
          <h2 className="notoMid fs-28">스터디 단체 쪽지함</h2>
        </div>
        <div className="recv-header-right">
          <button type="button">삭제</button>
          <button type="button">보관</button>
        </div>
      </div>
      <div className="notes-list">
        <div className="note note-list-header">
          <div>
            <input type="checkbox" />
          </div>
          <p>스터디 이름</p>
          <p>내용</p>
          <p>날짜</p>
        </div>
        <div className="note">
          <div>
            <input type="checkbox" />
          </div>
          <p>jmlee9707</p>
          <p>lorem loremloremlorem lorem lorem</p>
          <p>22-04-27 [23:22]</p>
        </div>
        <div className="note unread">
          <div>
            <input type="checkbox" />
          </div>
          <p>jmlee9707</p>
          <p>lorem loremloremlorem lorem lorem</p>
          <p>22-04-27 [23:22]</p>
        </div>
      </div>
    </div>
  );
}
export default StudyLetters;
