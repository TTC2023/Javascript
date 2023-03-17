
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import React,{useState} from 'react'
import AuthorEdit from './components/AuthorEdit';


function App() {

  const[authors, setAuthors] = useState([])

  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>
      <Routes>
        <Route element={<AuthorEdit/>} path='/edit/:id'/>
        <Route element={<AuthorList/>} path='/'/>
        <Route element={<AuthorForm authors={authors} setAuthors={setAuthors}/>} path='/create'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
