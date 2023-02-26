import React, {useState} from "react";
import "./style.css";
import Axios from 'axios'

export default function App() {
  
  const [joke, setJoke] = useState("")

  const getJoke = () => {
    Axios.get("https://599d6a620a785b0011f4f6c8.mockapi.io/users")
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={}>Get Joke</button>
      {joke}
    </div>
  );
}
