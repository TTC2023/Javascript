
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display'

function App() {
  const [currentColor, setCurrentColor] = useState("");
  const enteredColor = (newColor) => {
    setCurrentColor(newColor)
  }
  return (
    <div className="App">
      <Form onNewColor={enteredColor}/>
      <Display color={currentColor}/>
    </div>
  );
}

export default App;
