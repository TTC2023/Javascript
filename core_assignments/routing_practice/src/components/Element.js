import React from 'react'
import {useParams} from "react-router-dom"

const Element = () => {
    const {element} = useParams();
    const num = parseInt(element);
  
    if (isNaN(num)) {
      console.log({num})
      return <div>The word is: {element}</div>;
    } else {
      return <div>The number is: {num}</div>;
    }
}

export default Element