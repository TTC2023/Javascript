import React, { useState } from 'react';
import axios from 'axios';
import './API';
import { MUSIC_API_KEY, MUSIC_API_URL } from './API';

const Search = ({ setSearch, search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${MUSIC_API_URL}`, {
        params: {
          q: searchInput,
          type: 'multi',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
        headers: {
          'X-RapidAPI-Key': `${MUSIC_API_KEY}`,
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
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
        <h3>Artists:</h3>
        {search.artists && search.artists.items.map((artist, index) => (
          <div key={index}>
            <a href=''>{artist.data.profile.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
