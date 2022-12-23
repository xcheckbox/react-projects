import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const { loading, drinks } = useGlobalContext();
  if (loading) return <Loading />

  if(!drinks.length) return (
    <h2 className='section-title'>
      no cocktails matched your search criteria
    </h2>
  )

  return (
    <div className='section'>
      <div className='section-title'>
        <h3>cocktails</h3>
      </div>
      <div className='cocktails-center'>
        {
          drinks?.map( cocktail => <Cocktail key={cocktail.id} cocktail={cocktail} />)
        }
      </div>
    </div>
  )
}

export default CocktailList
