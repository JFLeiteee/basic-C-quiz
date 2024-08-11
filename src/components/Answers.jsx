import { useEffect, useState } from "react"
import Start from "./Start"

export default function Answers({question, questionId, selectedAnswer, setSelectedAnswer, checkQuestion, isRight}) {

    // reenderiza conforme a resposta
    useEffect(() => {
        checkQuestion()
    }, [selectedAnswer])

    return (
        <div className="answers">
            {
                question[questionId - 1]?.answers.map((answer) => ( //renderiza as perguntas na tela
                    <div 
                        className= {
                            `answer-box 
                            ${answer == selectedAnswer && isRight //se a questao selecionada for a certa, ira destaca-la
                                ? 'correct-answer' 
                                : ''
                            }
                            ${
                                answer == selectedAnswer && !isRight //se a questao selecionada for a errada, ira destaca-la
                                ? 'wrong-answer'
                                : ''
                            }`
                        }
                        key={answer}
                        onClick={() => setSelectedAnswer(answer)} //define a questao selecionada
                    >
                        <p className="answer">{answer}</p>
                    </div>  
                ))
            }
        </div>
    )
}