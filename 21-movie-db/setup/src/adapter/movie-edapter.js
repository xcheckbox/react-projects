export const MovieAdapter = (movie) => {

  return {
    id: movie.imdbID,
    image: movie.Poster,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    plot: movie.Plot
  }
}