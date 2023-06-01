import { useState } from 'react';
import './App.css';
import Result from './components/Result';
import Search from './components/Search.jsx'

function App() {

  const [search, setSearch] = useState([])

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}/>
      <Result search={search}/>
    </div>
  );
}

export default App;
