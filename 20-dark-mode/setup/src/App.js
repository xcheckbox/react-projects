import React, { useEffect } from 'react'
import data from './data'
import Article from './Article'
import { useLocalStorage } from './useLocalStorage'


function App() {
  const LIGHT_THEME = 'light-theme';
  const DARK_THEME = 'dark-theme';

  const [ theme, setTheme ] = useLocalStorage('theme', LIGHT_THEME);

  const handleTheme = () => {
    setTheme((prevTheme) => {
      return (prevTheme === LIGHT_THEME) ? DARK_THEME : LIGHT_THEME
    })
  }

  useEffect(() => {
    document.body.className = theme;
    setTheme(theme);
  }, [theme, setTheme])

  return (
    <>
    <div className='nav-center'>
      <h1>Overreacted</h1>
      <button className='btn' onClick={handleTheme}>Toggle</button>
    </div>
    <div className='articles'>
      {
        data.map( article => <Article article={article} />)
      }
    </div>
    </>
  )
}

export default App
