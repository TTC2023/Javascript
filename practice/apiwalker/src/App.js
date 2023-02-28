import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';


function App() {
  const [type, setType] = useState("people")
  const [id, setId] = useState(1)
  const [display, setDisplay] = useState("")
  // const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${type}/${id}`)
      .then(res => setDisplay(JSON.stringify(res.data)))
      .catch(err => console.log(err))
  }, [type, id]);

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // navigate(`/${type}/${id}`)
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Type</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        <label>Id</label>
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        <button>Enter</button>
      </form>
      <p>{display}</p>
    </div>
  );
}

export default App;
