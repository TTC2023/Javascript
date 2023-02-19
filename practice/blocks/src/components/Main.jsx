import React from 'react'
import SubContents from './SubContents';

const Main = () => {
  const styles = {
    height: '500px',
    width: '550px',
    backgroundColor: '#e06666',
  };

  return (
    <div style={styles}>
      <SubContents/>
      <SubContents/>
      <SubContents/>
    </div>
  );
}

export default Main