import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js';

const DEFAULT_COLOR = '#F15025';

function App() {

  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR)

  useEffect(() => {
    console.log('UPDATINF COLOR')
    setColors(colorsGenerator(selectedColor))
  }, [selectedColor])


  const colorsGenerator = (colorHex) => {
    const color = new Values(colorHex)
    const allColors = color.all();

    return allColors;
  }
  
  const handleInputChange = (e) => {
    setSelectedColor(e.target.value)
  }

  return (
    <>
      <div className='container'>
        <h3>Color generator</h3>
        <form>
          <label>Select color: </label>
          <input
            type='color'
            onChange={handleInputChange}
            value={selectedColor}
          />
        </form>
      </div>

      <div className='colors'>
        {
          colors?.map( color => {
            const { alpha, rgb, type, weight } = color;
            return (
             <SingleColor
              {...color}
              hexColor={color.hex}
            />
            )
          })
        }
      </div>
    </>
  )
}

export default App
