import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Detail from './components/Detail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default/>
          <Route element={<Detail/>} path="/products/:id"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
