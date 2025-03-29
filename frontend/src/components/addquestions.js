import {useState} from "react"
import axios from "axios"
import {useNavigate } from "react-router-dom"

const AddQuestions = () =>{
    const [question, setQuestion ] = useState("")
    const [answer, setAnswer ] = useState("")
    const navigate = useNavigate()

    const handleSubmint = async (e) =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/api/chats/add", {question, answer})
            alert("Pregunta agregada con exito")
            setQuestion("")
            setAnswer("")
        }catch(error){
            console.error("Error al agregar pregunta ",error )
        }
    }

    return(
        <div>
        <h2>Agregar pregunta</h2>
        <button onClick={()=> navigate("/")}>Volver al menu inicio</button>
        <form onSubmit={handleSubmint}>
        <div>
        <label>Pregunta: </label>
        <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
        ></input>
        </div>
        <div>
        <label>Respuesta: </label>
        <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
        ></input>
        </div>
        <button type ="submit">Guardar</button>
        </form>
        </div>
    )
}

export default AddQuestions;