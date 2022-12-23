import Home from '../pages/Home';
import About from '../pages/About';
import SingleCocktail from '../pages/SingleCocktail';
import Error from '../pages/Error';

export const routes = [
  {
    to: '/',
    path: '',
    Component: Home,
    name: 'Home',
    display: true
  },
  {
    to: '/about',
    path: 'about',
    Component: About,
    name: 'About',
    display: true
  },
  {
    to: '/cocktail/:id',
    path: 'cocktail/:id',
    Component: SingleCocktail,
    name: 'SingleCocktail',
  },
]