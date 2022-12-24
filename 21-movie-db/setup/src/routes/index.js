import Home from '../Home';
import Movie from '../SingleMovie';

export const routes = [
  {
    to: '/',
    path: '',
    Component: Home,
    name: 'Home',
  },
  {
    to: '/movies/:id',
    path: 'movies/:id',
    Component: Movie,
    name: 'SingleMovie',
  }
]