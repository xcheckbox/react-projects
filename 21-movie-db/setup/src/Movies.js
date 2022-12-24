import React, { useEffect } from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import { Loading } from './Loading'
import { MovieAdapter } from './adapter/movie-edapter'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'


const Movies = () => {

  const { movies, loading } = useGlobalContext();

  if(loading) return <Loading />

  return (
    <div className='movies'>
    {
      movies.map( movie => {
        const { id, image, title, year } = MovieAdapter(movie);

        return (
          <Link to={`/movies/${id}`} className='movie' key={id}>
            <article>
              <img src={(image === 'N/A') ? url : image} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })
    }
  </div>
  )
}

export default Movies
