import React, {useEffect, useState} from 'react'
import axios from 'axios'

const AuthorList = () => {
    const [authors, setAuthors] = useState([])

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


  return (
    <div>
        <table className="table table-striped mx-auto">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
            {authors.map((author, index) => {
                return (
                <tr key={index}>
                    <td>{author.name}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </div>
  )
    }

export default AuthorList