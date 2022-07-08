import React, { useRef } from "react";
import "./PreQuestion.scss";
import PropTypes from "prop-types";

function PreQuestion({ order, questionId, question, type, setAnswer }) {
  const answerInput = useRef(null);
  const autoResizeTextarea = () => {
    if (answerInput) {
      answerInput.current.style.height = "auto";
      const height = answerInput.current.scrollHeight;
      answerInput.current.style.height = `${height + 2}px`; // fix__
    }
  };
  const onChangeTextArea = e => {
    autoResizeTextarea();
    setAnswer(questionId, e.target.value);
  };
  return (
    <div id="pre-question">
      <div className="question flex align-center">
        <p className="question__order notoMid fs-16">질문{order}</p>
        <p className="question__name notoReg fs-15 ">{question}</p>
      </div>
      <textarea
        className="answer fs-15"
        rows="4"
        ref={answerInput}
        onChange={onChangeTextArea}
        readOnly={type === "read"}
      />
    </div>
  );
}
PreQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  setAnswer: PropTypes.func.isRequired
};
export default React.memo(PreQuestion);
