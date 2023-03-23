import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddProductPage = (props) => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({...inputValue, [name]: value});
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        props.onAdd(inputValue);
        navigate('/admin/products')
    }
  return (
    <div>
        <form action="" onSubmit={onHandleSubmit}>
            <input type="text" placeholder='new product' onChange={onHandleChange} name= 'name' />
            <input type="text" onChange={onHandleChange} name="price"/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}


export default AddProductPage;