export default function Failed({tryAgain, score}) {

    let finalMessage = ""

    if(score <= 40) {
        finalMessage = "Não desanime, continue tentando";
    } else if (score <= 70){
        finalMessage = "Nada mal, que tal mais uma chance?";
    } else if (score > 70) {
        finalMessage = "Você é um verdadeiro garoto de programa"
    }

    return (
        <div className="failed">
            <h1 className="final-message">{finalMessage}</h1>
            <h2 className="score">Sua pontuação: {score}</h2>
            <div onClick={tryAgain} className="try-again-button">
                TENTE NOVAMENTE
            </div>
        </div>
    )
}