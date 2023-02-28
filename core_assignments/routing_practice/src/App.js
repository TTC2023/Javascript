import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Color from './components/Color';
import Element from './components/Element'
    
    
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path=":element" element={<Element />}/>
        <Route path=":word/:color/:background" element={<Color/>}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App

