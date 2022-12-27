import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { search, handleSearch, dispatch } = useGlobalContext();

  return (
    <form className='search-form'>
      <h2>Search hacker news</h2>
      <input
        type='text'
        className='form-input'
        value={search}
        onChange={(e) => handleSearch(dispatch, e.target.value)}
      />
    </form>
  )
}

export default SearchForm
