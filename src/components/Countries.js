import React from 'react';
import Country from './Country';
import { useState } from 'react';
import '../styles/Countries.css';

const Countries = (props) => {
    const countries = props.countries.sort((a, b) => a.name.common.localeCompare(b.name.common));;
    const search = props.search;
    const [showAll, setShowAll] = useState(false);

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    const checkCountriesNumber = () => {
      const threshold = 10;
      return filteredCountries.length > threshold;
    };
    

    const handleShowAll = () => {
      if (showAll) {
        setShowAll(false);
      } else {
        setShowAll(true);
      }
    }

    return (
      <div >
        <button className='ShowButton' onClick={handleShowAll}>Show All</button>
        <div className={`CountryList ${showAll ? 'show' : ''}`}>
          { 
            checkCountriesNumber() && !showAll ? 'Too many matches, specify another filter' :
            countries
            .filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))
            .map((country, index) => {
            return (
              <Country key={index} country={country} />
            )
          })}
        </div>
      </div>
    )
}

export default Countries;