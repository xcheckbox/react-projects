import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  const {
    loading,
    answering,
    currentQuestion,
    handleNextQuestion
  } = useGlobalContext();

  if(loading) return <Loading />
  if(!answering) return <SetupForm />

  return (
    <>
      <div className='quiz'>
        <p className='correct-answers'>Correct answers: 6 / 18</p>
        <div className='container'>
          <h2>{ currentQuestion.question }</h2>
          <div className='btn-container'>
            {
              currentQuestion.answers.map((answer) => (
                <button className='answer-btn'>{ answer }</button>
              ))
            }
          </div>
        </div>
        <button
          className='next-question'
          onClick={() => handleNextQuestion() }
        >
          Next question
        </button>
      </div>
    </>
  )
}

export default App
