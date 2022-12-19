import React, { useEffect } from 'react'

const Alert = ({ alertData, setAlert }) => {
  const { type = 'danger', title } = alertData;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAlert({ show: false })
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [])

  return (
    <>
      <div className={`alert alert-${type}`}>
        { title }
      </div>
    </>
  )
}

export default Alert
