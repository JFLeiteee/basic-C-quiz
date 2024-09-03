import { useContext } from 'react'
import title from '../assets/title.png'
import { useNavigate } from 'react-router-dom'
import { VariableContext } from '../context/variableContext'

export default function Start() {

    const navigate = useNavigate()

    const { nextQuestion } = useContext(VariableContext)

    function startGame() {
        nextQuestion()
        navigate("/play")
    }

    return (
        <div className="start">
            <img src={title} alt="" />
            <div 
                className="start-button"
                onClick={() => startGame()}
            >
                COMEÇAR
            </div>
        </div>
    )
}