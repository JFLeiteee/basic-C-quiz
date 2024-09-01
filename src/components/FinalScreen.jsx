export default function FinalScreen({tryAgain, score}){
    return(
        <div className="finalPage">
            <h1>Você Ganhou!!</h1>
            <h2 className="score">Sua pontuação: {score}</h2>
            <div onClick={tryAgain} className="try-again-button">
                JOGAR DE NOVO
            </div>
        </div>
    )
}