import { useContext, useEffect, useState } from "react"
import { VariableContext } from "../context/variableContext"

export default function Answers() {

    const {questions, questionId, selectedAnswer, setSelectedAnswer, isRight, checkQuestion} = useContext(VariableContext);

    // reenderiza conforme a resposta
    useEffect(() => {
        checkQuestion()
    }, [selectedAnswer])

    return (
        <div className="answers">
            {
                questions[questionId]?.answers.map((answer) => ( //renderiza as perguntas na tela
                    <div 
                        className= {
                            `answer-box 
                            ${
                                answer == selectedAnswer && isRight //se a questao selecionada for a certa, ira destaca-la
                                ? 'correct-answer' 
                                : ''
                            }
                            ${
                                answer == selectedAnswer && !isRight && selectedAnswer != ""//se a questao selecionada for a errada, ira destaca-la
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