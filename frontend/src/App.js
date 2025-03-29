import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Chat from "./pages/chat"
import AddQuestions from "./components/addquestions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/chat" element = {<Chat />} />
        <Route path="/add" element = {<AddQuestions />} />
      </Routes>
    </Router>
  );
}

export default App;
