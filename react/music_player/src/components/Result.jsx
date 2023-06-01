import React from 'react';

const Result = (props) => {
  if (!Array.isArray(props.search)) {
    return <p>No search results found.</p>;
  }

  return (
    <div>
      {props.search.map((item, index) => (
        <div key={index}>
          <p>{item.data.profile.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Result;

