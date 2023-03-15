import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {removeFromDom, products, setProducts} = props
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
}, [])

  return (
    <div>
        {
            products.map((product, index)=>{
            return (
                <div key={index}> 
                    <Link to={`/products/${product._id}`}> {product.title} Page! </Link>
                    <Link to={'/products/edit/' + product._id}>
                        Edit
                    </Link>
                    <input type="submit" value="Delete" onClick={(e) => (deleteProduct(product._id))}/>
                </div> 
            )})
        }
    </div>
  )
}

export default ProductList