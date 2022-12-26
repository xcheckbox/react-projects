import React from 'react'

import { useGlobalContext } from './context'

const stories = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

const Stories = () => {
  return (
    <div className='stories'>
      {
        stories.map( story => {
          return (
            <article className='story'>
              <h4 className='title'>Title hdghdjdhjdhdj</h4>
              <p className='info'>
                203030 pomit by
                <span>
                  dwwolelfe | 
                </span>
                6465
                comments
              </p>
              <div>
                <a className='read-link'>read more</a>
                <button className='remove-btn'>remove</button>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Stories
