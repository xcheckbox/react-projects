import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { page, totalPages, loading, handlePages, dispatch } = useGlobalContext();

  const validateCurrentPage = (step) => {
    const currentPage = page + step;
    const lastPage = totalPages - 1;

    if(currentPage < 0) return lastPage;
    if(currentPage > lastPage) return 0;

    return currentPage;
  }

  const handlePageStep = (step) => {
    handlePages(dispatch, validateCurrentPage(step))
  }

  return (
    <div className='btn-container'>
      <button disabled={loading} onClick={() => handlePageStep(-1)}>prev</button>
      <p>{ page + 1 } of { totalPages }</p>
      <button disabled={loading} onClick={() => handlePageStep(1)}>next</button>
    </div>
  )
}

export default Buttons
