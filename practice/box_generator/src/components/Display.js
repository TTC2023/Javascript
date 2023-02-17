import React from 'react'

const Display = (props) => {
    const {currentColor} = props;
  return (
    <div>
        <div style={{
            height: '50px',
            width: '50px',
            color:{currentColor}
        }}>
        </div>
    </div>
  )
}

export default Display