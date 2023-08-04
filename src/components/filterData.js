import { v4 as uuidv4 } from 'uuid';

const filterData = (data) => data.map((country) => ({
  countryId: uuidv4(),
  name: country.name,
  officialName: country.nativeName,
  capital: country.capital,
  region: country.region,
  languages: country.languages,
  startOfWeek: country.timezones ? country.timezones[0] : null,
  population: country.population,
  continents: country.region,
  coatOfArms: country.flags.png,
  flagSmall: country.flags.png,
  flag: country.flags.svg,
  capitalLocation: {
    lat: country.latlng,
    long: country.latlng,
  },
  subregion: country.subregion,
  currency: country.currencies,
  timezones: country.timezones ? country.timezones[0] : null,
  area: country.area,
  flagAlt: `Flag of ${country.name}`,
}));

export default filterData;
