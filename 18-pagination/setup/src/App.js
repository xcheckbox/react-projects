import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {

  const { data, loading } = useFetch();
  const [ users, setUsers ] = useState([]);
  const [ page, setPage ] = useState(0);


  const validatePage = (page) => {
    const pageSize = data.length - 1;
    if(page < 0) return pageSize;
    if(page > pageSize) return 0;

    return page;
  }

  const handleMovePage = (step) => {
    setPage((prevPage) => validatePage(prevPage + step))
  }

  useEffect(() => {
    setUsers(data[page])
  }, [loading, page, data])
  
  return (
    <div>
      <div className='section-title'>
        <h1>{ loading ? 'Loading...' : 'Pagination' }</h1>
        <div className='underline'></div>
      </div>

      <div className='followers'>
        <div className='container'>
          {
            users?.map( follower => (
              <Follower key={follower.id} {...follower} />
            ))
          }
        </div>

        <div className='btn-container'>
          <button className='prev-btn' onClick={() => handleMovePage(-1)}>
            Prev
          </button>
          {
            data?.map((item, idx) => (
              <button
                key={idx}
                className={`page-btn ${(idx === page) && 'active-btn'}`}
                onClick={() => setPage(idx)}
              >
                { idx + 1}
              </button>
            ))
          }
          <button className='next-btn' onClick={() => handleMovePage(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
