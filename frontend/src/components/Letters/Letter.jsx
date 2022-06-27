/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";

import RecvLetterModal from "./RecvLetterModal";

import "./Letter.scss";

function Letter({ letter: { id, name, content, date, isRead } }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
<<<<<<< HEAD
    <>
      <div
        onClick={openModal}
        className={`letter ${isRead === "0" ? "unread" : ""} notoReg fs-13`}
      >
        <div>
          <input type="checkbox" />
        </div>
        <p>{name}</p>
        <p className="content">{content}</p>
        <p>{date}</p>
=======
    <div className={`letter ${isRead === "0" ? "unread" : ""} notoReg fs-13`}>
      <div>
        <input type="checkbox" />
>>>>>>> 6958a1bd9e1b6aef57ee162af28bd1f7176f01dd
      </div>

      <RecvLetterModal open={modalOpen} close={closeModal} letterId={id} />
    </>
  );
}

Letter.propTypes = {
  letter: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Letter;
