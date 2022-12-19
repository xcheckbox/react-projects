import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ type, rgb, weight }) => {

  const [showAlert, setShowAlert] = useState(false);

  const [r,g,b] = rgb;
  const hexColor = rgbToHex(r,g,b);

  const copyClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setShowAlert(true);
  }

  const setColorLight = (baseClass) => {
    return `${baseClass} ${(type === 'shade' ? 'color-light' : '')}`;
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
      return () => {
        clearTimeout(timeoutId)
      }
    }, 2000);

  }, [showAlert])

  return (
    <div
      className={setColorLight('color')}
      style={{ backgroundColor: `rgb(${rgb.join(',')})`}}
      onClick={() => copyClipboard(hexColor)}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      { showAlert && <p className={setColorLight('alert')}>Copied to clipboard</p> }
  </div>
  )
}

export default SingleColor
