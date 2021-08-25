import React from "react";
import PropTypes from "prop-types";

import Portal from "../../portal/Portal";

import "./Modal.css";

const Modal = ({ title, isOpen, onCancel, onSubmit, children }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
              </div>
              <div className="modalBody">{children}</div>
              <div className="modalFooter"></div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: "Modal title",
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal;
