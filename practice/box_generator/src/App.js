
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [colorArray, setColorArray] = useState([])

  const currentColor= (newColor) => {
    setColorArray([...colorArray, newColor])
  }

  return (
    <div className="App">
      <Form currentColor={currentColor}/>
      <div>
        {colorArray.map((color, index) => (
        <Display key={index} color={color} />
      ))}
    </div>
    </div>
  );
}

export default App;
