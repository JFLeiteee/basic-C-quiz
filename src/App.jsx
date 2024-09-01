import { useState, useEffect } from 'react'
import Answers from './components/Answers'
import Questions from './components/Questions'
import Start from './components/Start';
import data from './data';
import Failed from './components/Failed';

function App() {

  const [questions, setQuestions] = useState(data); //define as perguntas em um estado
  const [randomNumber, setRandomNumber] = useState(); //estado para o index da pergunta aleatoria
  const [quizStarted, setQuizStarted] = useState()
  const [score, setScore] = useState(0)
  const [fail, setFail] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("") //estado da resposta selecionada
  const [isRight, setIsRight] = useState(false) //estado para saber se a resposta esta certa ou errada
  const [failed, setFailed] = useState(false)

  // inicio do quiz
  function startQuiz() {
    setQuizStarted(true)
    nextQuestion()
  }

  // função para executar a proxima questão
  function nextQuestion() {
    setRandomNumber(Math.floor(Math.random() * (questions.length)))
    handleRepeat();
  }

  // conta de erros
  function countFail() {
    setFail(prevFail => prevFail + 1)
    setTimeout(() => {
      nextQuestion();
    }, 1000)
    if (fail >= 2){
      setFailed(true)
      console.log(failed)
    }
  }

  // contador de pontuação
  function handleScore() {
    if(isRight == true) {
      setScore(prevScore => prevScore + 10)
    } else {
      setScore(prevScore => prevScore + 0)
    }
  }

  function handleRepeat() {
    const updatedQuestions = questions.filter((_, index) => index !== randomNumber)
    setQuestions(updatedQuestions)
    console.log(questions)
  }

  // funcao para verificar se a questao esta certa ou errada
  function checkQuestion() {
    if(selectedAnswer == ""){
      return
    } else {
      if(questions[randomNumber].correctAnswer == selectedAnswer ){
        setIsRight(true)
        handleScore()
        setTimeout(() => {
          nextQuestion();
        }, 1000)
      } else {
        countFail()
      }
    }
  }

  function tryAgain() {
    setQuestions(data)
    setFail(0)
    setScore(0)
    setFailed(false)
  }

  console.log(randomNumber)

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