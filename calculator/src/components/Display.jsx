import React from 'react'

const Display = ({ equation, answer }) => {

  return (
    <div className="d-flex flex-column align-items-center" style={{ borderRadius: '15%' }}>
      <div className="d-flex justify-content-center text-center" style={{ height: '50px', width: '100px', backgroundColor: '#FFFDED', borderRadius: '25px', color: 'black' }}>
        <p className="m-3">{answer}</p>
      </div>
      <div className="d-flex justify-content-between mt-2" style={{ height: '50px', width: '300px', backgroundColor: '#FFFDED', borderRadius: '25px' }}>
        <p className="m-3 text-dark">{equation}</p>
      </div>
    </div>
  )
}

export default Display