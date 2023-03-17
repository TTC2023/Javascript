import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AuthorEdit = () => {
    const[name, setName] = useState()
    const{id} = useParams()
    const navigate = useNavigate()

    useEffect (() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then((res)=>{
                console.log(res)
                setName(res.data.name)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const onSubmitHandler = ()=>{
        axios.put("http://localhost:8000/api/author/" + id, {name})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
            navigate("/")
    }

  return (
    <form onSubmit={onSubmitHandler} className="form-control mx-auto">
            <label htmlFor="name">Name</label>
            <input type="text" value={name} className="form-control" onChange={(e)=>setName(e.target.value)} />
            <button type="submit" className="btn btn-primary m-3">Submit</button>
            <Link to={'/'}><button>Cancel</button></Link>
        </form>
  )
}

export default AuthorEdit