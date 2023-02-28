import React from 'react'
import {useParams} from "react-router-dom"

const Color = () => {
    const {word} = useParams()
    const {color} = useParams()
    const {background} = useParams()
  return (
    <div style={{ 
        color: color, 
        backgroundColor: background
    }}>The word is: {word}
    </div>
  )
}

export default Color