import React from 'react'
import { useEffect, useState } from 'react'

const Display = ({number}) => {

  return (
    <div style={{height: '50px', width: '300px', backgroundColor: 'black'}}>
        <p style={{color: 'white'}}>{number}</p>
    </div>
  )
}

export default Display