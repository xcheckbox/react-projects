import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { loading, news, removeStory, dispatch } = useGlobalContext();
  
  if(loading) return (<div className='loading'></div>)

  return (
    <div className='stories'>
      {
        news.map( story => {
          const { title, num_comments, author, points, objectID, url } = story;
          return (
            <article className='story' key={objectID}>
              <h4 className='title'>{ title }</h4>
              <p className='info'>
                {`${points} points by ${author} | ${num_comments} comments`}
              </p>
              <div>
                <a
                  href={url}
                  target='_blank'
                  className='read-link'
                  rel='noopener noreferrer'
                >
                  read more
                </a>
                <button
                  className='remove-btn'
                  onClick={() => removeStory(dispatch, objectID)} 
                >
                  remove
                </button>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Stories
