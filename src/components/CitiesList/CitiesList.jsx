import React from "react";
import City from "../City/City";
import Info from "../Info/Info";
import {v4} from 'uuid'
import "./CitiesList.css";

const CitiesList = ({ title, cities }) => {
  const renderInfo = () => {
    if (cities.length > 0)
      return (
        <Info text={`${cities.length} villes correspondant au texte saisi`} />
      );
    return (
      <Info color="red" text={`Aucune ville correspondant au texte saisi`} />
    );
  };

  return (
    <div className="cities-list">
      <h4>{title}</h4>
    {renderInfo()}
      {cities.map((city) => (
        <City
          key={v4()}
          name={city.city}
          postalCode={city.codePostal}
        />
      ))}
    </div>
  );
};

export default CitiesList;
