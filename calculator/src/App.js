import './App.css';
import Bottom from './components/Bottom/Bottom.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import {useState} from 'react'

function App() {
  const [equation, setEquation] = useState('');
  const [answer, setAnswer] = useState('')

  return (
    <div className='d-flex flex-column align-items-center mx-auto' style={{height: '400px', backgroundColor: 'red', width: '350px', padding: '4px', margin: '15%'}}>
      <div className='d-flex flex-column align-items-center m-4' style={{ height: '100vh' }}>
        <Display equation={equation} answer={answer}/>
        <Bottom setEquation={setEquation} setAnswer={setAnswer} equation={equation}/>
      </div>
    </div>
  );
}

export default App;
