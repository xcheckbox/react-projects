import React from 'react';

const Menu = ({ filterMenu = () => {}, options = [] }) => {

  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => filterMenu()}>All</button>
      {
        options.map(opt => (
          <button
            key={opt}
            className='filter-btn'
            onClick={() => filterMenu(opt)}>{opt}</button>
        ))
      }
    </div>
  )
};

export default Menu;
