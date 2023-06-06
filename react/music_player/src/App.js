import { useState,useEffect } from 'react';
import './App.css';
import Result from './components/Result';
import Search from './components/Search.jsx'

function App() {

  const [search, setSearch] = useState([])

  useEffect(() => {
    console.log('Search updated:', search);
  }, [search]);

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}/>
      <Result search={search}/>
    </div>
  );
}

export default App;
