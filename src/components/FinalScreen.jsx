import { useNavigate } from "react-router-dom"
export default function FinalScreen(){

    const navigate = useNavigate();

    return(
        <div className="finalPage">
            <h1>Você Ganhou!!</h1>
            <h2 className="score">Sua pontuação: </h2>
            <div onClick={() => navigate('/')} className="try-again-button">
                JOGAR DE NOVO
            </div>
        </div>
    )
}