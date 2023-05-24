import React from 'react'
import { useEffect, useState } from 'react'

const Display = ({equation}) => {

  return (
    <div style={{height: '50px', width: '300px', backgroundColor: 'black'}}>
        <p style={{color: 'white'}}>{equation}</p>
    </div>
  )
}

export default Display