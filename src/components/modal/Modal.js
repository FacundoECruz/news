import React from "react";
import LoginForm from "../loginForm/LoginForm";
import "./Modal.css";

function Modal({ onSubmit, buttonText, close, error }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{buttonText}</h4>
          <div className="modal-close">
            <button className="modal-close-btn" onClick={() => close()}>x</button>
          </div>
        </div>
        <div className="modal-body">
          <LoginForm
            onSubmit={onSubmit}
            buttonText={buttonText}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
