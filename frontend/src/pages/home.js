import React from "react";
import {useNavigate} from "react-router-dom"

const Home = () =>{
    const navigate = useNavigate()

    return(
        <div>
            <h1>CHATBOT EN MERN</h1>
            <button onClick={() => navigate("/add")}>Agregar Preguntas</button>
            <button onClick={() => navigate("/chat")}>Usar Chat</button>
        </div>
    )
}

export default Home