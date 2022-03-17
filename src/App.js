import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Starships from './pages/Starships/Starships';

function App() {
  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      <Starships />
    </>
  );
}

export default App;
