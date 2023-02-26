import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"


const Home = (props) => { 
  return (
    <h1 style={{color: "red"}}>Home Component</h1>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes> */}
    </BrowserRouter>
  );
}
    
export default App

