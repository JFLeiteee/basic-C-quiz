import { useState, useEffect } from 'react'
import Answers from './components/Answers'
import Questions from './components/questions'

import data from './data';

function App() {

  const [questions, setQuestions] = useState(data); //define as perguntas em um estado
  const [randomNumber, setRandomNumber] = useState(0); //estado para o index da pergunta aleatoria

  // funcao do numero aleatorio
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * questions.length))
  }, questions)

  return (
    // div geral
    <div id="container">
      <Questions /* componente de questoes */
        
        question = {questions} /* passando as questoes para o componente */
        questionId = {randomNumber}/* passando o index da questao escolhida */
      />

      <Answers /* componente de respostas */
        question = {questions}/* passando as questoes para o componente */
        questionId = {randomNumber}/* passando o index da questao escolhida */
      />
    </div>
  )
}

export default App
