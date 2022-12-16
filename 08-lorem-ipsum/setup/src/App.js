import React, { useState } from 'react';
import data from './data';
import { List } from './components/List';
import { LoremForm } from './components/LoremForm';

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [paragraphCount, setParagraphCount] = useState(1);

  const repeatedParagraphs = () => {
    const repeatTimes = Math.ceil(paragraphCount / data.length);
    const totalItems = [].concat( ...new Array(repeatTimes).fill(data));
    
    return totalItems.slice(0, paragraphCount);
  }

  const handleChange = (event) => {
    setParagraphCount(Number(event.target.value));
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    setParagraphs(repeatedParagraphs());
  }

  return (
    <div className='section-center '>
      <h3>Tired of boring lorem ipsum</h3>
      
      <LoremForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={paragraphCount}
      />

      <List items={paragraphs} />
    </div>
  )
}

export default App;
