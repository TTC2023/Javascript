import React from 'react';

const Result = (props) => {
  if (!Array.isArray(props.search)) {
    return <p>No search results found.</p>;
  } else{

    return (
      <div>
        <h3>Artists:</h3>
        {props.search.artists && props.search.artists.items.map((artist, index) => (
          <div key={index}>
            <p>{props.search.artists.items}</p>
          </div>
        ))}
      </div>
    );
  };
  }


export default Result;

