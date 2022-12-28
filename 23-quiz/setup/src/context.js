import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { QuestionsAdapter } from './adapter/questions-adapter'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const quizInitialState = {
  totalQuestions: 10,
  category: 'sports',
  difficulty: 'easy' 
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answering, setAnswering] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [quizSetup, setQuizSetup] = useState(quizInitialState)

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
    setQuestionIdx((prevQuestionIdx) => {
      const nextQuestionIdx = prevQuestionIdx + 1;
      const lastQuestionIdx = questions.length - 1;

      if(nextQuestionIdx > lastQuestionIdx) return 0;

      return nextQuestionIdx;
    })
  }

  const checkAnswer = (answer) => {
    if(currentQuestion.correctAnswer === answer){
      setCorrectAnswer( count => count + 1);
    }
    handleNextQuestion();
  }

  const resetQuiz = () => {
    setCorrectAnswer(0);
    setShowModal(false);
    setAnswering(false);
    setQuizSetup(quizInitialState)
  }

  useEffect(() => {
    if(questionIdx == questions.length - 1) {
      setShowModal(true);
    }
  },[questionIdx])

  return (
    <AppContext.Provider value={{
      quizSetup,
      questions,
      setQuizSetup,
      handleSubmit,
      loading,
      answering,
      setAnswering,
      currentQuestion,
      handleNextQuestion,
      questionIdx,
      checkAnswer,
      correctAnswer,
      showModal,
      resetQuiz
    }}>
      {children}
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
