import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import CocktailList from './components/CocktailList'
import { AppRouter } from './routes'
function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

export default App
