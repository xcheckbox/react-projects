import React from 'react'

const Photo = ({ photo }) => {
  const { image, name, likes, user, userImg, userUrl } = photo;

  return (
    <div className='photo'>
      <img src={image} alt={name} />
      <div className='photo-info'>
        <div>
          <h4>{ user }</h4>
          <p>{ likes } likes</p>
        </div>
        <a href={userUrl} rel='noreferrer noopener' target='_blank'>
          <img className='user-img' src={userImg} alt={user} />
        </a>
      </div>
    </div>
  )
}

export default Photo
