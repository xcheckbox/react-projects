import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaEdit, FaTrash } from 'react-icons/fa'

function App() {
  return (
    <div className='section-center'>
      <Alert />
      <div className='grocery-form'>
        <h3 className='title'>Grocery Bud</h3>

        <form className='form-control'>
          <input className='grocery'  placeholder='e.g. eggs' />
          <button type='submit' className='submit-btn'>Submit</button>
        </form>

        <div className='grocery-container'>
          <div className='grocery-item'>
            <p className='title'>Item 1</p>
            <div>
              <button type='button' className='edit-btn'>
                <FaEdit />
              </button>
              <button type='button' className='delete-btn'>
                <FaTrash />
              </button>
            </div>
          </div>

          <button type='button' className='clear-btn'>Clear items</button>
        </div>
      </div>
    </div>
  )
}

export default App
