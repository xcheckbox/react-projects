import React from 'react';

const Categories = ({ items }) => {

  return (
    <div className='section-center'>
      {
        items.map( categ => {
          const { img, id, price, title, desc } = categ;

          return (
            <div className='menu-item' key={id}>
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{ title }</h4>
                  <p className="price">${ price }</p>
                </header>
                <p className="item-text">{ desc }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Categories;
