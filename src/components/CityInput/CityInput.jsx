import React, { useState } from "react";
import "./CityInput.css";
const CityInput = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <form
      className="city-input"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(search);
      }}
    >
      <label>Je recherche...</label>
      <input
        type="text"
        onChange={handleSearchChange}
        value={search}
        placeholder="...une ville, un code postal"
      />
    </form>
  );
};

export default CityInput;
