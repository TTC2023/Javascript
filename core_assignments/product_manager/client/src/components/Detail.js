import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const deleteProduct = (productId) => {
      axios.delete('http://localhost:8000/api/products/' + productId)
          .then((res) => {
              navigate('/products')
          })
          .catch(err => console.log(err))
  }
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <input type="submit" value="Delete" onClick={(e) => (deleteProduct(product._id))}/>
    </div>
  )
}

export default Detail