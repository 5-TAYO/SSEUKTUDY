import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../common/Modal";

import "./LetterModal.scss";

function GetHeader(type) {
  if (type === "send") return <p>쪽지보내기</p>;
  return <p>쪽지</p>;
}
function GetButton(type, close) {
  if (type === "send")
    return (
      <button type="button" onClick={() => close()}>
        보내기
      </button>
    );
  return (
    <button type="button" onClick={() => close()}>
      삭제
    </button>
  );
}
function LetterModal({ open, close, type, target, content }) {
  const [selfIntroCnt, setSelfIntroCnt] = useState(0);
  const closeModal = () => {
    setSelfIntroCnt(0);
    close();
  };
  return (
    <Modal
      open={open}
      close={closeModal}
      header={GetHeader(type)}
      footerBtn={GetButton(type, close)}
    >
      <div className="letter-modal">
        <p>
          {type === "send" ? "받는" : "보낸"} 사람 : {target}
        </p>
        {type === "send" ? (
          <>
            <textarea
              className="self-intro fs-15"
              rows="8"
              onChange={e => setSelfIntroCnt(e.target.value.length)}
            />
            <p className="self-intro-cnt ">{selfIntroCnt} / 300</p>
          </>
        ) : (
          <textarea
            className="self-intro fs-15"
            rows="8"
            value={content}
            readOnly
          />
        )}
      </div>
    </Modal>
  );
}

LetterModal.defaultProps = {
  type: "read",
  content: null
};
LetterModal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  type: PropTypes.string,
  target: PropTypes.string.isRequired,
  content: PropTypes.string
};
export default LetterModal;
