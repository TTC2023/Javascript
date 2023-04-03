
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import StoreForm from './components/StoreForm';
import React from 'react'
import OneStore from './components/OneStore';
import StoreEdit from './components/StoreEdit';

function App() {


  return (
    <>
      <h1 className='m-3'>Store Finder</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Index/>} path="/"/>
          <Route element={<StoreForm/>} path="/create" />
          <Route element={<OneStore/>} path="/store/:id"/>
          <Route element={<StoreEdit/>} path="/store/:id/edit"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
