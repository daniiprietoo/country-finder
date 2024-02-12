import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Countries from './components/Countries';

function App() {
  const [countries, setNewCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((respose) => {
        setNewCountries(respose.data);
        console.log(respose);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Make sure loading state is turned off in case of error
      });
    }, 2000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Finder</h1>
      </header>
      {loading ? 'Loading...' : ''}
      <div className='SearchBar'>
          <SearchBar search={search} filter={handleSearch} />
      </div>
      <div className='Countries'>
        <Countries countries={countries} search={search} />
      </div>
    </div>
  );
}

export default App;
