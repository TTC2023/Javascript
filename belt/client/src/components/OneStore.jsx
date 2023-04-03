import axios from 'axios'
import React, {useEffect,useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'

const OneStore = () => {
  const[store, setStore] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/api/stores/" + id)
        .then( res => {
            console.log(res.data)
            setStore(res.data)
        })
        .catch(err => console.log(err))
}, [id])

  const navigateToEdit=()=>{
    navigate("edit")
  }
  return (
    <div className='m-3'>
      <Link to="/"><h5>go to home</h5></Link>
      <h2>Store Name: {store.name}</h2>
      <h3>Store Number: {store.number}</h3>
      <h3>Status: {store.status}</h3>
      <button onClick={navigateToEdit}>Edit Store Details</button>
    </div>
  )
}

export default OneStore