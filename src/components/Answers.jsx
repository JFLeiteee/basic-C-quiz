import { useEffect, useState } from "react"

export default function Answers({question, questionId}) {

    const [selectedAnswer, setSelectedAnswer] = useState("") //estado da resposta selecionada
    const [isRight, setIsRight] = useState(false) //estado para saber se a resposta esta certa ou errada

    // funcao para verificar se a questao esta certa ou errada
    function checkQuestion() {
        if(question[questionId - 1]?.correctAnswer == selectedAnswer ) {
            console.log("voce acertou")
            setIsRight(true)
        } else {
            console.log("voce errou")
            setIsRight(false)
        }
    }

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