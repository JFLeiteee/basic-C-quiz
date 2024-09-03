import { VariableContext } from "../context/variableContext"
import { useContext } from "react";

export default function Questions() {

    const { questions, questionId } = useContext(VariableContext);

    console.log(questionId)
    console.log(questions[questionId]?.question)

    return(
        <div className="questions">
            {
                <h1>{questions[questionId]?.question}</h1>
            }
        </div>
    )
}