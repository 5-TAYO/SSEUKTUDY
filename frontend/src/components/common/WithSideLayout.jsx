import React from "react";
import PropTypes from "prop-types";

import "./WithSideLayout.scss";

function WithSideLayout({ title, headerComponent, children }) {
  return (
    <div className="with-side-layout-wrapper">
      <div className="with-side-layout-header">
        <h2 className="notoMid fs-28">{title}</h2>
        {headerComponent}
      </div>
      {children}
    </div>
  );
}

WithSideLayout.propTypes = {
  title: PropTypes.string.isRequired,
  headerComponent: PropTypes.node,
  children: PropTypes.node
};
WithSideLayout.defaultProps = {
  headerComponent: null,
  children: null
};

export default WithSideLayout;
