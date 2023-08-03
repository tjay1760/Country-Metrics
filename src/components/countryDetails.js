import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import filterData from './filterData';

const CountryDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.events.events);
  const allCountries = filterData(data);
  const selectedCountry = allCountries.find((country) => country.id === id);

  return (
    <div className="country-details">
      <div className="logo info">
        <h1>Logo</h1>
        <img src={selectedCountry.coatOfArms} alt="Coat of Arms" />
      </div>
      <div className="info dark official-name">
        <h1>Official Name</h1>
        <h1>{selectedCountry.name}</h1>
      </div>
      <div className="info capital">
        <h1>Capital</h1>
        <h1>{selectedCountry.capital}</h1>
      </div>
      <div className="info dark area">
        <h1>Area</h1>
        <h1>{selectedCountry.area}</h1>
      </div>
      <div className="info region">
        <h1>Region</h1>
        <h1>{selectedCountry.region}</h1>
      </div>
    </div>
  );
};

export default CountryDetails;
