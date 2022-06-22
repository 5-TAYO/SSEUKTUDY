import React, { useRef } from "react";
import "./PreQuestion.scss";
import PropTypes from "prop-types";

function PreQuestion({ order, question, type }) {
  const answerInput = useRef(null);
  const autoResizeTextarea = () => {
    if (answerInput) {
      answerInput.current.style.height = "auto";
      const height = answerInput.current.scrollHeight;
      answerInput.current.style.height = `${height + 2}px`; // fix__
    }
  };
  return (
    <div id="pre-question">
      <div className="question flex align-center">
        <p className="question__order notoMid fs-16">질문{order}</p>
        <p className="question__name notoReg fs-15 ">{question}</p>
      </div>
      <textarea
        className="answer"
        rows="4"
        ref={answerInput}
        onChange={autoResizeTextarea}
        readOnly={type === "read"}
      />
    </div>
  );
}

PreQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};
export default PreQuestion;
