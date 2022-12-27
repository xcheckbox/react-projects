const shuffleArray = (array) => {
  for(let i = array.length - 1; i > 0; i--) {
    const randomIdx = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIdx]] = [array[randomIdx], array[i]]
  }

  return array;
}

export const QuestionsAdapter = (questions) => {
  return questions.map( ({question, correct_answer, incorrect_answers}) => ({
    question,
    answers: shuffleArray([...incorrect_answers, correct_answer]),
    correactAnswer: shuffleArray([...incorrect_answers, correct_answer]).indexOf(correct_answer)
  }))
}