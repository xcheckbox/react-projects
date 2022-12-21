import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const { loading, data } = useGlobalContext();
  console.log(data)
  if (loading || data.length) return <Loading />

  return (
    <div className='section'>
      <div className='section-title'>
        <h3>cocktails</h3>
      </div>
      <div className='cocktails-center'>
        {
          data.drinks?.map( cocktail => <Cocktail cocktail={cocktail} />)
        }
      </div>
    </div>
  )
}

export default CocktailList
