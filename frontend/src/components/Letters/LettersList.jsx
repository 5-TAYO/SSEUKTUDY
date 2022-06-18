import React from "react";
import PropTypes from "prop-types";

import Letter from "./Letter";

import "./LettersList.scss";

function LettersList({ letters }) {
  return (
    <div className="letters-list">
      <div className="letters-list-header">
        <div>
          <input type="checkbox" />
        </div>
        <p>보낸 사람</p>
        <p>내용</p>
        <p>날짜</p>
      </div>
      {letters.map(letter => (
        <Letter key={letter.id} letter={letter} />
      ))}
    </div>
  );
}

LettersList.propTypes = {
  letters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.string
    })
  )
};
LettersList.defaultProps = {
  letters: []
};

export default LettersList;
