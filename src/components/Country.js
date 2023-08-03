import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import fetchCountries from '../redux/countries/fetchCountries';
import filterData from './filterData';

const Country = () => {
  const dispatch = useDispatch();
  const countriesLoaded = useSelector(
    (state) => state.countries.countries.length > 0,
  );

  useEffect(() => {
    if (!countriesLoaded) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countriesLoaded]);

  const data = useSelector((state) => state.countries.countries);
  let filteredCountries = filterData(data);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue
      .toLowerCase()
      .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
    setSearchQuery(formattedValue);
  };

  filteredCountries = data.filter(
    (country) => country.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <p className="search">
        <input
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </p>
      <div className="country-container">
        {filteredCountries.map((country) => (
          <div className="country-box" key={country.name}>
            <div className="country-name">{country.name}</div>

            <img
              className="flag"
              src={country.flag}
              alt={`Flag of ${country.name}`}
            />

            <div className="population">
              Population:
              {' '}
              {country.population}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
