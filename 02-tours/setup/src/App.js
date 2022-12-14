import React from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
import useTours from './hooks/useTours';
import { Title } from './components/Title';

const API_URL = 'https://course-api.com/react-tours-project';

function App() {
  const { data, loading, removeById, refreshData } = useTours(API_URL);

  if (loading) return <Loading />;

  return (
    <main>
      <section>
        <Title tours={data} onRefresh={refreshData}/>
        <Tours tours={data} onRemove={removeById} />
      </section>
    </main>
  )
}

export default App
