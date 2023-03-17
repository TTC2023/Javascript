import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const AuthorList = () => {
    const [authors, setAuthors] = useState([])
    const navigate = useNavigate()

    useEffect (() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res)
                setAuthors(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const navigateToCreate = () => {
        navigate('/create')
    }

    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then((res)=>{
                console.log(res)
                setAuthors(authors.filter(author => author._id !== id))
            })
            .catch((err)=>{
                console.log(err)
            })
    }

  return (
    <div>
        <p>We have quotes by:</p>
        <table className="table table-striped mx-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
            {authors.map((author, index) => {
                return (
                <tr key={index}>
                    <td>{author.name}</td>
                    <td><Link to={'/edit/' + author._id}><button>Edit</button></Link><button onClick={()=>deleteAuthor(author._id)} className='mx-2'>Delete</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={navigateToCreate}>Create Author</button>
    </div>
  )
    }

export default AuthorList