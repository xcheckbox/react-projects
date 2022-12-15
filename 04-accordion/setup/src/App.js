import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <section className='container'>
        <h3>Questions and answers about login</h3>

        <div>
          {
            data.map( question => <SingleQuestion key={question.id} question={ question } />)
          }
        </div>
      </section>
    </main>
  )
}

export default App;
