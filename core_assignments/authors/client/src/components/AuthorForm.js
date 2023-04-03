import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AuthorForm = (props) => {
    const{authors, setAuthors} = props
    const[name, setName] = useState("")
    const[errors, setErrors] = useState({})
    const navigate = useNavigate()

    const formValidator = () => {
        let isValid = true
        if (name.length < 2) {
            return false}
        return isValid
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/authors', {
                name
            })
            .then(res=>{
                console.log(res.data)
                setAuthors([...authors, res.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
        } else {
            setErrors({
                name: "Name must be at least 2 characters"
            })
        }
    }

    return (
    <>
        <Link to={'/'}>Home</Link>
        {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
        <form onSubmit={onSubmitHandler} className="col-md-6 mx-auto">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" onChange={(e)=>setName(e.target.value)} />
            <button type="submit" className="btn btn-primary m-3">Submit</button>
            <Link to={'/'}><button>Cancel</button></Link>
        </form>
    </>
  )
}

export default AuthorForm