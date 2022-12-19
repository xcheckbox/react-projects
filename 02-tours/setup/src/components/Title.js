import React from 'react'

export const Title = ({ tours, onRefresh }) => {
  const toursCount = tours?.length || 0;

  return (
    <div className='title'>
      <h2>{ toursCount ? 'Our Tours' : 'No Tours Left'}</h2>
      { toursCount
        ? <div className='underline'></div>
        : <button className="btn" onClick={onRefresh}>Refresh</button>
      }
    </div>
  )
}
