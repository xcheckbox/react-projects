import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [category, setCategory] = useState('');

  const allCategories = [...new Set(items.map( c => c.category)) ]

  const filterMenuByCategory = (categoryName = '') => {
    if(category === categoryName) return;

    const filteredMenu = items.filter( ({category}) => {
      return category === categoryName;
    })

    const newMenu = filteredMenu.length ? filteredMenu : items;

    setMenu(newMenu);
    setCategory(categoryName)
  }

  return (
    <main>
      <section className='section menu'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>

        <Menu
          filterMenu={filterMenuByCategory}
          options={allCategories}
        />

        <Categories items={menu}/>
      </section>
    </main>
  )
}

export default App;
