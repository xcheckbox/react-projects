import React from 'react'

const Follower = ({ avatar_url, }) => {
  return (
    <div className='card'>
      <img src={avatar_url} />
      <h4>UserName</h4>
      <a className='btn' target='_blank'>View profile</a>
    </div>
  )
}

export default Follower
