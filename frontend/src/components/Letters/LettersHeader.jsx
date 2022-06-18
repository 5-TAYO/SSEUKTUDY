import React from "react";

import "./LettersHeader.scss";

function LettersHeader() {
  return (
    <div className="letters-header-right">
      <button type="button">삭제</button>
      <button type="button">보관</button>
    </div>
  );
}

export default LettersHeader;
