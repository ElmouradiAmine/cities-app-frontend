import axios from "axios";
import React, {useState, useEffect} from "react";
import CitiesList from '../CitiesList/CitiesList'
import CityInput from '../CityInput/CityInput'

import './CityDashboard.css'
const CityDashboard = () => {
const [cities, setCities] = useState([
    
]);

const [search, setSearch] = useState('');

useEffect(() => {
    console.log("run");
    axios({
        url: `http://localhost:5000/cities?search=${search}`
    }).then(response => response.data).then((data) =>{
        setCities(data);
    });

    
}, [search])

const handleSubmit = (value) => {
    setSearch(value);
    console.log(value)
}

const getCitiesByCategory = (category) => {
    return cities.filter(city => city.category === category);
}

// const getCitiesBySearch = () => {
//     return cities.filter(city => city.name.includes(search) || city.postalCode.includes(search));
// }
 
  return (
    <div className="city-dashboard">
      <CityInput onSubmit={handleSubmit}/>
      <CitiesList title="Villes de métropole" cities={getCitiesByCategory("METROPOLE")} />
      <CitiesList title="Villes d'outre-mer" cities={getCitiesByCategory("OUTRE_MER")}/>
    </div>
  );
};

export default CityDashboard;
