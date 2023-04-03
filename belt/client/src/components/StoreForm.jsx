import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const StoreForm = () => {
    const [store, setStore] = useState({
        name: "",
        number: 0
    })
    const [errors, setErrors] = useState({})
    const [id, setId] = useState()
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setStore({
            ...store,
            [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if (store.name.length < 2) {
            console.log(store.name)
            return false
        }
        if (store.number < 1) {
            console.log(store.number)
            return false
        }
        return isValid
    }

    // .then(res => {
    //     console.log(res)
    //     navigate(`/store/${id}`)
    // })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/stores', store)
                .then(res => {
                    setId(res.data._id)
                    console.log(res.data._id)
                    console.log(id)
                    navigate()
                })
                .catch(err => console.log(err))
                navigate(`/`)
            }
            else{
                setErrors({
                    name: "Name must be at least 2 characters",
                    number: "Number must be at greater than 0"
                })
            }
        }
    
  return (
    <div>
        <h3 className='m-3'>Add a new store!</h3>
        <Link to="/"><h5 className='m-3'>go to home</h5></Link>
        <div className='col-md-6 mx-auto'>
            {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
            {errors.number ? <p className="text-danger">{errors.number}</p> : ""}
        </div>
        <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Store Name</label>
                <input type="text" className="form-control" name="name" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="number">Store Number</label>
                <input type="number" className="form-control" name="number" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="status">Open?</label>
                <input type="checkbox" name="status" value={"Open"} onChange={onChangeHandler}/>
            </div>
            <button className="btn btn-info mt-3">Add a new store!</button>
        </form>
    </div>
  )
}


export default StoreForm