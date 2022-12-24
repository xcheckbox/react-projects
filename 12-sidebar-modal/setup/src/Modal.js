import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'

const Modal = () => {
  const { showModal, toggleModal } = useContext(AppContext);
  
  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h3>Modal content</h3>
        <button className='close-modal-btn' onClick={() => toggleModal()}>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
