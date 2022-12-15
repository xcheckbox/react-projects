import React from 'react';
import Review from './components/Review';
import { Title } from './components/Title';

function App() {
  return (
    <main>
      <section className="container">
        <Title />
        <Review />
      </section>
    </main>
  );
}

export default App;
