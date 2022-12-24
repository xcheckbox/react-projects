import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { searchParam, setSearchParam, error } = useGlobalContext();

  const handleInputChange = (e) => {
    setSearchParam(e.target.value)
  }

  return (
    <form className='search-form' onSubmit={(event) => event.preventDefault()}>
      <h2>Search movies</h2>
      <input
        type='text'
        className='form-input'
        name='search'
        id='search'
        value={searchParam}
        onChange={handleInputChange}
      />
      { (error) && <div className='error'>{error}</div>}
    </form>
  )
}

export default SearchForm
