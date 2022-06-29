import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../common/Modal";

import "./LetterModal.scss";

function SendLetterModal({ open, close, target }) {
  const header = <p>쪽지보내기</p>;
  const [selfIntroCnt, setSelfIntroCnt] = useState(0);
  const closeModal = () => {
    setSelfIntroCnt(0);
    close();
  };
  // todo: target 유저 아이디 혹은 스터디 아이디로 쪽지 전송 구현 필요
  const sendLetter = () => {
    console.log(`${target} 쪽지전송`);
    closeModal();
  };
  const footerBtn = (
    <button type="button" className="primary-btn" onClick={sendLetter}>
      보내기
    </button>
  );
  return (
    <Modal open={open} close={closeModal} header={header} footerBtn={footerBtn}>
      <div className="letter-modal">
        <p>받는 사람 : {target}</p>

        <textarea
          className="content"
          rows="8"
          onChange={e => setSelfIntroCnt(e.target.value.length)}
        />
        <p className="content-cnt ">{selfIntroCnt} / 300</p>
      </div>
    </Modal>
  );
}

SendLetterModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired
};
export default SendLetterModal;
