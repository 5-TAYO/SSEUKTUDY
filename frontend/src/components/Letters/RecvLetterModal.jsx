import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "../common/Modal";

import "./LetterModal.scss";

function RecvLetterModal({ open, close, letterId }) {
  const header = <p>쪽지</p>;
  const [letter, setLetter] = useState({});
  const closeModal = () => {
    close();
  };
  const deleteLetter = () => {
    // todo : letterId 로 쪽지 삭제 구현 필요
    console.log(`${letterId} 쪽지삭제`);
    closeModal();
  };
  useEffect(() => {
    // todo : letterId로 서버에서 쪽지내용 받아오기 구현 필요
    setLetter({
      id: "0",
      sender: "asdasd@asd.copm",
      content: "lorem lorem lorem lorem",
      date: "22-04-27 [23:22]"
    });
  }, [letterId]);
  const footerBtn = (
    <button type="button" className="primary-btn" onClick={deleteLetter}>
      삭제
    </button>
  );
  return (
    <Modal open={open} close={closeModal} header={header} footerBtn={footerBtn}>
      <div className="letter-modal">
        <p className="">보낸 사람 : {letter.sender}</p>

        <textarea
          className="content"
          rows="8"
          value={letter.content}
          readOnly
        />
      </div>
    </Modal>
  );
}

RecvLetterModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  letterId: PropTypes.string.isRequired
};
export default RecvLetterModal;
