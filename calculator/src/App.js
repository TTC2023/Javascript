import './App.css';
import Bottom from './components/Bottom.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import {useState} from 'react'

function App() {
  const [equation, setEquation] = useState(0)

  return (
    <div className='d-flex flex-column align-items-center mx-auto' style={{height: '400px', backgroundColor: 'red', width: '350px', padding: '4px', margin: '15%'}}>
      <div className='d-flex flex-column align-items-center m-4' style={{ height: '100vh' }}>
        <Display equation={equation}/>
        <Bottom setEquation={setEquation}/>
      </div>
    </div>
  );
}

export default App;
