import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const SLIDE_INTERVAL_TIME = 4000;

function App() {
  const [slideIdx, setSlideIdx] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIdx(validateSlideIdx(slideIdx + 1))
    }, SLIDE_INTERVAL_TIME)

    return () => {
      clearInterval(intervalId);
    }
  }, [slideIdx])
  
  const validateSlideIdx = (value) => {
    const totalItems = data.length - 1;

    if(value < 0) return totalItems;
    if(value > totalItems) return 0;

    return value;
  }

  const getSlideClass = (idx) => {
    const classes = {
      [slideIdx]: 'activeSlide',
      [validateSlideIdx(slideIdx - 1)]: 'lastSlide'
    }

    return (idx in classes) ? classes[idx] : 'nextSlide';
  }

  const handleSlideChange = (step = 1) => {
    setSlideIdx((prevIdx) => validateSlideIdx(prevIdx + step));
  }

  return (
    <div className='section'>
      <div className='title'>
        <h2><span>/</span> Reviews</h2>
      </div>

      <div className='section-center'>
        {
          data.map( (slide, idx) => {
            const { id, image, name, quote, title } = slide;

            return (
              <article key={id} className={ getSlideClass(idx) }>
                <img className='person-img' src={ image } alt={ name } />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <div className='icon'><FaQuoteRight /></div>
              </article>
            )}
          )
        }
        <button
          type='button'
          className='prev'
          onClick={() => handleSlideChange(-1)}
        >
          <FiChevronLeft />
        </button>

        <button
          type='button'
          className='next'
          onClick={() => handleSlideChange(1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
