import axios from 'axios'
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const[pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {setPokemon(response.data.results)});
  }, []);  

  return (
    <div>
      <h1>List of Pokemon</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;