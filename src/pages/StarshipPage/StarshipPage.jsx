import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import { useEffect, useState } from "react";



const StarshipPage = (props) => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()
  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(shipData => setShipDetails(shipData))
  },[])
  return (
    <>
    {shipDetails.length ?
      <div className="icon-container">
        <div id="classDiv1">
        <h5>Name: {shipDetails.name}</h5>
        <h5>Model: {shipDetails.model}</h5>
        <Link className="link" to="/">
          go back
        </Link>
        </div>
      </div>
      :
      <>
        <p>Loading Details</p>
      </>
    }
    </>
  );
}

export default StarshipPage;