import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { showModal, resetQuiz, questions, correctAnswer } = useGlobalContext();

  return (
    <div className={`modal-container ${showModal && 'isOpen'}`}>
      <div className='modal-content'>
        <h2>Congrats!</h2>
        <p>You answered {((correctAnswer / questions.length) * 100).toFixed(0)}% of questions correctly</p>
        <button
          className='close-btn'
          onClick={() => resetQuiz()}
        >
          Play again
        </button>
      </div>
    </div>
  ) 
}

export default Modal
