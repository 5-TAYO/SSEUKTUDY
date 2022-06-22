import React from "react";
import PropTypes from "prop-types";

import "./Letter.scss";

function Letter({ letter: { name, content, date, isRead } }) {
  return (
    <div className={`letter ${isRead === "0" ? "unread" : ""}`}>
      <div>
        <input type="checkbox" />
      </div>
      <p>{name}</p>
      <p>{content}</p>
      <p>{date}</p>
    </div>
  );
}

Letter.propTypes = {
  letter: PropTypes.objectOf(PropTypes.string).isRequired
};

export default Letter;
