import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MovieAdapter } from './adapter/movie-edapter';
import { API_ENDPOINT } from './context'
import { useFetch } from './hooks/useFetch';
import { Loading } from './Loading';

const SingleMovie = () => {
  const [movie, loading, error, getMovie] = useFetch();
  const { id } = useParams();

  useEffect(() => {
    getMovie(`${API_ENDPOINT}&i=${id}`)
  }, [])

  if(loading) return <Loading />
  
  const { image, title, plot, year } = MovieAdapter(movie)

  
  return (
    <div className='single-movie'>
      <img src={image} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to={'/'} className='btn'>Back to movies</Link>
      </div>
    </div>
  )
}

export default SingleMovie
