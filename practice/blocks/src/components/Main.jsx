import React from 'react'
import Advertisement from './Advertisement';
import SubContents from './SubContents';

const Main = () => {
  const styles = {
    align: 'right',
    height: '400px',
    width: '700px',
    margin: '10px',
    padding: '10px',
    backgroundColor: '#e06666',
  };

  return (
     <div style={styles}>
      <div className="main">
        <SubContents/>
        <SubContents/>
        <SubContents/>
      </div>
      <Advertisement/>
    </div>
  );
}

export default Main