import React from "react";
import PropTypes from "prop-types";

import Letter from "./Letter";

import "./LettersList.scss";

function LettersList({ letters, listHeaderName }) {
  return (
    <div className="letters-list notoMid fs-14">
      <div className="letters-list-header">
        <div>
          <input type="checkbox" />
        </div>
        <p>{listHeaderName}</p>
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
  ),
  listHeaderName: PropTypes.string.isRequired
};
LettersList.defaultProps = {
  letters: []
};

export default LettersList;
