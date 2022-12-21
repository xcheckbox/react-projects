import React from 'react'
import { Link } from 'react-router-dom';
import { CocktailAdapter } from '../adapter/cocktailAdapter';

const Cocktail = ({ cocktail }) => {
  const { id, name, image, glass, type } = CocktailAdapter(cocktail);

  return (
    <div className='cocktail'>
      <img src={ image } />
      <div className='cocktail-footer'>
        <h3>{ name }</h3>
        <h4>{ glass }</h4>
        <p>{ type }</p>
        <button className='btn btn-primary'>Details</button>
      </div>
    </div>
  )
}

export default Cocktail
