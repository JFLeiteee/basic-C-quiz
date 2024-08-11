export default function Questions({question, questionId}) {
    return(
        <div className="questions">
            {
                <h1>{question[questionId]?.question}</h1>
            }
        </div>
    )
}