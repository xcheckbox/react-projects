import React, { useState } from 'react';

const Tour = ({ tour, onRemove }) => {
  const [readMore, setReadMore] = useState(false)
  const { id, image, info, name, price } = tour;

  const getTourInfo = () => {
    return (readMore) ? info : `${info.substring(0, 200)}...`
  }

  return (
    <article className='single-tour' key={id}>
      <img src={ image } alt={ name } />
      <footer>
        <div className='tour-info'>
          <h4>{ name }</h4>
          <h4 className='tour-price'>{ price }</h4>
        </div>
        <p>
          { getTourInfo() }
          <button onClick={() => setReadMore(!readMore)}>
            { readMore ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => onRemove(id) }
        >Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
