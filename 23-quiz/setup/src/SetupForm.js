import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quizSetup, setQuizSetup, handleSubmit } = useGlobalContext();
  const { totalQuestions, category, difficulty } = quizSetup;

  const handleSetupQuiz = (e) => {
    setQuizSetup({
      ...quizSetup,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='quiz quiz-small'>
      <form className='setup-form' onSubmit={handleSubmit}>
        <h2>Setup quiz</h2>
        <div className='form-control'>
          <label form='totalQuestions'>number of questions</label>
          <input
            type='number'
            name='totalQuestions'
            id='totalQuestions'
            className='form-input'
            min={1} max={50}
            value={totalQuestions}
            onChange={handleSetupQuiz}
          />
        </div>

        <div className='form-control'>
          <label form='category'>number of questions</label>
          <select
            name='category'
            id='category'
            className='form-input'
            value={category}
            onChange={handleSetupQuiz}
          >
            <option value='sports'>sports</option>
            <option value='history'>history</option>
            <option value='politics'>politics</option>
          </select>
        </div>

        <div className='form-control'>
          <label form='difficulty'>number of questions</label>
          <select
            name='difficulty'
            id='difficulty'
            className='form-input'
            value={difficulty}
            onChange={handleSetupQuiz}
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>
        <button type='submit' className='submit-btn'>start</button>
      </form>
    </div>
  )
}

export default SetupForm
