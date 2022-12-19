import React, { useEffect } from 'react'

const Alert = () => {
  return (
    <>
      <div className='alert alert-danger'>
        Please enter value
      </div>

      <div className='alert alert-success'>
        Item added to the list
      </div>

      <div className='alert alert-danger'>
        Empty list
      </div>
    </>
  )
}

export default Alert
