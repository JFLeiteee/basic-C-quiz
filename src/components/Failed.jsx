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
            <h1>{finalMessage}</h1>
            <h1>Sua pontuação: {score}</h1>
            <h1 onClick={tryAgain}>tente novamente</h1>
        </div>
    )
}