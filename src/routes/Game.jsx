import Questions from "../components/Questions"
import Answers from "../components/Answers"
import { VariableContext } from "../context/variableContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function Game() {

    const {failed, finished} = useContext(VariableContext)

    const navigate = useNavigate()

    function defeat() {
        if(failed) {
            navigate("/defeat")
        }
    }
    function victory() {
        if(finished) {
            navigate("/victory")
        }
    }
    
    defeat()
    victory()

    return(
        <div id="container">
            <Questions /* componente de questoes *//>
            <Answers /* componente de respostas *//>
        </div>
    )
}