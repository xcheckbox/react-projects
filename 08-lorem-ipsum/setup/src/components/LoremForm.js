import React from 'react'

export const LoremForm = ({
  value = 1,
  minValue = 1,
  maxValue = 50,
  handleSubmit = () => {},
  handleChange = () => {}
}) => {
  return (
    <div className='lorem-form'>
      <form onSubmit={handleSubmit}>
        <label>Paragraphs:</label>
        <input
          type='number'
          name='input'
          min={minValue}
          max={maxValue}
          value={value}
          onChange={ handleChange }
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
    </div>
  )
}
