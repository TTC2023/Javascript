import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
    const{authors, setAuthors} = props
    const[name, setName] = useState()
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        axios.post('http://localhost:8000/api/authors', {
            name
        })
        .then(res=>{
            console.log(res.data)
            setAuthors([...authors, res.data])
        })
        .catch(err=>console.log(err))
        navigate('/')
    }


  return (
    <>
        <Link to={'/'}>Home</Link>
        <form onSubmit={onSubmitHandler} className="form-control mx-auto">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" onChange={(e)=>setName(e.target.value)} />
            <button type="submit" className="btn btn-primary m-3">Submit</button>
            <Link to={'/'}><button>Cancel</button></Link>
        </form>
    </>
  )
}

export default AuthorForm