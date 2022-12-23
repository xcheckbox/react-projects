import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { CocktailDetailAdapter } from '../adapter/cocktail-detail-adapter'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const { id } = useParams();
  const [ cocktail, loading, getDrink] = useFetch(CocktailDetailAdapter);

  useEffect(() => {
    getDrink(`${url}${id}`)
    // eslint-disable-next-line
  }, [])

  if(loading) return <Loading />

  const {
    image,
    name,
    category,
    glass,
    info,
    instructions,
    ingredients
  } = cocktail;

  return (
    <div className='section cocktail-section'>
      <Link to={'/'} className='btn btn-primary'>Back home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={ image } alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            { ingredients?.join(' ') }
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleCocktail
