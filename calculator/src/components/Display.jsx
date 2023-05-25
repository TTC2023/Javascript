import React from 'react'
import { useEffect, useState } from 'react'

const Display = ({equation, answer}) => {

  return (
    <div>
      <div className="d-flex justify-content-between" style={{height: '50px', width: '300px', backgroundColor: 'black'}}>
        <p className='m-1' style={{color: 'white'}}>Equation</p>
        <p className='m-1' style={{color: 'white'}}>Answer</p>
      </div>
      <div className="d-flex justify-content-between" style={{height: '50px', width: '300px', backgroundColor: 'black'}}>
        <p className='m-3' style={{color: 'white'}}>{equation}</p>
        <p className='m-3' style={{color: 'white'}}>{answer}</p>
      </div>
    </div>
  )
}

export default Display