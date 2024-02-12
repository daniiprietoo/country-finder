import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className='Search'>
      <input
        type="text" 
        value={props.search} 
        onChange={props.filter} 
        placeholder="Search..."
      />
      <button type='submit'>Search</button>
    </div>
  );
}

export default SearchBar;