import React from "react";
import PropTypes from "prop-types";

import "./Modal.scss";

function Modal({ open, close, header, children, footerBtn }) {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open && (
        <section>
          <header>
            {header}
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{children}</main>
          <footer>
            {footerBtn}
            <button type="button" className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      )}
    </div>
  );
}
Modal.defaultProps = {
  header: null,
  children: null,
  footerBtn: null
};
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  header: PropTypes.element,
  children: PropTypes.element,
  footerBtn: PropTypes.element
};
export default Modal;
