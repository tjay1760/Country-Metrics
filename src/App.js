import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Country from './components/Country';
import CountryDetails from './components/countryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
      <CountryDetails />
    </div>
  );
}

export default App;
