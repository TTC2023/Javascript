
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const[pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            setPokemon(response.results)
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
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
