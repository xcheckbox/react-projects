import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
import { PhotoAdapter } from './photo-adapter'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {

  console.log(process.env.REACT_APP_ACCESS_KEY)
  
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    fetchData(`${mainUrl}${clientID}`);
  }, []);


  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(PhotoAdapter(data));
    } catch (error) {
      setData(null);
    }
    setLoading(false);
  }

  return (
    <>
    <div className='search'>
      <form className='search-form'>
        <input
          placeholder='search'
          className='form-input'
        />
        <button type='submit' className='submit-btn'>
          <FaSearch />
        </button>
      </form>
    </div>
    <div className='photos'>
      <div className='photos-center'>
        {
          data?.map( photo => {
            return (<Photo photo={photo} />)
          })
        }
      </div>
    </div>
    </>
  )
}

export default App
