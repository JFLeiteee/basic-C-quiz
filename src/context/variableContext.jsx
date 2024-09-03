import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import data from '../data';

export const VariableContext = createContext();

export const ContextProvider = ({children}) => {

    const [questions, setQuestions] = useState(data); //define as perguntas em um estado
    const [questionId, setQuestionId] = useState(); //estado para o index da pergunta aleatoria
    const [score, setScore] = useState(0)
    const [fail, setFail] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("") //estado da resposta selecionada
    const [isRight, setIsRight] = useState(false) //estado para saber se a resposta esta certa ou errada
    const [failed, setFailed] = useState(false)
    const [finished, setFinished] = useState(false)
    
    // const navigate = useNavigate();

    // função para executar a proxima questão
    function nextQuestion() {
        let randomIdx
        if (questions.length > 1) {
            randomIdx = (Math.floor(Math.random() * (questions.length - 1)))
        if(randomIdx == -1){
            setQuestionId(randomIdx + 1)
        } else {
            setQuestionId(randomIdx)
        }

        const updatedQuestions = questions.filter((_, index) => index !== questionId)
            setQuestions(updatedQuestions)
        } else if (questions.length === 1) {
            setQuestionId(0)
        }
    }

    // conta de erros
    function countFail() {
        setFail(prevFail => prevFail + 1)
        if (fail >= 2){
            setFailed(true);
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

    // funcao para verificar se a questao esta certa ou errada
    function checkQuestion() {
        if(selectedAnswer == ""){
            return
        } else {
            if(questions[questionId].correctAnswer === selectedAnswer ){
                setIsRight(true)
                handleScore()
                setTimeout(() => {
                    nextQuestion();
                }, 1000)
                if(questions.length == 1) {
                    setTimeout(() => {
                        setFinished(true)
                    }, 1000)
                }   
            } else if (questions[questionId].correctAnswer !== selectedAnswer){
                setIsRight(false)
                countFail()
                setTimeout(() => {
                    nextQuestion();
                }, 1000)
            }
        }
    }

    function tryAgain() {
        setQuestions(data)
        setFail(0)
        setScore(0)
        setFailed(false)
    }

    return (
        <VariableContext.Provider 
            value = {{
                questions,
                questionId,
                selectedAnswer,
                setSelectedAnswer,
                checkQuestion,
                isRight,
                nextQuestion,
                failed,
                finished
            }}
        > 
            {children}
        </VariableContext.Provider>
    )
}