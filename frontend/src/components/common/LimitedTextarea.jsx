import React, { useState } from "react";
import "./LimitedTextarea.scss";
import PropTypes from "prop-types";

function LimitedTextarea({ readOnly, maxCnt, setIntro, initValue }) {
  const [nowCnt, setNowCnt] = useState(0);
  return (
    <div id="limited-textarea">
      <textarea
        className="self-intro fs-15"
        rows="8"
        readOnly={readOnly}
        onChange={e => {
          setNowCnt(e.target.value.length);
          setIntro(e.target.value);
        }}
        defaultValue={initValue}
      />
      <p className="self-intro-cnt notoLight fs-12">
        {nowCnt} / {maxCnt}
      </p>
    </div>
  );
}

LimitedTextarea.defaultProps = {
  initValue: ""
};

LimitedTextarea.propTypes = {
  readOnly: PropTypes.bool.isRequired,
  maxCnt: PropTypes.number.isRequired,
  setIntro: PropTypes.func.isRequired,
  initValue: PropTypes.string
};
export default React.memo(LimitedTextarea);
