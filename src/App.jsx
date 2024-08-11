import { useState, useEffect } from 'react'
import Answers from './components/Answers'
import Questions from './components/Questions'
import Start from './components/Start';

import data from './data';

function App() {

  const [questions, setQuestions] = useState(data); //define as perguntas em um estado
  const [randomNumber, setRandomNumber] = useState(0); //estado para o index da pergunta aleatoria
  const [quizStarted, setQuizStarted] = useState()
  const [score, setScore] = useState(0)
  const [fail, setFail] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("") //estado da resposta selecionada
  const [isRight, setIsRight] = useState(false) //estado para saber se a resposta esta certa ou errada

  // funcao do numero aleatorio
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * questions.length))
  }, [questions, fail, score])

  function startQuiz() {
    setQuizStarted(true)
  }

  function countFail() {
    alert("wrong")
    setFail(prevFail => prevFail + 1)
    if (fail == 2){
      setQuizStarted(false)
    }
  }

  function handleScore(isRight) {
    if(isRight == true) {
      alert("correct")
      setScore(prevScore => prevScore + 10)
    } else {
      setScore(0)
    }
    alert(score)
  }

  // funcao para verificar se a questao esta certa ou errada
  function checkQuestion() {
    if(questions[randomNumber - 1]?.correctAnswer == selectedAnswer ){
      setIsRight(true)
      handleScore(isRight)
    } else {
      countFail()
    }
  }

  return (
    // div geral
    <div id="container">
      {
        !quizStarted 
        ? (
          <Start startQuiz={startQuiz}/>
        ) 
        : (
          <>
            <Questions /* componente de questoes */
              question = {questions} /* passando as questoes para o componente */
              questionId = {randomNumber}/* passando o index da questao escolhida */
            />
      
            <Answers /* componente de respostas */
              question = {questions}/* passando as questoes para o componente */
              questionId = {randomNumber}/* passando o index da questao escolhida */
              selectedAnswer = {selectedAnswer}
              setSelectedAnswer = {setSelectedAnswer}
              isRight = {isRight}
              setIsRight = {setIsRight}
              checkQuestion = {checkQuestion}
              fail = {fail}
              countFail = {countFail}
              handleScore = {handleScore}
            />
          </>
        )
      }
    </div>
  )
}

export default App
