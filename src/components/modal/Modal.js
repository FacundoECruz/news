import React from 'react';
import LoginForm from '../LoginForm';
import './Modal.css'

function Modal({onSubmit, buttonText, close}) {

  return(
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Title</h4>
        </div>
        <div className='modal-body'>
          <LoginForm onSubmit={onSubmit} buttonText={buttonText}/>
        </div>
        <div className='modal-footer'>
          <button onClick={() => close()}>Close</button>
        </div>
      </div>
    </div>
  )
} 

export default Modal;