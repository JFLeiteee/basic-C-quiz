import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VariableContext } from "../context/variableContext";

export default function Failed() {

    let finalMessage = ""

    const {score} = useContext(VariableContext);
    const navigate = useNavigate();

    if(score <= 40) {
        finalMessage = "Não desanime, continue tentando";
    } else if (score <= 70){
        finalMessage = "Nada mal, que tal mais uma chance?";
    } else if (score > 70) {
        finalMessage = "Você é um verdadeiro garoto de programa"
    }

    return (
        <div id="container">
            <h1 className="final-message">{finalMessage}</h1>
            <h2 className="score">Sua pontuação: {score}</h2>
            <div onClick={() => navigate("/")} className="try-again-button">
                TENTE NOVAMENTE
            </div>
        </div>
    )
}