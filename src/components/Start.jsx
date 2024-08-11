import title from '../assets/title.png'

export default function Start({startQuiz}) {

    return (
        <div className="start">
            {/* <h1 className="start-title">Quiz Sobre C</h1> */}
            <img src={title} alt="" />
            <div 
                className="start-button"
                onClick={() => startQuiz()}
            >
                COMEÇAR
            </div>
        </div>
    )
}