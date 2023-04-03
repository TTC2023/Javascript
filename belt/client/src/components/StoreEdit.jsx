import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate, Link, useParams} from 'react-router-dom'

const StoreEdit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [store, setStore] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => setStore(res.data))
            .catch(err => console.log(err))
    }, [])

    const onChangeHandler = (e) => {
        setStore({
            ...store,
            [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if (store.name.length < 3) {
            console.log(store.name)
            return false
        }
        if (store.number < 1) {
            console.log(store.number)
            return false
        }
        return isValid
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.put(`http://localhost:8000/api/stores/${id}`, store)
                .then(res => {
                    console.log(res)
                    navigate(`/store/${id}`)
                })
                .catch(err => console.log(err))
        }
        else{
            setErrors({
                name: "Name must be at least 3 characters",
                number: "Number must be at greater than 0"
            })
        }

    }
  return (
    <div>
        <h3 className='m-3'>Edit this store!</h3>
        <Link to="/"><h5 className='m-3'>go to home</h5></Link>
        <div className='col-md-6 mx-auto'>
            {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
            {errors.number ? <p className="text-danger">{errors.number}</p> : ""}
        </div>
        <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Store Name</label>
                <input type="text" className="form-control" name="name" value={store.name} onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="number">Store Number</label>
                <input type="number" className="form-control" name="number" value={store.number} onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="status">Open?</label>
                <input type="checkbox" name="status" value={"Open"} onChange={onChangeHandler}/>
            </div>
            <button className="btn btn-info mt-3">Edit this store!</button>
        </form>
    </div>
  )
}

export default StoreEdit