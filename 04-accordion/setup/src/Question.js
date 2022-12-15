import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {

  const [isOpen, setIsOpen] = useState(false);
  const { title, info } = question;

  return (
    <div className='question'>
      <header>
        <h4>{ title }</h4>
        <button className='btn' onClick={ () => setIsOpen(!isOpen)}>
          { !isOpen ? <AiOutlinePlus /> : <AiOutlineMinus /> }
        </button>
      </header>
      <p>{ (isOpen) ? info : null }</p>
    </div>
  )
};

export default Question;
