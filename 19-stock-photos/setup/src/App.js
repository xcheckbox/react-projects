import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
import { PhotoAdapter } from './photo-adapter'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ page, setPage ] = useState(0);
  const [ querySearch, setQuerySearch ] = useState('');
  
  useEffect(() => {
    console.log('Fetching')
    fetchData(getApiUrl(page, querySearch));
    // eslint-disable-next-line
  }, [page]);
  
  const getApiUrl = (page, querySearch) => {
    let url;

    const pageParams = `&page=${page}`;
    const queryParams = `&query=${querySearch}`;

    url = (querySearch)
      ? `${searchUrl}${clientID}${pageParams}${queryParams}`
      : `${mainUrl}${clientID}${pageParams}`

    return url;
  }

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData((prevData) => {
        if(querySearch && page === 1){
          return PhotoAdapter(data.results);
        } else if (querySearch){
          return [...prevData, ...PhotoAdapter(data.results)]
        } else {
          return [...prevData, ...PhotoAdapter(data)]
        }
      });
    } catch (error) {
      setData(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    const scrollEvent = window.addEventListener('scroll', () => {
      if((!loading && window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2){
        setPage(prevPage => prevPage + 1)
      }
    })

    return () => window.removeEventListener('scroll', scrollEvent);
    // eslint-disable-next-line
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(page === 1) {
      fetchData(getApiUrl(page, querySearch))
    }
    setPage(1);
  }

  return (
    <>
    <div className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          placeholder='search'
          className='form-input'
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
        />
        <button type='submit' className='submit-btn'>
          <FaSearch />
        </button>
      </form>
    </div>
    <div className='photos'>
      <div className='photos-center'>
        {
          data?.map((photo, idx) => {
            return (<Photo key={idx} photo={photo} />)
          })
        }
      </div>
      { loading && <h2 className='loading'>Loading...</h2>}
    </div>
    </>
  )
}

export default App
