import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ type, rgb, weight, hex }) => {

  const [r,g,b] = rgb;
  const hexColor = rgbToHex(r,g,b);

  return (
    <div
      className={`color ${(type === 'shade' ? 'color-light' : '')}`}
      style={{ backgroundColor: `rgb(${rgb.join(',')})`}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
  </div>
  )
}

export default SingleColor
