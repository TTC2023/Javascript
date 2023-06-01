import { useState } from 'react';
import './App.css';
import Search from './components/Search.jsx'

function App() {

  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
