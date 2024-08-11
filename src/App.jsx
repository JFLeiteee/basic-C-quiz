import { useState, useEffect } from 'react'
import Answers from './components/Answers'
import Questions from './components/Questions'
import Start from './components/Start';
import data from './data';
import Failed from './components/Failed';

function App() {

  const [questions, setQuestions] = useState(data); //define as perguntas em um estado
  const [randomNumber, setRandomNumber] = useState(0); //estado para o index da pergunta aleatoria
  const [quizStarted, setQuizStarted] = useState()
  const [score, setScore] = useState(0)
  const [fail, setFail] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("") //estado da resposta selecionada
  const [isRight, setIsRight] = useState(false) //estado para saber se a resposta esta certa ou errada
  const [preventRepeat, setPreventRepeat] = useState([])
  const [failed, setFailed] = useState(false)
  
  // inicio do quiz
  function startQuiz() {
    setQuizStarted(true)
    nextQuestion()
  }

  // função para executar a proxima questão
  function nextQuestion() {
    setRandomNumber(Math.floor(Math.random() * (questions.length - 1)))
    handleRepeat();
  }

  // conta de erros
  function countFail() {
    setFail(prevFail => prevFail + 1)
    nextQuestion()
    if (fail >= 2){
      setFailed(true)
      console.log(failed)
    }
  }

  // contador de pontuação
  function handleScore(isRight) {
    if(isRight == true) {
      alert("correct")
      setScore(prevScore => prevScore + 10)
    } else {
      setScore(prevScore => prevScore + 0)
    }
  }

  function handleRepeat() {
    // console.log("numero: " + randomNumber)
    if(preventRepeat.includes(randomNumber)){
      nextQuestion()
    } else {
      setPreventRepeat(prevRepeat => [...prevRepeat, randomNumber])
    }

    // console.log(preventRepeat)
  }

  // funcao para verificar se a questao esta certa ou errada
  function checkQuestion() {
    if(selectedAnswer == ""){
      return
    } else {
      if(questions[randomNumber - 1]?.correctAnswer == selectedAnswer ){
        setIsRight(true)
        handleScore(true)
        nextQuestion()
      } else {
        countFail()
      }
    }
  }

  function tryAgain() {
    setFail(0)
    setScore(0)
    setFailed(false)
  }

  return (
    // div geral
    <div id="container">
      {
        !quizStarted 
        ? <Start startQuiz={startQuiz}/>
        : (
          failed
          ? <Failed 
              tryAgain = {tryAgain}
              score = {score}
            />
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
        )
      }
    </div>
  )
}

export default App
