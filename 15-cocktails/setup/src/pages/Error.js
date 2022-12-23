import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='section error-page'>
      <div className='error-container'>
        <h1>Oops! it's a dead end</h1>
        <Link to={'/'} className='btn btn-primary'>Back home</Link>
      </div>
    </div>
  )
}

export default Error
