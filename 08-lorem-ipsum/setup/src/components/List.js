import React from 'react'

export const List = ({ items }) => {

  if(!items.length) return (
    <div>
      <p>Empty List. In order to generate a paragraph Click on Generate</p>
    </div>
  )

  return (
    <div className='lorem-text'>
      {
        items.map( (text, idx) => (<p key={idx}>{text}</p>))
      }
    </div>
  )
}
