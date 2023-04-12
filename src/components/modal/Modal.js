import React from 'react';
import LoginForm from '../loginForm/LoginForm';
import './Modal.css'

function Modal({onSubmit, buttonText, close, error}) {

  return(
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>{buttonText}</h4>
        </div>
        <div className='modal-body'>
          <LoginForm onSubmit={onSubmit} buttonText={buttonText} error={error}/>
        </div>
        <div className='modal-footer'>
          <button onClick={() => close()}>Close</button>
        </div>
      </div>
    </div>
  )
} 

export default Modal;