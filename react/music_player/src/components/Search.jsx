import React, { useState } from 'react';
import axios from 'axios';
import './API';
import { MUSIC_API_URL } from './API';

const Search = ({ setSearch, search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${MUSIC_API_URL}/search`, {
        params: {
          q: searchInput,
          type: 'multi',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
      });
      console.log(response.data);
      setSearch(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="input-group input-group-sm m-3">
        <input
          type="text"
          className="form-control m-3"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
