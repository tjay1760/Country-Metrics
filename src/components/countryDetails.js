import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import filterData from './filterData';
import './countryDetails.css';
import world from '../assets/world.png';

const CountryDetails = () => {
  const { name } = useParams();
  const data = useSelector((state) => state.countries.countries);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Filter the data only when the component mounts
    const allCountries = filterData(data);
    const foundCountry = allCountries.find((country) => country.name === name);
    setSelectedCountry(foundCountry);
  }, [data, name]);

  if (!selectedCountry) {
    return <div>...</div>;
  }

  return (
    <>
      <div className="details-container">
        <h1 className="continent">
          CONTINENT :
          {' '}
          {selectedCountry.region}
        </h1>
        <img className="world-icon" src={world} alt="world" />
      </div>
      <div className="stats">STATS BY COUNTRY</div>
      <div className="country-details">
        <div className="logo info darker">
          <h1>Logo</h1>
          <img className="logo-flag" src={selectedCountry.coatOfArms} alt="Coat of Arms" />
        </div>
        <div className="info official-name">
          <h1>Official Name</h1>
          <h1>{selectedCountry.name}</h1>
        </div>
        <div className="info darker capital">
          <h1>Capital</h1>
          <h1>{selectedCountry.capital}</h1>
        </div>
        <div className="info area">
          <h1>Area</h1>
          <h1>{selectedCountry.area}</h1>
        </div>
        <div className="info darker region">
          <h1>Region</h1>
          <h1>{selectedCountry.region}</h1>
        </div>
      </div>
    </>

  );
};

export default CountryDetails;
