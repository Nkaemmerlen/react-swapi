import { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom';


const Starships = (props) => {
  const [starships, setStarships] = useState([])
  useEffect(()=> {
    getAllStarships()
    .then(shipData => setStarships(shipData.results))
  }, [])
  return (
    <>
      <h2>Starships</h2>
      <div className='icon-container'>
      {starships.map((starship) => (
      <Link
      
        to='/starship'
        state={{starship}}
        key={starship.name}
      >
        <div id='classDiv'>
          {starship.name}
        </div>
      </Link>
      ))}
      </div>
    </>
  );
}

export default Starships;
