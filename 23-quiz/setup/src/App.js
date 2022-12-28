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
    handleNextQuestion,
    checkAnswer,
    questionIdx,
    correctAnswer: correctCount
  } = useGlobalContext();

  if(loading) return <Loading />
  if(!answering) return <SetupForm />

  const { correactAnswer } = currentQuestion;

  return (
    <>
      <Modal />
      <div className='quiz'>
        <p className='correct-answers'>Correct answers: {correctCount} / {questionIdx}</p>
        <div className='container'>
          <h2>{ currentQuestion.question }</h2>
          <span>{ correactAnswer }</span>
          <div className='btn-container'>
            {
              currentQuestion.answers.map((answer, idx) => (
                <button
                  key={idx}
                  className='answer-btn'
                  onClick={() => checkAnswer(answer)}
                >
                  { answer }
                </button>
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
