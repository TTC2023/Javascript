import React from 'react';

const Search = (props) => {
  const handleSearch = (event) => {
    props.setSearch(event.target.value);
    console.log(props.search)
  };

  return (
    <div>
      <div className="input-group input-group-sm m-3">
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleSearch} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <p>{props.search}</p>
    </div>
  );
};

export default Search;
