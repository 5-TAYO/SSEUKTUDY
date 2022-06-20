import React from "react";
import PropTypes from "prop-types";

import "./NoContent.scss";

function NoContent({ msg, btnMsg }) {
  return (
    <div className="no-content">
      <p className="notoMid fs-22">{msg}</p>
      <button type="button" className="fs-12">
        {btnMsg}
      </button>
    </div>
  );
}

NoContent.propTypes = {
  msg: PropTypes.string.isRequired,
  btnMsg: PropTypes.string.isRequired
};
export default NoContent;
