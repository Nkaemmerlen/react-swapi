import './App.css';
import { Routes, Route } from 'react-router-dom'
import Starships from './pages/Starships/Starships';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
      <h1>STAR WARS STARSHIPS</h1>
      <Routes>
        <Route path='/' element={<Starships />}/>
        <Route path='/starship' element={<StarshipPage />}/>
      </Routes>
    </>
  );
}

export default App;
