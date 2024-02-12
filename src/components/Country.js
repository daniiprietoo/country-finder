import React from 'react';
import '../styles/Country.css'

const Country = (props) => {
    const country = props.country;
       
    return (
        <div className='Country'>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <h4>Languages</h4>
          {
            country.languages && Object.keys(country.languages).map(languageCode => {
              return (
                <li key={languageCode}>{country.languages[languageCode]}</li>
              )
            })
          }
          <img src={country.flags.png} alt={country.name} />
        </div>
    )
}

export default Country;