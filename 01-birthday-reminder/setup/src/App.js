import React, { useState } from 'react';
import data from './data';
import List from './components/List';

function App() {
  const [birthdays, setBirthdays] = useState(data);

  const birthdaysLength = birthdays.length;

  const handleClick = () => {
    (birthdaysLength) ? setBirthdays([]) : setBirthdays(data);
  }

  return (
  <main>
    <section className='container'>
      <h3>{ birthdaysLength } birthdays today</h3>
      <List birthdays={ birthdays } />

      <button
        onClick={() => handleClick([])}
      >
        { birthdaysLength ? 'Clear All' : 'Show All' }
      </button>
    </section>
  </main>);
}

export default App;
