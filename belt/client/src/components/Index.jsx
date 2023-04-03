import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Index= () => {
    const [stores, setStores] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
      axios.get("http://localhost:8000/api/stores")
      .then((res)=>{
          console.log(res.data)
          setStores(res.data)
      })
      .catch((err)=>{
          console.log(err)
      })
}, [])

    const navigateToForm =()=>{
      navigate('/create')
    }

    const deleteStore = (id) => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                const filteredStores = stores.filter(store => store._id !== id)
                setStores(filteredStores)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h3 className='m-3'>Find stores in your area!</h3>
        <table className="m-3 table table-striped">
            <thead>
                <tr>
                    <th>Store</th>
                    <th>Store Number</th>
                    <th>Open</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {stores.map((store, index) => {
                    return (
                        <tr key={index}>
                            <td><Link to={`/store/${store._id}`}>{store.name}</Link></td>
                            <td>{store.number}</td>
                            <td>{store.status}</td>
                            <td>
                                <button className="btn btn-danger" onClick={(e) => deleteStore(store._id)}>Remove</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button className='m-3' onClick={navigateToForm}>Can't find your store?</button>
    </div>
  )
}

export default Index