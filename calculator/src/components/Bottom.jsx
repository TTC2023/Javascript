import React, { useState } from 'react';

const Bottom = ({setEquation}) => {

  const handleButtonClick = (value) => {
    setEquation((prevEquation) => prevEquation * 10 + value);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(0)}>0</button>
      <button onClick={() => handleButtonClick(1)}>1</button>
      <button onClick={() => handleButtonClick(2)}>2</button>
      <button onClick={() => handleButtonClick(3)}>3</button>
      <button onClick={() => handleButtonClick(4)}>4</button>
      <button onClick={() => handleButtonClick(5)}>5</button>
      <button onClick={() => handleButtonClick(6)}>6</button>
      <button onClick={() => handleButtonClick(7)}>7</button>
      <button onClick={() => handleButtonClick(8)}>8</button>
      <button onClick={() => handleButtonClick(9)}>9</button>
    </div>
  );
};

export default Bottom;
