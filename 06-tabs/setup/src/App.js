import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { Loading } from './components/Loading';
import { useFetch } from './hooks/useFetch';

const API_URL = 'https://course-api.com/react-tabs-project';

function App() {

  const { data, loading } = useFetch(API_URL);
  const [ jobIdx, setJobIdx ] = useState(0);

  if(loading || !data?.length) return <Loading />

  const companies = data?.map( ({company}) => company);
  const currJob = data[jobIdx];

  const { id, title, dates, duties, company } = currJob;

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>

      <div className='jobs-center'>
        <div className='btn-container'>
          {
            companies?.map( (company, idx) => (
              <button
                key={`${company}-${id}`}
                className={`job-btn ${(idx === jobIdx) && 'active-btn'}`}
                onClick={() => setJobIdx(idx)}
              >
                {company}
              </button>
            ))
          }
        </div>

        <div className='job-info'>
          <h3>{ title }</h3>
          <h4>{ company }</h4>
          <p className='job-date'>{ dates }</p>
            {
              duties.map( (dut, idx) => (
                <div className='job-desc' key={idx}>
                  <FaAngleDoubleRight />
                  <p>{dut}</p>
                </div>
              ))
            }
          <button className='btn'>more info</button>
        </div>
      </div>
    </section>
  )
}

export default App
