import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { QuestionsAdapter } from './adapter/questions-adapter'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answering, setAnswering] = useState(false);
  const [quizSetup, setQuizSetup] = useState({
    totalQuestions: 10,
    category: 'sports',
    difficulty: 'easy'
  })

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(QuestionsAdapter(data.results));

    } catch (error) {
      setQuestions([]);
    }
    setLoading(false);
    setAnswering(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { totalQuestions, category, difficulty } = quizSetup;
    fetchData(`${API_ENDPOINT}amount=${totalQuestions}&difficulty=${difficulty}&category=${table[category]}&type=multiple`);
  }

  const currentQuestion = questions[questionIdx];

  const handleNextQuestion = () => {
    console.log(questions.length, quizSetup.totalQuestions)
    if(questionIdx === quizSetup.totalQuestions) {
      setAnswering(false);
    }

    setQuestionIdx(questionIdx + 1)
  }

  return (
    <AppContext.Provider value={{
      quizSetup,
      setQuizSetup,
      handleSubmit,
      loading,
      answering,
      setAnswering,
      currentQuestion,
      handleNextQuestion
    }}>
      {children}
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
