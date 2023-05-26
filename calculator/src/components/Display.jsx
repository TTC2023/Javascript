import React from 'react'

const Display = ({equation, answer}) => {

  return (
    <div style={{borderRadius: '15%'}}>
      <div className="d-flex justify-content-between">
        <p className='m-1' style={{color: 'white'}}>Answer</p>
        <div className="d-flex justify-content-between text-align-center" style={{height: '50px', width: '100px', backgroundColor: '#3B473F', borderRadius: '50%'}}>
          <p className='m-3' style={{color: 'white'}}>{answer}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-2" style={{height: '50px', width: '300px', backgroundColor: '#3B473F', borderRadius: '10%'}}>
        <p className='m-3' style={{color: 'white'}}>{equation}</p>
      </div>
    </div>
  )
}

export default Display