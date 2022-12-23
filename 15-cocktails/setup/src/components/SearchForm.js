import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchParam } = useGlobalContext();
  const inputRef = useRef('');

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  const handleInputSearch = (e) => {
    setSearchParam(e.target.value)
  }

  return (
    <div className='section search'>
      <div className='search-form'>
       <div className='form-control'>
          <label>Search your favorite cocktail</label>
          <input
            ref={inputRef}
            type='text'
            name='search'
            id='search'
            onChange={handleInputSearch}
          />
       </div>

      </div>
    </div>
  )
}

export default SearchForm
